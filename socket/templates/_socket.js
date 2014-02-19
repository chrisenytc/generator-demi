/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

module.exports = {

<%
	_.forEach(args.slice(1, args.length), function(arg) { %>
	/*
	 * SOCKET <%= name %>/<%= arg %>
	 */

	<%= arg %>: {
		on: function (data) {
			console.log(data);
			this.emit('<%= name %>/<%= arg %>', 'testing sockets');
		},
		emit: 'test this'
	},
		<%
	}); %>

};