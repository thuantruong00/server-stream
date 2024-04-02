const streamRoute = require('./api-v1/index');


function routes(app) {

	app.use('/api', streamRoute);
}

module.exports.routes = routes;