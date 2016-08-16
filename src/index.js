var _global = (
  (typeof window !== "undefined" && window) ||
  (typeof global !== "undefined" && global)
);

var _require = (typeof require !== "function")
  ? function() {};
  : require;

_global.Handsontable = _global.Handsontable || _require('handsontable');
_global.angular = _global.angular || _require('angular');

_require('./ie-shim');
_require('./ngHandsontable');

_require('./services/autoCompleteFactory');
_require('./services/hotRegisterer');
_require('./services/settingFactory');

_require('./directives/hotAutocomplete');
_require('./directives/hotColumn');
_require('./directives/hotTable');