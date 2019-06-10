'use strict'

var path = require('path')
var sugly = require('sugly')

// create the void.
var $void = sugly()
require('./profile')($void)

function main (args) {
  return $void.$run('app',
    Array.isArray(args) ? args : [],
    path.join(__dirname, 'sugly')
  )
}

module.exports = require.main !== module ? main
  : main(global.process.argv.slice(2) || [])
