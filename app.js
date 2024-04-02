var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();

// const { MongoClient } = require('mongodb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ||||| ||||| ||||| ||||| ||||| ||||| ||||| ||||| 
// ||||| ||||| ||||| ||||| ||||| ||||| ||||| ||||| 
// setup router
const {routes} = require("./routes/index");
routes(app);
const socketOjb =  require('./services/socketService')
// ||||| ||||| ||||| ||||| ||||| ||||| ||||| ||||| 
// ||||| ||||| ||||| ||||| ||||| ||||| ||||| ||||| 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// Connection URL
// const uri = "mongodb+srv://<username>:<password>@cluster0-saugt.mongodb.net/test?retryWrites=true&w=majority";
// const url = 'mongodb://superadmin:qwerty123psd@localhost:27017';

// superadmin - qwerty123psd

const port = process.env.PORT || process.env.PORT_DEV;
app.listen(port, async function () {
	console.log('listen on port ', port);
	
	// try {
	// 	const client = new MongoClient(url);
	// 	await client.connect();
	// 	console.log('Mongodb OK');
	// 	const db = client.db('db01');
	// 	const collection = db.collection('test');
	// 	let qrTest = await collection.find({}).toArray();
	// 	// console.log(qrTest)
	// } catch (error) {
	// 	console.log('connect Mongodb failure');
	// }

})

module.exports = app; 