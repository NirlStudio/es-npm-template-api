var path = require('path')
var assert = require('assert')

var sugly = require('sugly')

// create the void.
var $void = sugly()
require('../profile')($void)

var appHome = path.resolve(__dirname, '../sugly/@')
var space = $void.createBootstrapSpace(appHome)

describe('package', function () {
  it('package can be imported as a function.', function () {
    var pkg = require('..')
    assert.strict.equal(typeof pkg, 'function')
  })
})

describe('sugly/profile', function () {
  var profile = space.$load('./profile')

  describe('server-port', function () {
    it('server-port is 6500.', function () {
      assert.strict.equal(profile['server-port'], 6500)
    })
  })

  describe('initial-todos', function () {
    var initialToDos = profile['initial-todos']
    it('initial-todos is a global array.', function () {
      assert.strict.equal(typeof initialToDos, 'object')
      assert(Array.isArray(initialToDos))
      assert.strict.equal(initialToDos.length, 1)
    })
  })
})

describe('sugly/api', function () {
  describe('todo', function () {
    it('todo.api is an express middleware', function () {
      var todo = space.$import('api/todo')
      assert.strict.equal(typeof todo.api, 'function')
      var api = todo.api
      assert.strict.equal(typeof api.get, 'function')
      assert.strict.equal(typeof api.post, 'function')
      assert.strict.equal(typeof api.put, 'function')
      assert.strict.equal(typeof api.delete, 'function')
    })
  })
})
