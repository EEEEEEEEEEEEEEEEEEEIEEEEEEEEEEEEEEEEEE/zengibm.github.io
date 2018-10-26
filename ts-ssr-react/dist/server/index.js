"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var config_1 = require("./config");
var app = new Koa();
var port = config_1.default.port;
app.use(function (ctx, next) {
    ctx.body = 'hello world';
    next();
});
app.listen(port, function () {
    console.log("koa app started at port " + port);
});
