"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.globalContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Layout = _interopRequireDefault(require("./components/Layout"));

var _time = _interopRequireDefault(require("./utils/time"));

var _useEvent = _interopRequireDefault(require("./hooks/useEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() { }; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var globalContext = /*#__PURE__*/_react.default.createContext();

exports.globalContext = globalContext;

function Gantt(_ref) {
  var start = _ref.start,
    end = _ref.end,
    _ref$zoom = _ref.zoom,
    zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
    _ref$projects = _ref.projects,
    projects = _ref$projects === void 0 ? [] : _ref$projects,
    _ref$now = _ref.now,
    now = _ref$now === void 0 ? new Date() : _ref$now,
    _ref$sidebarWidth = _ref.sidebarWidth,
    sidebarWidth = _ref$sidebarWidth === void 0 ? 120 : _ref$sidebarWidth,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 800 : _ref$minWidth,
    _ref$scrollToNow = _ref.scrollToNow,
    scrollToNow = _ref$scrollToNow === void 0 ? true : _ref$scrollToNow,
    _ref$enableSticky = _ref.enableSticky,
    enableSticky = _ref$enableSticky === void 0 ? true : _ref$enableSticky,
    clickTask = _ref.clickTask;

  var _useState = (0, _react.useState)((0, _time.default)(start, end, zoom, 0, minWidth)),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];

  var _useState3 = (0, _react.useState)(projects),
    _useState4 = _slicedToArray(_useState3, 2),
    _projects = _useState4[0],
    setProjects = _useState4[1];

  var toggleProjectOpen = function toggleProjectOpen(project) {
    setProjects(function (prevState) {
      var _iterator = _createForOfIteratorHelper(prevState),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _project = _step.value;

          if (_project.id === project.id) {
            _project.isOpen = !project.isOpen;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _toConsumableArray(prevState);
    });
  };

  var gantt = (0, _react.useRef)(null);

  var getTextMonth = function getTextMonth(month) {
    var textMonth = "";

    switch (month) {
      case 1:
        textMonth = "JAN";
        break;

      case 2:
        textMonth = "FEB";
        break;

      case 3:
        textMonth = "MAR";
        break;

      case 4:
        textMonth = "APR";
        break;

      case 5:
        textMonth = "MAY";
        break;

      case 6:
        textMonth = "JUN";
        break;

      case 7:
        textMonth = "JUL";
        break;

      case 8:
        textMonth = "AGO";
        break;

      case 9:
        textMonth = "SEP";
        break;

      case 10:
        textMonth = "OCT";
        break;

      case 11:
        textMonth = "NOV";
        break;

      case 12:
        textMonth = "DEC";
        break;
    }

    return textMonth;
  };

  var buildMonthCells = function buildMonthCells() {
    var v = [];

    function getMonthAdd(y, m) {
      while (m >= 12) {
        m -= 12;
        y += 1;
      }

      return new Date("".concat(y, "-").concat(m + 1, "-1 0:0:0"));
    }

    var month_count = end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear()) + 1;

    for (var i = 0; i < month_count; i += 1) {
      var start_date = getMonthAdd(start.getFullYear(), start.getMonth() + i);
      var end_date = getMonthAdd(start.getFullYear(), start.getMonth() + i + 1);
      v.push({
        id: "m".concat(i),
        title: "".concat(getTextMonth((start.getMonth() + i) % 12 + 1)),
        start: start_date,
        end: end_date
      });
    }

    return v;
  };

  var buildDayCells = function buildDayCells() {
    var v = [];
    var start_floor = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
    var day_count = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    for (var i = 0; i < day_count; i += 1) {
      var start_date = new Date(start_floor.getTime() + i * 1000 * 60 * 60 * 24);
      var end_date = new Date(start_floor.getTime() + (i + 1) * 1000 * 60 * 60 * 24);
      v.push({
        id: "d".concat(i),
        title: "".concat(start_date.getDate()),
        start: start_date,
        end: end_date,
        style: {
          backgroundColor: start_date.getDay() === 0 ? '#1890ff' : '',
          color: start_date.getDay() === 0 ? '#fff' : ''
        }
      });
    }

    return v;
  };

  var buildWeekCells = function buildWeekCells() {
    var v = [];
    var start_floor = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
    var week_count = Math.floor((end - start) / (1000 * 60 * 60 * 24 * 7)) + 2;

    for (var i = 0; i < week_count; i += 1) {
      var start_date = new Date(start_floor.getTime() + (i * 7 - start_floor.getDay()) * 1000 * 60 * 60 * 24);
      var end_date = new Date(start_floor.getTime() + ((i + 1) * 7 - start_floor.getDay()) * 1000 * 60 * 60 * 24);
      v.push({
        id: "w".concat(i),
        title: "",
        start: start_date,
        end: end_date
      });
    }

    return v;
  };

  var timebar = [{
    id: 'weeks',
    title: '',
    cells: buildWeekCells(),
    useAsGrid: true
  }, {
    id: 'months',
    title: 'MONTHS',
    cells: buildMonthCells()
  }, {
    id: 'days',
    title: 'DAYS',
    cells: buildDayCells()
  }];
  (0, _react.useEffect)(function () {
    if (gantt.current) {
      setTime((0, _time.default)({
        start: start,
        end: end,
        zoom: zoom,
        viewportWidth: gantt.current.offsetWidth - sidebarWidth,
        minWidth: minWidth - sidebarWidth
      }));
    }
  }, [zoom, start, end]);
  var handleResize = (0, _react.useCallback)(function () {
    if (gantt.current) {
      setTime((0, _time.default)({
        start: start,
        end: end,
        zoom: zoom,
        viewportWidth: gantt.current.offsetWidth - sidebarWidth,
        minWidth: minWidth - sidebarWidth
      }));
    }
  });
  (0, _useEvent.default)('resize', handleResize);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rt",
    ref: gantt
  }, /*#__PURE__*/_react.default.createElement(globalContext.Provider, {
    value: {
      now: now,
      time: time,
      clickTask: clickTask,
      toggleProjectOpen: toggleProjectOpen
    }
  }, /*#__PURE__*/_react.default.createElement(_Layout.default, {
    enableSticky: enableSticky,
    scrollToNow: scrollToNow,
    timebar: timebar,
    sidebarWidth: sidebarWidth,
    projects: _projects
  })));
}

Gantt.propTypes = {
  start: _propTypes.default.instanceOf(Date).isRequired,
  end: _propTypes.default.instanceOf(Date).isRequired,
  now: _propTypes.default.instanceOf(Date),
  zoom: _propTypes.default.number.isRequired,
  projects: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  minWidth: _propTypes.default.number,
  sideWidth: _propTypes.default.number,
  clickTask: _propTypes.default.func,
  enableSticky: _propTypes.default.bool,
  scrollToNow: _propTypes.default.bool
};
var _default = Gantt;
exports.default = _default;
