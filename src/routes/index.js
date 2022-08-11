const express = require('express')
const router = express.Router()
const artigos = require('../data/artigos.js')
const dev = process.env.NODE_ENV === 'development'

if (dev) {
  router.use('/generate', require('./admin'))
}

const rootUrl = process.env.ROOT_URL || 'http://localhost:3000/'
const baseUrl = process.env.BASE_URL || 'http://localhost:3000/'

const getBrand = (brand) => {
  const str = brand.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const brands = ['anhanguera', 'pitagoras', 'unic', 'unopar', 'uniderp', 'unime']
  return brands.includes(str) ? str : 'anhanguera'
}
const getName = (brand) => {
  switch (brand) {
    case 'pitagoras':
      return 'Pitágoras'
    case 'unic':
      return 'Unic'
    case 'unopar':
      return 'Unopar'
    case 'uniderp':
      return 'Uniderp'
    case 'unime':
      return 'Unime'
    default:
      return 'Anhanguera'
  }
}

router.get('/:brand?', (request, response) => {
  const brand = getBrand(request.params.brand)
  const brandName = getName(brand)
  const _rootUrl = brand ? rootUrl + brand + '/' : rootUrl
  response.render('index.ejs', {
    artigos,
    brand,
    brandName,
    rootUrl: _rootUrl,
    baseUrl,
    title: 'Portal de calouros',
    layout: './layouts/default'
  })
})

router.get(['/:brand/:id', '/:id'], (request, response) => {
  const brand = getBrand(request.params.brand)
  const brandName = getName(brand)
  const _rootUrl = brand ? rootUrl + brand + '/' : rootUrl
  const artigo = artigos.filter(item => parseInt(item.id) === parseInt(request.params.id))[0]
  response.render('artigo.ejs', {
    artigos,
    brand,
    brandName,
    artigo,
    rootUrl: _rootUrl,
    baseUrl,
    title: `${artigo.title} | Portal de calouros`,
    layout: './layouts/default'
  })
})

module.exports = router
