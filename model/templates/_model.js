/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * <%= name %> Schema
 */
var <%= name %>Schema = new Schema({
 <%
 _.forEach(args.slice(1, args.length), function(arg) {
  var array = arg.split(':');
 %>
  <%- array[0] %>: {
    type: <%- array[1] %>
  },
 <% }); %>
});

//Exports model
module.exports = mongoose.model('<%= name %>', <%= name %>Schema);
