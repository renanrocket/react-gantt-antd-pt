"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayMonth = exports.getMonth = void 0;
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var getMonth = function getMonth(date) {
  return monthNames[date.getMonth()];
};

exports.getMonth = getMonth;

var getDayMonth = function getDayMonth(date) {
  //return "".concat(date.getMonth() + 1, "\u6708").concat(date.getDate(), "\u65E5");
  //return "".concat(concat(date.getDate(), "/"),date.getMonth() + 1);
  return "".concat(date.getDate(), " / ").concat(date.getMonth() + 1, "");
};

exports.getDayMonth = getDayMonth;