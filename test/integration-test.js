const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"section":{"key":"value","subsection":{"key":"value"}},"other_section":{"key":"value"}}');
let mainAndNamedConfig = JSON.parse('{"section":{"key":"value","subsection":{"key":"value"}},"other_section":{"key":"value"},"other":{"config":"conf"}}');
let mainAndNamedAndFoldedConfig = JSON.parse('{"section":{"key":"value","subsection":{"key":"value"}},"other_section":{"key":"value"},"other":{"config":"conf"},"folded":{"config":"ini"}}');
let NamedFoldedInContextConfig = JSON.parse('{"another":{"folded":{"config":"ini"}},"in":{"other":"context"}}');

describe('Success Integration Tests', function () {

  before(function () {
    global.iniconf = undefined;
  });

  after(function () {
    global.iniconf = undefined;
  });

  describe('1 - #config()', function () {
    it('should be equals', function () {
      ini();
      assert.deepStrictEqual(iniconf, mainConfig);
    });
  });

  describe('2 - #config({name, ext})', function () {
    it('should be equals', function () {
      ini({name: 'other', ext: 'conf'});
      assert.deepStrictEqual(iniconf, mainAndNamedConfig);
    });
  });

  describe('3 - #config({folder})', function () {
    it('should be equals', function () {
      ini({folder: 'config'});
      assert.deepStrictEqual(iniconf, mainAndNamedAndFoldedConfig);
    });
  });

  describe('4 - #config({folder, name, context})', function () {
    it('should be equals', function () {
      ini({folder: 'config', name: 'another', context: 'inictx'});
      assert.deepStrictEqual(inictx, NamedFoldedInContextConfig);
    });
  });

});
