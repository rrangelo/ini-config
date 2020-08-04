const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
let mainAndFoldedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}');
let mainAndFoldedAndNamedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"},"another":{"config":"ini"}}');

describe('Success', function () {

  after(function () {
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
      assert.deepStrictEqual(config, mainAndFoldedConfig);
    });
  });

  describe('3 - #config(path, name)', function () {
    it('should be equals', function () {
      ini('config', 'another');
      assert.deepStrictEqual(config, mainAndFoldedAndNamedConfig);
    });
  });

});
