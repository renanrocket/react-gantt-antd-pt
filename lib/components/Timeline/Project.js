"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Projects = _interopRequireDefault(require("./Projects"));

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Project = function Project(_ref) {
  var tasks = _ref.tasks,
      isOpen = _ref.isOpen,
      projects = _ref.projects;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tr-project"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-project__tasks"
  }, tasks.filter(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end;
    return end > start;
  }).map(function (task, i) {
    return /*#__PURE__*/_react.default.createElement(_Task.default, _extends({
      key: task.id,
      index: i
    }, task));
  })), isOpen && projects && projects.length > 0 && /*#__PURE__*/_react.default.createElement(_Projects.default, {
    projects: projects
  }));
};

Project.propTypes = {
  isOpen: _propTypes.default.bool,
  tasks: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  projects: _propTypes.default.arrayOf(_propTypes.default.shape({}))
};
var _default = Project;
exports.default = _default;