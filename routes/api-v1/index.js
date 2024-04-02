var express = require("express");
var router = express.Router();
var cors = require("cors");
const jwt = require("jsonwebtoken");
// ========================
const socketOjb = require('../../services/socketService')


var corsOptions = {
  origin: "http://127.0.0.1",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/* GET home page. */
router.get(
  "/",
  cors({}),
  // (req, res, next) => {
  // 	Middleware
  // 	return next()
  // },
  async (req, res) => {
    res.send({
      status: true,
      message: "oke",
    });
  }
);
router.get(
    "/emit",
    cors({}),
    async (req, res) => {
      res.send({
        status: true,
        message: "oke",
      });
    }
  );

router.post(
  "/id",
  cors(corsOptions),
  // (req, res, next) => {
  // 	Middleware
  // 	return next()
  // },
  async (req, res) => {
    res.send({
      status: true,
    });
  }
);

module.exports = router;
