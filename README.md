# Demi Generator [![Build Status](https://secure.travis-ci.org/chrisenytc/generator-demi.png?branch=master)](https://travis-ci.org/chrisenytc/generator-demi) [![NPM version](https://badge-me.herokuapp.com/api/npm/generator-demi.png)](http://badges.enytc.com/for/npm/generator-demi) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/generator-demi/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

> A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

[![Demi.js](https://raw2.github.com/enytc/demi/master/logo.png)](http://demijs.enytc.com)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-demi from npm, run:

```
$ npm install -g generator-demi
```

Finally, initiate the generator:

```
$ yo demi
```

## Generators

Available generators:

* [demi:controller](#controller)
* [demi:restful](#restful)
* [demi:middleware](#middleware)
* [demi:model](#model)
* [demi:service](#service)
* [demi:make](#test)

**Note: Generators are to be run from the root directory of your app.**

### Controller
Generates a controller in `api/controllers`.

Example:
```bash
yo demi:controller tasks index:GET show:GET update:PUT destroy:DELETE
```

Produces `api/controllers/tasks.js`:
```javascript
/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /*
  * GET /tasks
  */


 /*
  * GET /tasks/index
  */

  index: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * GET /tasks/show
  */

  show: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * PUT /tasks/update
  */

  update: {
  method: 'PUT',
  fn: function (req, res) {
   //
  }
 },

 /*
  * DELETE /tasks/destroy
  */

  destroy: {
  method: 'DELETE',
  fn: function (req, res) {
   //
  }
 },


};
```

### Restful
Generates a restful controller in `api/controllers`.

Example:
```bash
yo demi:restful users
```

Produces `api/controllers/users.js`:
```javascript
/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /*
   * GET /users
   */
  index: function (req, res) {
    //
  },

  /*
   * GET /users/new
   */
  new: function (req, res) {
    //
  },

  /*
   * POST /users
   */
  create: function (req, res) {
    //
  },

  /*
   * GET /users/:task
   */
  show: function (req, res) {
    //
  },

  /*
   * GET /users/:task/edit
   */
  edit: function (req, res) {
    //
  },

  /*
   * PUT /users/:task
   */
  update: function (req, res) {
    //
  },

  /*
   * DELETE /users/:task
   */
  destroy: function (req, res) {
    //
  }
};
```

### Middleware
Generates a middleware in `api/middlewares`.

Example:
```bash
yo demi:middleware demi_example
```

Produces `api/middlewares/demi_example.js`:
```javascript
/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
* Name: demi_example
*/

module.exports = {

  /*
   * Set true if you want enable this middleware
   */
  enabled: true,
  fn: function () {
    return function (req, res, next) {
      //
      next();
    };
  }
};

```

### Model
Generates a model in `api/models`.

Example:
```bash
yo demi:model Task name:String slug:String closed:Boolean created:Date
```

Produces `api/models/tasks.js`:
```javascript
/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Task Schema
 */
var TaskSchema = new Schema({

  name: {
    type: String
  },

  slug: {
    type: String
  },

  closed: {
    type: Boolean
  },

  created: {
    type: Date
  },

});

//Exports model
module.exports = mongoose.model('Task', TaskSchema);
```

### Service
Generates a service in `api/services`.

Example:
```bash
yo demi:service names "name:Chris" "name:Bella"
```

Produces `api/services/names.json`:
```json
{
 "name": "Chris",
 "name": "Bella",
}
```

### Test
Generates a test in `test/`.

Example:
```bash
yo demi:make tasks "GET /tasks" "should be return a welcome"
```

Produces `test/tasks_test.js`:
```javascript
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

describe('#tasks', function () {
  describe('GET /tasks', function () {
    it('should be return a welcome', function (done) {
      request
        .get('/tasks')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {}, done);
    });
  });
});
```

## Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/enytc/demi/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/enytc/demi/issues).

## License
Copyright (c) 2014 Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

