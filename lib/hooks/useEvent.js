"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEvent;

var _react = require("react");

function useEvent(eventName, handler) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  // Create a ref that stores handler
  var savedHandler = (0, _react.useRef)(); // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  (0, _react.useEffect)(function () {
    savedHandler.current = handler;
  }, [handler]);
  (0, _react.useEffect)(function () {
    // Make sure element supports addEventListener
    // On 
    var isSupported = element && element.addEventListener;
    if (!isSupported) return; // Create event listener that calls handler function stored in ref

    var eventListener = function eventListener(event) {
      return savedHandler.current(event);
    }; // Add event listener


    element.addEventListener(eventName, eventListener); // Remove event listener on cleanup

    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element] // Re-run if eventName or element changes
  );
}

;