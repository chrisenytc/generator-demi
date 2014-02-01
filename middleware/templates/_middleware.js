/*
 * demi
 * https://github.com/enytc/demi
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
* Name: <%= name %>
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
