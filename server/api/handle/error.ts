import path from 'node:path'
import { readFileSync } from 'node:fs'
import type { H3Event } from 'h3'
import { defineEventHandler } from 'h3'
import { getRepository } from '#typeorm'
import { ErrorEntity } from '~~/server/entities/error.entity'
import logger from '~~/server/utils/logger'
import { SourceMapConsumer } from 'source-map-js'

const write = async (data: { error: string; source: string }) => {
  const errorRepository = await getRepository(ErrorEntity)

  try {
    const error = JSON.parse(data.error) as Error

    if (error.stack) {
      error.stack = await parseErrorWithSourceMap(errorData.stack)
    }

    await errorRepository.create({
      error: error.message,
      trace: error.stack ?? null,
      source: data.source ?? 'unknown',
    }).save()

    logger.error(`Client error from ${data.source}: ${error.message} (${data.error})`)
  } catch {
    logger.error(`Client error from ${data.source}: ${data.error}`)
  }
}

const parseErrorWithSourceMap = async (stack: string) => {
  const mapFileName = extractMapFileNameFromStack(stack)
  if (!mapFileName) {
    return stack
  }

  try {
    const rawSourceMap = await fetchSourceMapForError(mapFileName)
    const consumer = await new SourceMapConsumer(rawSourceMap)

    const parsedStack = stack
      .split('\n')
      .map((line) => {
        const match = line.match(/at (.*):(\d+):(\d+)/)
        if (match) {
          const [_, source, lineNumber, columnNumber] = match
          const pos = consumer.originalPositionFor({
            line: parseInt(lineNumber, 10),
            column: parseInt(columnNumber, 10),
          })

          return `${pos.source}:${pos.line}:${pos.column} - ${pos.name || 'unknown function'}`
        }

        return line
      })
      .join('\n')

    consumer.destroy()

    return parsedStack
  } catch (error) {
    console.error('Failed to parse stack trace with source map:', error)

    return stack
  }
}

const fetchSourceMapForError = async (fileName: string) => {
  const sourceMapDir = '../public/_nuxt/'
  const mapFilePath = path.join(sourceMapDir, `${fileName}.map`)

  try {
    const mapFileContent = readFileSync(mapFilePath, 'utf8')

    return JSON.parse(mapFileContent)
  } catch (error) {
    console.error(`Failed to load source map for file ${mapFilePath}`, error)

    throw new Error(`Source map not found for file: ${fileName}`)
  }
}

const extractMapFileNameFromStack = (stack: string) => {
  const match = stack.match(/\/(.*\.js):\d+:\d+/)

  return match ? path.basename(match[1], '.js') : null
}

export default defineEventHandler(async (event: H3Event) => {
  const query = await getQuery(event)

  return write(query)
})
