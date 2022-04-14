const Router = require('koa-router');
const dayjs = require('dayjs');
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
    // 先查询店铺是否存在
    const isExist = await findStoreIsExist(account, phone)
    if (isExist) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            msg: '用户已存在'
        }
        return
    }

    const currTime = dayjs().unix()
    const res = await addStore(account, password, storeName, contact, phone, currTime, currTime)

    // 保存信息
    ctx.status = 200
    // 登录逻辑
    ctx.body = {
        code: 200,
        msg: '注册成功',
        data: {
            id: res.insertId,
            account,
            password,
            storeName,
            contact,
            phone,
        }
    }
})

module.exports = homeRouter