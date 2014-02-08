'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var banner = require('./banner.js');


var DemiGenerator = module.exports = function DemiGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DemiGenerator, yeoman.generators.Base);

DemiGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  banner();

  var prompts = [
    {
      name: 'appName',
      message: 'What the project name?'
    },
    {
      name: 'appDescription',
      message: 'What the description?'
    },
    {
      name: 'appVersion',
      message: 'What the project version?',
      default: '0.1.0'
    },
    {
      name: 'authorName',
      message: 'What the author name?',
    },
    {
      name: 'authorEmail',
      message: 'What the author email?',
    },
    {
      name: 'userName',
      message: 'What the github username?',
    },
    {
      type: 'confirm',
      name: 'enableTravis',
      message: 'Would you like to enable travis support?',
      default: true
    }
  ];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;
    this.appDescription = props.appDescription;
    this.appVersion = props.appVersion;
    this.authorName = props.authorName;
    this.authorEmail = props.authorEmail;
    this.userName = props.userName;
    this.enableTravis = props.enableTravis;

    cb();
  }.bind(this));
};

DemiGenerator.prototype.app = function app() {
  var appName = this.appName;

  this.mkdir(appName);
  process.chdir(appName);

  //Api folder
  this.mkdir('api');
  this.mkdir('api/config');
  this.mkdir('api/config/development');
  this.mkdir('api/config/production');
  this.mkdir('api/config/test');
  this.mkdir('api/controllers');
  this.mkdir('api/middlewares');
  this.mkdir('api/models');
  this.mkdir('api/services');

  this.directory('api');

  //Lib folder
  this.mkdir('lib');
  this.mkdir('lib/ssl');

  this.directory('lib');

  //Test folder
  this.mkdir('test');

  this.directory('test');

};

DemiGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('_LICENSE', 'LICENSE');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
  this.copy('app.js', 'app.js');
  this.copy('CHANGELOG', 'CHANGELOG');
  this.copy('cluster.js', 'cluster.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('Gulpfile.js', 'Gulpfile.js');
  this.copy('jshintrc', '.jshintrc');
  this.copy('npmignore', '.npmignore');
  this.copy('Procfile', 'Procfile');
  this.copy('yuidoc.json', 'yuidoc.json');
  //Check if travis option is enabled
  if (this.enableTravis) {
    this.copy('travis.yml', '.travis.yml');
  }
};
