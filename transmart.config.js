// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  baseLocale: 'en',
  locales: ['en', 'de', 'fr', 'es', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'pt', 'it', 'ru'],
  localePath: 'src/i18n/locales',
  openAIApiKey: process.env.OPENAI_API_KEY,
  openAIApiUrl: process.env.OPENAI_API_URL,
}
