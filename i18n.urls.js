const urls = require('./src/.routify/urlIndex.json')
const langs = ['/en', '/ru']
// we map each url with an array of corresponding i18n urls.
// Notice flat() at the end - we don't want an array of arrays.
module.exports = urls.map(url => langs.map(lang => lang + url)).flat()