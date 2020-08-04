const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
let mainAndNamedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"},"other":{"config":"ini"}}');
let mainAndNamedAndFoldedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"other":{"config":"ini"},"sub":{"key":"folder value"}}');
let mainAndNamedAndFoldedAndNamedFoldedConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"folder value"},"other":{"config":"ini"},"sub":{"key":"folder value"},"another":{"config":"ini"}}');

describe('Success Integration Tests', function () {

  after(function () {
    global.config = undefined;
  });

  describe('1 - #config()', function () {
    it('should be equals', function () {
      ini();
      assert.deepStrictEqual(config, mainConfig);
    });
  });

  describe('2 - #config({name})', function () {
    it('should be equals', function () {
      ini({name: 'other'});
      assert.deepStrictEqual(config, mainAndNamedConfig);
    });
  });

  describe('3 - #config({folder})', function () {
    it('should be equals', function () {
      ini({folder: 'config'});
      assert.deepStrictEqual(config, mainAndNamedAndFoldedConfig);
    });
  });

  describe('4 - #config({folder, name})', function () {
    it('should be equals', function () {
      ini({folder: 'config', name: 'another'});
      assert.deepStrictEqual(config, mainAndNamedAndFoldedAndNamedFoldedConfig);
    });
  });

});
