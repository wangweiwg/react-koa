const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const LogMiddleware = require('./middleware/log.middleware');
const homeRouter = require('./router/home');

const port = 5000;
const app = new Koa();

let router = new Router();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './client/build'
app.use(static(
    path.join( __dirname,  staticPath)
))

// logger
app.use(LogMiddleware());

// 装载所有子路由
router.use(homeRouter.routes(), homeRouter.allowedMethods())

router.all('*', async (ctx) => {
    console.log('任意匹配----')
})

// 启动路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
    console.log(`server listen at 127.0.0.1:${port}`);
})