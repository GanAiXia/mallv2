//对axios二次封装
import  axios from 'axios'
//引入进度条和样式文件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: "/mock",
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nprogress.start()
    return config;
})

requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data;
}, (error)=>{
    return Promise.reject(new Error('faile'))
})


export default requests