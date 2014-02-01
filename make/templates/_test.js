/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var supertest = require('supertest');
var Demi = require('../lib/demi.js');
var request = supertest(new Demi());
var chai = require('chai');
chai.expect();
chai.should();

describe('#<%= name %>', function () {
  describe('<%= args[1] %>', function () {
    it('<%= args[2] %>', function (done) {
      request
        .get('/<%= name %>')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {}, done);
    });
  });
});
