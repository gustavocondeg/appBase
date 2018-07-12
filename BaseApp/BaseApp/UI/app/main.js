
window.aridoHelper = require('./helpers/aridoEssentials');
require('./helpers/kendo.helper');

require('./config');


var app = require('./app');

//Start kendo router.
app.start();