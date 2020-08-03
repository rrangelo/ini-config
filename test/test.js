const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
let foldedConfig = JSON.parse('{"sub":{"key":"folder value"},"section":{"key":"folder value"}}');
let namedConfig = JSON.parse('{"another":{"config":"ini"}}');
let mainAndFoldedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}');
let mainAndNamedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"},"another":{"config":"ini"}}');
let foldedAndNamedConfig = JSON.parse('{"sub":{"key":"folder value"},"section":{"key":"folder value"},"another":{"config":"ini"}}');
let mainAndFoldedAndNamedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"},"another":{"config":"ini"}}');

describe('Success', function () {

  afterEach(function () {
    global.config = undefined;
  });

  describe('1 - #config()', function () {
    it('should be equals', function () {
      ini();
      assert.deepStrictEqual(config, mainConfig);
    });
  });

  describe('2 - #config(path)', function () {
    it('should be equals', function () {
      ini('config');
      assert.deepStrictEqual(config, foldedConfig);
    });
  });

  describe('3 - #config(path, name)', function () {
    it('should be equals', function () {
      ini('config', 'another');
      assert.deepStrictEqual(config, namedConfig);
    });
  });

  describe('4 - #config() + #config(path)', function () {
    it('should be equals', function () {
      ini();
      ini('config');
      assert.deepStrictEqual(config, mainAndFoldedConfig);
    });
  });

  describe('5 - #config() + #config(path, name)', function () {
    it('should be equals', function () {
      ini();
      ini('config', 'another');
      assert.deepStrictEqual(config, mainAndNamedConfig);
    });
  });

  describe('6 - #config(path) + #config(path, name)', function () {
    it('should be equals', function () {
      ini('config');
      ini('config', 'another');
      assert.deepStrictEqual(config, foldedAndNamedConfig);
    });
  });

  describe('7 - #config() + #config(path) + #config(path, name)', function () {
    it('should be equals', function () {
      ini();
      ini('config');
      ini('config', 'another');
      assert.deepStrictEqual(config, mainAndFoldedAndNamedConfig);
    });
  });

});
