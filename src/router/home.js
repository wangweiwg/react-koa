const Router = require('koa-router');
const dayjs = require('dayjs');
const homeRouter = new Router();
const { findStore, addStore } = require('../controllers/store');

homeRouter.post('/login', async (ctx, next) => {
    const { account, password } = ctx.data
    // 先查询店铺是否存在
    const storeInfo = await findStore(account)
    if (!storeInfo || storeInfo.length == 0) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            msg: '账号不存在'
        }
        return
    }
    const [store] = storeInfo
    if (store.is_forbidden == 1) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            msg: '账号已禁用'
        }
        return
    }
    if (store.password !== password) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            msg: '密码不正确'
        }
        return
    }
    ctx.status = 200
    // 登录逻辑
    ctx.body = {
        code: 200,
        msg: '成功',
        data: store
    }
})

homeRouter.post('/register', async (ctx, next) => {
    const { account, password, storeName, contact, phone } = ctx.data
    // 先查询店铺是否存在
    const storeInfo = await findStore(account)
    if (storeInfo && storeInfo.length > 0) {
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