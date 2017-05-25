/**
 * @namespace Chart
 */
var Chart = require('./core/core.js')();

require('./core/core.helpers')(Chart);
require('./platforms/platform.js')(Chart);
require('./core/core.canvasHelpers')(Chart);
require('./core/core.element')(Chart);
require('./core/core.plugin.js')(Chart);
require('./core/core.animation')(Chart);
require('./core/core.controller')(Chart);
require('./core/core.datasetController')(Chart);
require('./core/core.layoutService')(Chart);
require('./core/core.scaleService')(Chart);
require('./core/core.ticks.js')(Chart);
require('./core/core.scale')(Chart);
require('./core/core.interaction')(Chart);
require('./core/core.tooltip')(Chart);

require('./elements/element.rectangle')(Chart);

require('./scales/scale.linearbase.js')(Chart);
require('./scales/scale.category')(Chart);
require('./scales/scale.linear')(Chart);

require('./controllers/controller.bar')(Chart);

require('./charts/Chart.Bar')(Chart);

// Loading built-it plugins
var plugins = [];

plugins.push(
    require('./plugins/plugin.filler.js')(Chart),
    require('./plugins/plugin.legend.js')(Chart),
    require('./plugins/plugin.title.js')(Chart)
);

Chart.plugins.register(plugins);

module.exports = Chart;
if (typeof window !== 'undefined') {
	window.Chart = Chart;
}
