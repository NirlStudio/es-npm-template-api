'use strict'

var path = require('path')
var sugly = require('sugly')

// create the void.
var $void = sugly()
require('./profile')($void)

// prepare the path of app home directory.
var srcHome = path.join(__dirname, 'sugly')

if (require.main === module) {
  // running as an app.
  var args = global.process.argv.slice(2) || []
  module.exports = $void.$run('app', args, srcHome)
} else {
  console.warn('This package can only work as an app.')
  module.exports = {}
}
