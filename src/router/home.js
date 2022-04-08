const Router = require('koa-router');
const homeRouter = new Router();

homeRouter.post('/api/login', async (ctx, next) => {
    ctx.status = 500
    // 登录逻辑
    ctx.body = {
        msg: '用户信息不存在'
    }
})

module.exports = homeRouter