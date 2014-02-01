'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var MakeGenerator = module.exports = function MakeGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(MakeGenerator, yeoman.generators.NamedBase);

MakeGenerator.prototype.files = function files() {
  this.copy('_test.js', 'test/' + this.name.toLowerCase() + '_test.js');
};
