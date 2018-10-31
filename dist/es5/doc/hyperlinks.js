/**
 * Copyright (c) 2016-2017 Guyon Roche
 * LICENCE: MIT - please refer to LICENCE file included with this module
 * or https://github.com/guyonroche/exceljs/blob/master/LICENSE
 */

'use strict';

var Hyperlinks = module.exports = function (model) {
  this.model = model || {};
};

Hyperlinks.prototype = {
  add: function add(address, hyperlink) {
    this.model[address] = hyperlink;
  },
  find: function find(address) {
    return this.model[address];
  },
  remove: function remove(address) {
    this.model[address] = undefined;
  }
};
//# sourceMappingURL=hyperlinks.js.map
