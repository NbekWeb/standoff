import * as winston from 'winston'
import { sendMessage } from '~~/server/utils/telegram'
import type { CliConfigSetLevels } from 'winston/lib/winston/config'

class Logger {
  consoleLogger: winston.Logger
  fileLogger: winston.Logger
  telegramChatId: string

  level: keyof CliConfigSetLevels

  constructor() {
    const runtimeConfig = useRuntimeConfig()

    this.level = runtimeConfig.logger.level
    this.telegramChatId = runtimeConfig.logger.telegram.chat

    this.consoleLogger = winston.createLogger({
      level: this.level,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: 'HH:mm:ss.SSS YYYY-MM-DD' }),
        winston.format.printf(info => `[${info.timestamp}][${info.level}]: ${info.message}`),
      ),
      transports: [
        new winston.transports.Console({
          level: 'error',
          stderrLevels: ['error'],
        }),
        new winston.transports.Console({
          level: this.level,
          stderrLevels: [],
        }),
      ],
    })

    this.fileLogger = winston.createLogger({
      level: this.level,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'HH:mm:ss.SSS YYYY-MM-DD' }),
        winston.format.printf(info => `[${info.timestamp}][${info.level}]: ${info.message}`),
      ),
      transports: [
        new winston.transports.File({ filename: 'logs.log' }),
      ],
    })
  }

  private async sendToTelegram(message: string) {
    return sendMessage(this.telegramChatId, message)
  }

  log(level: keyof CliConfigSetLevels, text: string, silent = false) {
    this.consoleLogger.log(level, text)
    this.fileLogger.log(level, text)

    if (!silent && (level === 'error' || level === 'warn')) {
      this.sendToTelegram(`[${level}]: ${text}`)
    }
  }

  silly(text: string) {
    this.log('silly', text)
  }

  debug(text: string) {
    this.log('debug', text)
  }

  verbose(text: string) {
    this.log('verbose', text)
  }

  info(text: string) {
    this.log('info', text)
  }

  warn(text: string, silent = false) {
    this.log('warn', text, silent)
  }

  error(text: string) {
    this.log('error', text)
  }
}

export default new Logger()
