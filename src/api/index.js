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

//加入购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'})

//获取购物车内容
export const reqCartList = ()=> requests({url: '/cart/cartList', method: 'get'})

//购物车删除
export const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})

//修改商品的选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`, method: "get"})

//获取验证码
export const reqGetCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method: 'get'})

//注册请求
export const reqUserRegister = (data) => requests({url: `/user/passport/register`, data, method: 'post'})

//登录请求
export const reqUserLogin = (data) => requests({url: `/user/passport/login`, data, method: 'post'})

//获取用户信息
export const reqUserInfo = () => requests({url: '/user/passport/auth/getUserInfo', method: 'get'})

//退出登录
export const reqLogout = () => requests({url: '/user/passport/logout', method: 'get'})

//获取用户地址信息
export const reqAddressInfo = () => requests({url: '/user/userAddress/auth/findUserAddressList', method: 'get'})

//获取商品清单
export const reqOrderInfo = () => requests({url: '/order/auth/trade', method: 'get'})