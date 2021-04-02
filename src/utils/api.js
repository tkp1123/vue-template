import http from './http'

let resquest = "http://localhost:3000"

// 获取侧边栏接口
export function getNavAPI(params) {
    return http.post(`${resquest}/app/nav`, params)
}
// 登录接口
export function loginAPI(params) {
    return http.post(`${resquest}/app/login`, params)
}
//
export function getChartLine(params) {
    return http.post(`${resquest}/app/chartLine`, params)
}
//注册接口
export function registerAPI(params) {
    return http.post(`${resquest}/app/register`, params)
}
//查询用户列表
export function selectCustomAPI(params) {
    return http.post(`${resquest}/app/custom/select`, params)
}
//新增用户
export function insertCustomAPI(params) {
    return http.post(`${resquest}/app/custom/insert`, params)
}
//删除用户
export function deleteCustomAPI(params) {
    return http.post(`${resquest}/app/custom/delete`, params)
}
//修改用户
export function updateCustomAPI(params) {
    return http.post(`${resquest}/app/custom/update`, params)
}


