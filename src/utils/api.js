import http from './http'

let resquest = "http://localhost:3000"

// 获取侧边栏接口
export function getNavAPI(params) {
    return http.get(`${resquest}/app/navTemplate`, params)
}
// 登录接口
export function loginAPI(params) {
    return http.post(`${resquest}/app/login`, params)
}
//注册接口
export function registerAPI(params) {
    return http.post(`${resquest}/app/register`, params)
}

