const _ = require('lodash');
var assert = require('assert');
let ini = require('../index');

let mainConfig = JSON.parse('{"section":{"key":"value","subsection":{"key":"value"}},"other_section":{"key":"value"}}');
let namedConfig = JSON.parse('{"other":{"config":"conf"}}');
let foldedConfig = JSON.parse('{"folded":{"config":"ini"}}');
let foldedNamedConfig = JSON.parse('{"another":{"folded":{"config":"ini"}},"in":{"other":"context"}}');

describe('Unit Tests', function () {

  describe('Success', function () {

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

  describe('Error', function () {

    beforeEach(function () {
      global.iniconf = undefined;
    });

    afterEach(function () {
      global.iniconf = undefined;
    });

    describe('1 - File Not Found', function () {
      it('should be throws', function () {
        assert.throws(
          () => {
            ini({ name: 'pepe' });
          }, 
          (error) => {
            assert.deepStrictEqual(error, 'File not found');
            return true;
          }
        );
      });
    });

    describe('2 - External File Not Found', function () {
        
      beforeEach(function () {
        process.env.EXT_INI_CONF = 'pepe.ini';
      });

      afterEach(function () {
        process.env.EXT_INI_CONF = undefined;
      });

      describe('2.1 - With .ini file', function () {
        it('should be throws', function () {
          assert.throws(
            () => {
              ini();
            }, 
            (error) => {
              assert.deepStrictEqual(error, 'File not found');
              return true;
            }
          );
        });
      });

      describe('2.2 - Without .ini file', function () {
        it('should be throws', function () {
          assert.throws(
            () => {
              ini({ name: 'pepe' });
            }, 
            (error) => {
              assert.deepStrictEqual(error, 'File not found');
              return true;
            }
          );
        });
      });

    });

  });

});
