"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.stickyContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var _ProjectKeys = _interopRequireDefault(require("./Sidebar/ProjectKeys"));

var _Timebar = _interopRequireDefault(require("./Timeline/Timebar"));

var _Now = _interopRequireDefault(require("./Timeline/Now"));

var _Pointer = _interopRequireDefault(require("./Timeline/Pointer"));

var _getMouseX = _interopRequireDefault(require("../utils/getMouseX"));

var _Projects = _interopRequireDefault(require("./Timeline/Projects"));

var _getGrid = _interopRequireDefault(require("../utils/getGrid"));

var _useEvent = _interopRequireDefault(require("../hooks/useEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var noop = function noop() {};

var stickyContext = /*#__PURE__*/_react.default.createContext();

exports.stickyContext = stickyContext;

var Layout = function Layout(_ref) {
  var enableSticky = _ref.enableSticky,
      scrollToNow = _ref.scrollToNow,
      timebar = _ref.timebar,
      sidebarWidth = _ref.sidebarWidth,
      projects = _ref.projects;

  var _useContext = (0, _react.useContext)(_index.globalContext),
      now = _useContext.now,
      time = _useContext.time;

  var refTimeline = (0, _react.useRef)(null);
  var refScroll = (0, _react.useRef)(null);
  var refTimebar = (0, _react.useRef)(null);
  var grid = (0, _getGrid.default)(timebar);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSticky = _useState2[0],
      setSticky = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hasShadow = _useState4[0],
      setShadow = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      pointerDate = _useState6[0],
      setPointerDate = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      pointerVisible = _useState8[0],
      setPointerVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      pointerHighlighted = _useState10[0],
      setPointerHighlighted = _useState10[1];

  var headerHeight = 0;

  if (refTimebar.current) {
    headerHeight = refTimebar.current.offsetHeight;
  }

  (0, _react.useEffect)(function () {
    if (isSticky && refScroll.current && refTimeline.current) {
      refScroll.current.scrollLeft = refTimeline.current.scrollLeft;
    }
  }, [isSticky]);
  (0, _react.useEffect)(function () {
    if (scrollToNow && refTimeline.current) {
      refTimeline.current.scrollLeft = time.toX(now) - 0.5 * refTimeline.current.offsetWidth;
    }
  }, [refTimeline.current]);
  var handleScroll = (0, _react.useCallback)(function () {
    if (refTimeline.current) {
      var _refTimeline$current$ = refTimeline.current.getBoundingClientRect(),
          top = _refTimeline$current$.top,
          bottom = _refTimeline$current$.bottom;

      setSticky(top <= 0 && bottom >= headerHeight);

      if (refTimeline.current.scrollLeft === 0) {
        setShadow(false);
      } else {
        setShadow(true);
      }
    }
  });

  if (enableSticky) {
    (0, _useEvent.default)('scroll', handleScroll);
  }

  var handleMouseMove = function handleMouseMove(e) {
    setPointerDate(time.fromX((0, _getMouseX.default)(e)));
  };

  var handleMouseLeave = function handleMouseLeave() {
    setPointerHighlighted(false);
  };

  var handleMouseEnter = function handleMouseEnter() {
    setPointerHighlighted(true);
    setPointerVisible(true);
  };

  var handleScrollBody = function handleScrollBody() {
    if (refTimeline.current && refScroll.current) {
      refScroll.current.scrollLeft = refTimeline.current.scrollLeft;
    }
  };

  var handleScrollHeader = function handleScrollHeader() {
    if (refTimeline.current && refScroll.current) {
      refTimeline.current.scrollLeft = refScroll.current.scrollLeft;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-layout rt-is-open"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-layout__side",
    style: {
      width: sidebarWidth
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-sidebar ".concat(hasShadow ? 'rt-sidebar-shadow' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingTop: isSticky ? headerHeight : ''
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-sidebar__header ".concat(isSticky ? 'rt-is-sticky' : ''),
    style: isSticky ? {
      width: sidebarWidth
    } : {}
  }, timebar.slice(1, 3).map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: id,
      className: "rt-timebar-key ".concat(id)
    }, title);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-sidebar__body"
  }, /*#__PURE__*/_react.default.createElement(_ProjectKeys.default, {
    projects: projects
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-layout__main",
    style: {
      width: "calc(100% - ".concat(sidebarWidth, "px)")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-layout__timeline",
    ref: refTimeline,
    onScroll: isSticky ? handleScrollBody : noop
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timeline",
    style: {
      width: time.timelineWidthStyle
    }
  }, now && /*#__PURE__*/_react.default.createElement(_Now.default, {
    now: now,
    visible: true
  }), pointerDate && /*#__PURE__*/_react.default.createElement(_Pointer.default, {
    date: pointerDate,
    visible: pointerVisible,
    highlighted: pointerHighlighted
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: isSticky ? {
      paddingTop: headerHeight
    } : {},
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timeline__header ".concat(isSticky ? 'rt-is-sticky' : ''),
    style: isSticky ? {
      width: "calc(100% - ".concat(sidebarWidth, "px)"),
      height: headerHeight
    } : {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timeline__header-scroll",
    ref: refScroll,
    onScroll: isSticky ? handleScrollHeader : noop
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: refTimebar,
    style: isSticky ? {
      width: time.timelineWidthStyle
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_Timebar.default, {
    rows: timebar.slice(1, 3)
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-timeline__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rt-grid"
  }, grid.map(function (_ref3) {
    var id = _ref3.id,
        start = _ref3.start,
        end = _ref3.end;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: id,
      className: "rt-grid__cell",
      style: time.toStyleLeftAndWidth(start, end)
    });
  })), /*#__PURE__*/_react.default.createElement(_Projects.default, {
    projects: projects
  }))))));
};

Layout.propTypes = {
  enableSticky: _propTypes.default.bool.isRequired,
  scrollToNow: _propTypes.default.bool
};
var _default = Layout;
exports.default = _default;