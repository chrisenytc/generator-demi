/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;


describe('demi generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('demi:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            'api',
            'api/config',
            'api/config/development',
            'api/config/development/api.json',
            'api/config/development/app.json',
            'api/config/development/auth.json',
            'api/config/development/cors.json',
            'api/config/development/database.json',
            'api/config/development/errors.json',
            'api/config/development/middlewares.json',
            'api/config/development/ssl.json',
            'api/config/production',
            'api/config/production/api.json',
            'api/config/production/app.json',
            'api/config/production/auth.json',
            'api/config/production/cors.json',
            'api/config/production/database.json',
            'api/config/production/errors.json',
            'api/config/production/middlewares.json',
            'api/config/production/ssl.json',
            'api/config/test',
            'api/config/test/api.json',
            'api/config/test/app.json',
            'api/config/test/auth.json',
            'api/config/test/cors.json',
            'api/config/test/database.json',
            'api/config/test/errors.json',
            'api/config/test/middlewares.json',
            'api/config/test/ssl.json',
            'api/controllers',
            'api/controllers/auth.js',
            'api/controllers/index.js',
            'api/controllers/routes.js',
            'api/controllers/tasks.js',
            'api/middlewares',
            'api/middlewares/middleware.js',
            'api/models',
            'api/models/task.js',
            'api/models/user.js',
            'api/services',
            'api/services/names.json',
            'api/sockets',
            'api/sockets/test.js',
            'lib',
            'lib/ssl',
            'lib/ssl/.gitkeep',
            'lib/debugger.js',
            'lib/demi.js',
            'lib/demiHttp.js',
            'lib/demiHttps.js',
            'lib/loader.js',
            'lib/passport.js',
            'test',
            'test/demi_test.js',
            'test/requests_test.js',
            'test/tasks_test.js',
            'test/services_test.js',
            'CONTRIBUTING.md',
            'LICENSE',
            'package.json',
            'README.md',
            'app.js',
            'CHANGELOG',
            'cluster.js',
            '.editorconfig',
            '.gitignore',
            'Gulpfile.js',
            '.jshintrc',
            '.npmignore',
            'Procfile',
            '.travis.yml',
            'yuidoc.json'
        ];

        helpers.mockPrompt(this.app, {
            'appName': 'bella',
            'appDescription': 'The best project ever',
            'appVersion': '0.1.0',
            'authorName': 'Christopher EnyTC',
            'authorEmail': 'chrisenytc@gmail.com',
            'userName': 'chrisenytc',
            'enableTravis': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
