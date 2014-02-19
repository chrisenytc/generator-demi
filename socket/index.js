'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var SocketGenerator = module.exports = function SocketGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call
	// as `this.name`.
	yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(SocketGenerator, yeoman.generators.NamedBase);

SocketGenerator.prototype.files = function files() {
	this.template('_socket.js', 'api/sockets/' + this.name.toLowerCase() + '.js');
};