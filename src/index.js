var _global = (
  (typeof window !== "undefined" && window) ||
  (typeof global !== "undefined" && global)
);

_global.Handsontable = _global.Handsontable || require('handsontable');

require('./ie-shim');
require('./ngHandsontable');

require('./services/autoCompleteFactory');
require('./services/hotRegisterer');
require('./services/settingFactory');

require('./directives/hotAutocomplete');
require('./directives/hotColumn');
require('./directives/hotTable');