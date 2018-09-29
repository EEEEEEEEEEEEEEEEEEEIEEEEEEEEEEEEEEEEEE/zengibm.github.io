'use strict'

const Koa = require('koa')

const app = new Koa();


app.use(async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello world</h1>'
}
)


app.listen(9090, () => {
    console.log("app started at port 9090");
}
)