"use strict";
exports.__esModule = true;
var Koa = require("koa");
var KoaCompress = require("koa-compress");
var KoaStatic = require("koa-static");
var zlib = require("zlib");
var historyApiFallback = require("koa2-connect-history-api-fallback");
var app = new Koa();
app
    .use(KoaStatic('../dist'))
    .use(historyApiFallback({ whiteList: ['/api'] }))
    .use(KoaCompress({
    filter: function (contentType) {
        return /text/i.test(contentType);
    },
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
}));
app.listen(3000);
