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
  * GET /<%= name %>
  */

 <%
 _.forEach(args.slice(1, args.length), function(arg) {
  var array = arg.split(':');
 %>
 /*
  * <%- array[1] %> /<%= name %>/<%= array[0] %>
  */

  <%- array[0] %>: {
  method: '<%- array[1] %>',
  fn: function (req, res) {
   //
  }
 },
 <% }); %>

};
