"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

var create = function create(_ref) {
  var start = _ref.start,
      end = _ref.end,
      zoom = _ref.zoom,
      viewportWidth = _ref.viewportWidth,
      minWidth = _ref.minWidth;
  var duration = end - start;
  var days = duration / MILLIS_IN_A_DAY;
  var daysZoomWidth = days * zoom;
  var timelineWidth; // if (daysZoomWidth > viewportWidth) {
  //   timelineWidth = daysZoomWidth
  // } else {
  //   timelineWidth = viewportWidth
  // }
  // if (timelineWidth < minWidth) {
  //   timelineWidth = minWidth
  // }

  timelineWidth = Math.max(minWidth, viewportWidth * zoom); // console.log('daysZoomWidth  ' + daysZoomWidth)
  // console.log('viewportWidth  ' + viewportWidth)
  // console.log('timelineWidth  ' + timelineWidth)

  var timelineWidthStyle = "".concat(timelineWidth, "px");

  var toX = function toX(from) {
    var value = (from - start) / duration;
    return Math.round(value * timelineWidth);
  };

  var toStyleLeft = function toStyleLeft(from) {
    return {
      left: "".concat(toX(from), "px")
    };
  };

  var toStyleLeftAndWidth = function toStyleLeftAndWidth(from, to) {
    var left = toX(from);
    return {
      left: "".concat(left, "px"),
      width: "".concat(toX(to) - left, "px")
    };
  };

  var fromX = function fromX(x) {
    return new Date(start.getTime() + x / timelineWidth * duration);
  };

  return {
    timelineWidth: timelineWidth,
    timelineWidthStyle: timelineWidthStyle,
    start: start,
    end: end,
    zoom: zoom,
    toX: toX,
    toStyleLeft: toStyleLeft,
    toStyleLeftAndWidth: toStyleLeftAndWidth,
    fromX: fromX
  };
};

var _default = create;
exports.default = _default;