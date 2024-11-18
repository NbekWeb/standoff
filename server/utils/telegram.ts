const runtimeConfig = useRuntimeConfig()
const telegramBotToken = runtimeConfig.telegram.token

export const sendMessage = async (chat: number, message: string) => {
  if (!telegramBotToken || !chat) {
    console.error('Telegram Bot token or Chat ID is missing.')

    return
  }

  const chunkSize = 4096
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`

  try {
    for (let i = 0; i < message.length; i += chunkSize) {
      const chunk = message.slice(i, i + chunkSize)

      let sent = false
      while (!sent) {
        try {
          const response = await $fetch({
            url,
          }, {
            body: {
              chat_id: chat,
              text: chunk,
            },
            headers: {
              headers: { 'Content-Type': 'application/json' },
            },
          })

          if (response.data.ok) {
            sent = true
          } else {
            throw response.data
          }
        } catch (error) {
          if (error.error_code === 429 && error.parameters?.retry_after) {
            // Если ошибка 429, ждём указанный интервал перед повторной попыткой
            const retryAfter = error.parameters.retry_after
            console.warn(`Rate limited by Telegram. Retrying in ${retryAfter} seconds...`)
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000))
          } else {
            console.error('Failed to send message to Telegram:', error)
            sent = true
          }
        }
      }
    }
  } catch (error) {
    console.error('Unexpected error while sending message to Telegram:', error)
  }
}
