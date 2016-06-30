'use strict';

/**
 * Test dependencies
 */
var assert = require('assert')
  , fs = require('fs')
  , common = require('./common')
  , Memcached = require('../index.js');

global.testnumbers = global.testnumbers || +(Math.random(10) * 1000000).toFixed();

/**
 * Expresso test suite for all `config` related
 * memcached commands
 */
describe('Memcached CONFIG', function () {
    this.timeout(5000);
  /**
   * Make sure that adding a key which already exists returns an error.
   */
  it('fail to check config get cluster', function (done) {
    var memcached = new Memcached(common.servers.single, {autodiscovery:false, update_time: 1000}, {timeout:10000})
        , callbacks = 0;
      memcached.config('cluster', function (error, ok) {
        ++callbacks;
        assert.ok(!error);
        ok.should.be.true;
        console.log('its true')

        memcached.end(); // close connections
        //assert.equal(callbacks, 1);
        console.log(callbacks)
        done();
      });
  });
});