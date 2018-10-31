'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://222.73.44.144:8300"', // http://10.20.30.177:8301 http://101.231.89.126:8300 http://222.73.44.144:8300
})
