const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
let foldedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}');
let foldedNamedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"},"another":{"config":"ini"}}');

describe('hooks', function () {

  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  // test cases
  describe('Success main #config()', function () {
    it('should be equals', function () {
      let config = ini();
      assert.deepStrictEqual(config, mainConfig);
    });
  });

  describe('Success folded #config(path)', function () {
    it('should be equals', function () {
      let config = ini('config');
      assert.deepStrictEqual(config, foldedConfig);
    });
  });

  describe('Success folded named #config(path, name)', function () {
    it('should be equals', function () {
      let config = ini('config', 'another');
      assert.deepStrictEqual(config, foldedNamedConfig);
    });
  });

});

/*
global:       {"main":{"key":"root value"},"section":{"key":"root value"}}
config:       root value
global:       {"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}
config:       folder value
global:       {"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"},"another":{"config":"ini"}}
config:       folder value
*/