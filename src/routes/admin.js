/* eslint-disable node/handle-callback-err */
const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

function slugify (string) {
  return string.toString().toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a') // Special Characters #1
    .replace(/[èÈéÉêÊëË]+/g, 'e') // Special Characters #2
    .replace(/[ìÌíÍîÎïÏ]+/g, 'i') // Special Characters #3
    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o') // Special Characters #4
    .replace(/[ùÙúÚûÛüÜ]+/g, 'u') // Special Characters #5
    .replace(/[ýÝÿŸ]+/g, 'y') // Special Characters #6
    .replace(/[ñÑ]+/g, 'n') // Special Characters #7
    .replace(/[çÇ]+/g, 'c') // Special Characters #8
    .replace(/[ß]+/g, 'ss') // Special Characters #9
    .replace(/[Ææ]+/g, 'ae') // Special Characters #10
    .replace(/[Øøœ]+/g, 'oe') // Special Characters #11
    .replace(/[%]+/g, 'pct') // Special Characters #12
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function getObject (element, array, id, index) {
  const elements = [...element.querySelectorAll(`[data-object="${id}"] > [data-key]`)]
  elements.forEach(el => {
    if (el.dataset.array) {
      array[el.dataset.key] = []
      const objs = [...el.parentElement.querySelectorAll(`[data-array="${el.dataset.array}"] > [data-object]`)]
      objs.forEach((el2, i) => {
        array[el.dataset.key].push({})
        const _id = el2.getAttribute('data-object')
        getObject(el2, array[el.dataset.key][i], _id, i)
      })
    } else {
      array[el.dataset.key] = el.innerHTML
      array.id = index + 1
      if (el.dataset.slug) {
        array.slug = slugify(el.textContent)
      }
    }
  })
  return array
}

function createFiles (filename) {
  fs.readFile(path.join(__dirname, `../data/artigos/${filename}.html`), 'utf8', function (error, html) {
    html = html.replace('@MARCA@', '<span class="brand-name"></span>')
    const dom = new JSDOM(html)
    const { document } = dom.window

    document.querySelectorAll('[data-object]').forEach(el => {
      el.dataset.object = Math.random().toString(36).substr(2, 9)
    })
    document.querySelectorAll('[data-array]').forEach(el => {
      el.dataset.array = Math.random().toString(36).substr(2, 9)
    })
    const id = document.querySelector('[data-object]').getAttribute('data-object')
    const array = {}
    const obj = getObject(document, array, id, 0)
    const data = `
    module.exports = ${JSON.stringify(obj)}
    `
    fs.writeFileSync(path.join(__dirname, `../data/artigos/${filename}.js`), data, 'utf8')
    // fs.writeFileSync(path.join(__dirname, `../data/artigos/artigo1.json`), JSON.stringify(obj))
  })
}

router.get('/', (request, response) => {
  createFiles('artigo1')
  response.send('ok')
})

module.exports = router
