/*
 * @Author: saber
 * @Date: 2022-01-04 14:25:35
 * @LastEditTime: 2022-01-04 16:04:40
 * @LastEditors: saber
 * @Description: 
 */
;(() => {
  const supportedLangs = window.supportedLangs
  const cacheKey = 'preferred_lang'
  const defaultLang = 'zh-CN'
  // docs supported languages
  const langAlias = {
    en: 'en-US',
    fr: 'fr-FR',
    es: 'es-ES',
  }
  let userPreferredLang = localStorage.getItem(cacheKey) || navigator.language
  const language =
    langAlias[userPreferredLang] ||
    (supportedLangs.includes(userPreferredLang)
      ? userPreferredLang
      : defaultLang)
  localStorage.setItem(cacheKey, language)
  userPreferredLang = language
  if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
    location.pathname =
      toPath.endsWith('.html') || toPath.endsWith('/')
        ? toPath
        : toPath.concat('/')
  }
})()
