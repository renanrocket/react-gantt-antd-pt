"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ProjectKeys = _interopRequireDefault(require("./ProjectKeys"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProjectKey = function ProjectKey(_ref) {
  var project = _ref.project;

  var _useContext = (0, _react.useContext)(_index.globalContext),
      toggleProjectOpen = _useContext.toggleProjectOpen;

  var title = project.title,
      projects = project.projects,
      isOpen = project.isOpen,
      sideComponent = project.sideComponent;
  var isExpandable = isOpen !== undefined;

  var buildSideComponent = function buildSideComponent() {
    if (sideComponent) {
      return _react.default.cloneTask(sideComponent);
    }

    return null;
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "rt-project-key"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-project-key__entry"
  }, isExpandable && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '12px'
    },
    onClick: function onClick() {
      return toggleProjectOpen(project);
    }
  }, !isOpen ? /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "64 64 896 896",
    focusable: "false",
    className: "rt-icon",
    "data-icon": "right",
    width: "12px",
    height: "12px",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "64 64 896 896",
    focusable: "false",
    className: "rt-icon",
    "data-icon": "right",
    width: "12px",
    height: "12px",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      transform: 'rotate(90deg)'
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "rt-project-key__title"
  }, title), buildSideComponent()), isOpen && projects && projects.length > 0 && /*#__PURE__*/_react.default.createElement(_ProjectKeys.default, {
    projects: projects
  }));
};

ProjectKey.propTypes = {
  project: _propTypes.default.shape({
    title: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]).isRequired,
    projects: _propTypes.default.arrayOf(_propTypes.default.shape({})),
    isOpen: _propTypes.default.bool
  })
};
var _default = ProjectKey;
exports.default = _default;