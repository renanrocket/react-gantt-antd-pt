"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Project = _interopRequireDefault(require("./Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(_ref) {
  var projects = _ref.projects;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-projects"
  }, projects.map(function (_ref2) {
    var id = _ref2.id,
        tasks = _ref2.tasks,
        isOpen = _ref2.isOpen,
        children = _ref2.projects;
    return /*#__PURE__*/_react.default.createElement(_Project.default, {
      key: id,
      tasks: tasks,
      isOpen: isOpen,
      projects: children
    });
  }));
};

Projects.propTypes = {
  projects: _propTypes.default.arrayOf(_propTypes.default.shape({}))
};
var _default = Projects;
exports.default = _default;