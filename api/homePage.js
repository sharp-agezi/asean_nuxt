import request from '~/plugins/axios'
export function mainAd(data) {//网站首页广告
    return request({
        url: '/web/v1/mainAd',
        method: 'post',
        data
    })
}
export function getMainData(data) {//网站首页数据
    return request({
        url: '/web/v1/main',
        method: 'post',
        data
    })
}

export function listColumnInfo(data) {//网站首页右侧栏目数据
    return request({
        url: '/web/v1/listColumnInfo',
        method: 'post',
        data
    })
}

export function listFocusInfo(data) {//网站首页左侧数据
    return request({
        url: '/web/v1/listFocusInfo',
        method: 'post',
        data
    })
}

export function listWordbar(data) {//获取词条列表
    return request({
        url: '/web/v1/listWordbar',
        method: 'post',
        data
    })
}

