
import request from '../utils/request';

/**
 * 登录
 */
export const login = (data) => {
    return request({
        method: 'post',
        url: '/login',
        data,
    })
}

/**
 * 注册
 */
export const register = (data) => {
    return request({
        method: 'post',
        url: '/register',
        data,
    })
}