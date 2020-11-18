// 导入axios
import axios from 'axios'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';
import router from '@/router'

const service = axios.create({
    baseURL: '',
    // 超时时间 单位是ms，这里设置了10s的超时时间
    timeout: 10 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data); //数据转化json
    //配置请求头
    config.headers = {
        'Content-Type': 'application/json; charset=utf-8'
    }
    //这里是请求头或者params里设置token
    //const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
    //if (token) {
    //  config.params = { 'token': token } //如果要求携带在参数中
    //   config.headers.token = token; //如果要求携带在请求头中
    // }
    return config
}, error => {
    Promise.reject(error)
})
// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后处理动作
    if (response.data.code == 403) {
        Message({
            message: response.data.msg,
            type: 'error',
            duration: 1500
        })
    }
    return response.data
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        // 1.公共错误处理
        if (error.response.status == 401) {
            //这里还需要清除token
            router.push({ name: 'login' })
        }
        Message({
            message: error.response.data,
            type: 'error',
            duration: 1500
        })
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请刷新当前页')
        }
    }

    Message.error(error.message)
    return Promise.resolve(error.response)
})

//4.导入文件
export default service