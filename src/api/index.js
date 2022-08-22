//API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'

//三级联动
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})

//获取banner-home
export const reqGetBannerList = ()=> mockRequests.get('/banner')

//获取floor
export const reqFloorList = ()=> mockRequests.get('/floor')

//获取搜索数据
export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params})

//获取产品详情 URL： /api/item/{ skuId }  方式 get
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: 'get'})
