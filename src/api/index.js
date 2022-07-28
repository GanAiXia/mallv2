//API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})

//获取banner-home
export const reqGetBannerList = ()=> mockRequests.get('/banner')