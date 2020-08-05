const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"section":{"key":"value","subsection":{"key":"value"}},"other_section":{"key":"value"}}');
let namedConfig = JSON.parse('{"other":{"config":"conf"}}');
let foldedConfig = JSON.parse('{"folded":{"config":"ini"}}');
let foldedNamedConfig = JSON.parse('{"another":{"folded":{"config":"ini"}},"in":{"other":"context"}}');

describe('Success Unit Tests', function () {

  beforeEach(function () {
    global.iniconf = undefined;
  });

  afterEach(function () {
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
      assert.deepStrictEqual(iniconf, namedConfig);
    });
  });

  describe('3 - #config({folder})', function () {
    it('should be equals', function () {
      ini({folder: 'config'});
      assert.deepStrictEqual(iniconf, foldedConfig);
    });
  });

  describe('4 - #config({folder, name, context})', function () {
    it('should be equals', function () {
      ini({folder: 'config', name: 'another', context: 'inictx'});
      assert.deepStrictEqual(inictx, foldedNamedConfig);
    });
  });

});
