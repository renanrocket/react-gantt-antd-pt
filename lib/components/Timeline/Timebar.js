"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cell = function Cell(_ref) {
  var title = _ref.title,
      start = _ref.start,
      end = _ref.end,
      style = _ref.style;

  var _useContext = (0, _react.useContext)(_index.globalContext),
      time = _useContext.time;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timebar__cell ".concat(title),
    style: _objectSpread(_objectSpread({
      height: '100%'
    }, time.toStyleLeftAndWidth(start, end)), style)
  }, title);
};

var Row = function Row(_ref2) {
  var id = _ref2.id,
      title = _ref2.title,
      cells = _ref2.cells,
      style = _ref2.style;

  var _useContext2 = (0, _react.useContext)(_index.globalContext),
      time = _useContext2.time;

  var props = {};

  if (time.timelineWidth / cells.length < 30) {
    props = {
      title: ''
    };
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timebar__row ".concat(id, " ").concat(title),
    style: style
  }, cells.map(function (cell) {
    return /*#__PURE__*/_react.default.createElement(Cell, _extends({
      key: cell.id
    }, cell, props));
  }));
};

var Timebar = function Timebar(_ref3) {
  var rows = _ref3.rows;

  var _useContext3 = (0, _react.useContext)(_index.globalContext),
      time = _useContext3.time;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timebar"
  }, rows.map(function (_ref4) {
    var id = _ref4.id,
        title = _ref4.title,
        cells = _ref4.cells,
        style = _ref4.style;
    return /*#__PURE__*/_react.default.createElement(Row, {
      key: id,
      title: title,
      cells: cells,
      style: style
    });
  }));
};

Timebar.propTypes = {
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired
};
var _default = Timebar;
exports.default = _default;