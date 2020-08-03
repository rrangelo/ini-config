const _ = require('lodash');
var assert = require('assert');
let ini = require('../src/init-config');

let mainConfig = JSON.parse('{"main":{"key":"root value"},"section":{"key":"root value"}}');
//let foldedConfig = '{"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}';

let config = ini();

describe('Load main default', function () {
  describe('#config()', function () {
    it('should be equals', function () {
      assert.equal(config, mainConfig);
    });
  });
});

/*
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
});
*/

/*
global:       {"main":{"key":"root value"},"section":{"key":"root value"}}
config:       root value
global:       {"main":{"key":"root value"},"section":{"key":"folder value"},"sub":{"key":"folder value"}}
config:       folder value
*/