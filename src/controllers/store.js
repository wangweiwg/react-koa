const { query } = require('../utils/db.js');

/**
 * 
 * @returns 查询店铺信息
 */
const findStore = async (account) => {
    const sqlStr = `select * from store where account='${account}'`
    const res = await query(sqlStr)
    if (res && res.length > 0) {
        return res;
    }
    return null;
}

/**
 * 添加店铺
 */
const addStore = async (account, password, storeName, contact, phone, createTime, updateTime) => {
    const sqlStr = `insert into store (account, password, store_name, contact, phone, create_time, update_time) values ('${account}', '${password}', '${storeName}', '${contact}', '${phone}', '${createTime}', '${updateTime}')`
    return await query(sqlStr)
}

module.exports = {
    findStore,
    addStore
};