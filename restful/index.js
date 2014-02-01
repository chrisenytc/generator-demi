'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RestfulGenerator = module.exports = function RestfulGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(RestfulGenerator, yeoman.generators.NamedBase);

RestfulGenerator.prototype.files = function files() {
  this.template('_restfulCtrl.js', 'api/controllers/' + this.name.toLowerCase() + '.js');
};
