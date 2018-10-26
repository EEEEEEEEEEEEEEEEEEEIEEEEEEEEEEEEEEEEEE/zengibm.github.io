import * as Koa from 'koa';
import serverConfig from './config';
import { createContext } from 'vm';
const app = new Koa()
const { port } = serverConfig;

app.use((ctx:Koa.Context, next) => {
    ctx.body =  'hello world';
    next()
})


app.listen(port, () => {
    console.log(`koa app started at port ${port}`)
})