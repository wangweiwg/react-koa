const { query } = require('../utils/db.js');

/**
 * 
 * @returns 查询店铺是否存在
 */
const findStoreIsExist = async (account, phone) => {
    const sqlStr = `select * from store where 'account'='${account}' or 'phone'='${phone}'`
    const res = await query(sqlStr)
    console.log('是否存在---', res)
    if (res && res.length > 0) {
        return true;
    }
    return false;
}

/**
 * 添加店铺
 */
const addStore = async (account, password, storeName, contact, phone) => {
    const sqlStr = `insert into store (account, password, store_name, contact, phone) values ('${account}', '${password}', '${storeName}', '${contact}', '${phone}')`
    return await query(sqlStr)
}

module.exports = {
    findStoreIsExist,
    addStore
};