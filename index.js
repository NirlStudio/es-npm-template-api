'use strict'

var path = require('path')
var espresso = require('eslang')

// create the void.
var $void = espresso()
require('./profile')($void)

function main (args) {
  return $void.$run('app',
    Array.isArray(args) ? args : [],
    path.join(__dirname, 'es')
  )
}

module.exports = require.main !== module ? main
  : main(global.process.argv.slice(2) || [])
