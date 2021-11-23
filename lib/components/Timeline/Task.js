"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TaskBasic = _interopRequireDefault(require("./TaskBasic"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Task = function Task(_ref) {
  var index = _ref.index,
      style = _ref.style,
      styleBase = _ref.styleBase,
      title = _ref.title,
      start = _ref.start,
      end = _ref.end,
      classes = _ref.classes,
      dataSet = _ref.dataSet,
      tooltip = _ref.tooltip;

  var _useContext = (0, _react.useContext)(_index.globalContext),
      now = _useContext.now,
      time = _useContext.time,
      clickTask = _useContext.clickTask;

  var handleClick = function handleClick() {
    clickTask({
      index: index,
      style: style,
      styleBase: styleBase,
      title: title,
      start: start,
      end: end,
      classes: classes,
      dataSet: dataSet,
      tooltip: tooltip
    });
  };

  var taskStyle = _objectSpread(_objectSpread({}, time.toStyleLeftAndWidth(start, end)), clickTask ? {
    cursor: 'pointer'
  } : {});

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-project__task",
    style: _objectSpread(_objectSpread({}, taskStyle), {}, {
      color: '#fff'
    }),
    onClick: clickTask && handleClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      width: '100%',
      height: '40px',
      backgroundColor: '#bbb',
      filter: index % 2 == 0 ? 'brightness(1.15)' : ''
    }, styleBase)
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      width: Math.max(0, Math.min(time.toX(end) - time.toX(start), time.toX(now) - time.toX(start))) || 0,
      height: '40px',
      backgroundColor: '#1890ff',
      filter: index % 2 == 0 ? 'brightness(1.15)' : ''
    }, style)
  }), /*#__PURE__*/_react.default.createElement(_TaskBasic.default, {
    title: title,
    start: start,
    end: end,
    classes: classes,
    dataSet: dataSet,
    tooltip: tooltip
  }));
};

Task.propTypes = {
  styleBase: _propTypes.default.shape({}),
  style: _propTypes.default.shape({}),
  classes: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  dataSet: _propTypes.default.shape({}),
  title: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]).isRequired,
  start: _propTypes.default.instanceOf(Date).isRequired,
  end: _propTypes.default.instanceOf(Date).isRequired,
  tooltip: _propTypes.default.string,
  clickTask: _propTypes.default.func
};
Task.defaultTypes = {
  clickTask: undefined
};
var _default = Task;
exports.default = _default;