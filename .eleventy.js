require('dotenv').config()
const {documentToHtmlString} = require('@contentful/rich-text-html-renderer')

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('documentToHtmlString', documentToHtmlString)
}
