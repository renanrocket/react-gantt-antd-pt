"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ProjectKey = _interopRequireDefault(require("./ProjectKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectKeys = function ProjectKeys(_ref) {
  var projects = _ref.projects;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "rt-project-keys"
  }, projects.map(function (project) {
    return /*#__PURE__*/_react.default.createElement(_ProjectKey.default, {
      key: project.id,
      project: project
    });
  }));
};

ProjectKeys.propTypes = {
  projects: _propTypes.default.arrayOf(_propTypes.default.shape({}))
};
var _default = ProjectKeys;
exports.default = _default;