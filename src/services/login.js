import request from '../utils/request'

export function login(data) {
    return request({
        url: '/authorize',
        method: 'post',
        params: data
    })
}