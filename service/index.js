'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

ServiceGenerator.prototype.files = function files() {
  this.copy('_service.json', 'api/services/' + this.name.toLowerCase() + '.json');
};
