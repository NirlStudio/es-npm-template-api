'use strict'

var modules = require('sugly/lib/modules')

module.exports = function ($void) {
  modules.expose('path', 'express', 'body-parser')
}
