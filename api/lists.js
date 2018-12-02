import request from './../libs/util'

export function getColumnInfoList(data) {//列表数据
    return request({
        url: '/web/v1/getColumnInfoList',
        method: 'post',
        data
    })
}
export function getColumnAd(data) {//获取广告
    return request({
        url: '/web/v1/getColumnAd',
        method: 'post',
        data
    })
}

export function search(data) {//站内搜索
    return request({
        url: '/web/v1/search',
        method: 'post',
        data
    })
}

export function listKeywordInfo(data) {//根据关键字获取资讯列表
    return request({
        url: '/web//v1/listKeywordInfo',
        method: 'post',
        data
    })
}