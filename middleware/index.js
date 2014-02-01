'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var MiddlewareGenerator = module.exports = function MiddlewareGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(MiddlewareGenerator, yeoman.generators.NamedBase);

MiddlewareGenerator.prototype.files = function files() {
  this.template('_middleware.js', 'api/middlewares/' + this.name + '.js');
};
