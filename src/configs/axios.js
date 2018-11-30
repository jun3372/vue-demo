// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import {
    Loading,
    Message
} from 'element-ui'

// 超时时间
axios.defaults.timeout = 10000

// 接口地址
axios.defaults.baseURL = baseURL;

// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
    // config.data = this.qs.stringify(data);

    // console.log('http请求拦截器: data:', data);
    // console.log('http请求拦截器: config:', config);

    // element ui Loading方法
    loadinginstace = Loading.service({
        fullscreen: true
    })

    return config
}, error => {
    loadinginstace.close()

    Message.error({
        message: '加载超时'
    })

    return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    loadinginstace.close()

    if (data.data.code == 0) {
        Message.error({
            message: data.data.msg
        })
    }

    return data
}, error => {
    // 响应成功关闭loading
    loadinginstace.close()

    Message.error({
        message: '加载失败'
    })

    return Promise.reject(error)
})

export default axios
