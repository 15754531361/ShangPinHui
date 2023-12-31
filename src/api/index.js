import request from './request'
import mock from './mock'

export const getCategoryList = () =>
  request({ url: '/product/getBaseCategoryList', method: 'get' })

export const getBannerList = () => mock({ url: '/banner', method: 'get' })
