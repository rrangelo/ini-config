const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
let foldedConfig = JSON.parse('{"sub":{"key":"folder value"},"section":{"key":"folder value"}}');
let namedConfig = JSON.parse('{"other":{"config":"ini"}}');
let foldedNamedConfig = JSON.parse('{"another":{"config":"ini"}}');

describe('Success Unit Tests', function () {

  afterEach(function () {
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
      assert.deepStrictEqual(config, namedConfig);
    });
  });

  describe('3 - #config({folder})', function () {
    it('should be equals', function () {
      ini({folder: 'config'});
      assert.deepStrictEqual(config, foldedConfig);
    });
  });

  describe('4 - #config({folder, name})', function () {
    it('should be equals', function () {
      ini({folder: 'config', name: 'another'});
      assert.deepStrictEqual(config, foldedNamedConfig);
    });
  });

});
