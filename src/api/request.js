//对axios二次封装
import  axios from 'axios'
//引入进度条和样式文件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import detail from "@/store/detail"
import user from "@/store/user"

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    if (detail.state.uuid_token) {
        config.headers.userTempId = detail.state.uuid_token
    }
    if (user.state.token) {
        config.headers.token = user.state.token
    }
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