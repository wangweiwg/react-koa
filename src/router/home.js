const Router = require('koa-router');
const homeRouter = new Router();
const { findStoreIsExist, addStore } = require('../controllers/store');

homeRouter.post('/login', async (ctx, next) => {
    ctx.status = 500
    // 登录逻辑
    ctx.body = {
        msg: '用户信息不存在'
    }
})

homeRouter.post('/register', async (ctx, next) => {
    const { account, password, storeName, contact, phone } = ctx.data
    console.log('参数---', account, phone)
    // 先查询店铺是否存在
    const isExist = await findStoreIsExist(account, phone)
    console.log('isExist---', isExist)
    if (isExist) {
        ctx.status = 500
        ctx.body = {
            msg: '用户已存在'
        }
        next()
    }

    const res = await addStore(account, password, storeName, contact, phone)
    console.log('res---', res)

    // 保存信息
    ctx.status = 500
    // 登录逻辑
    ctx.body = {
        msg: '用户信息不存在'
    }
})

module.exports = homeRouter