'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
  this.copy('_model.js', 'api/models/' + this.name.toLowerCase() + '.js');
};
