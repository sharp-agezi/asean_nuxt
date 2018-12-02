import request from './../libs/util'

export function getInfoDetail(data) {//根据文章ID获取文章内容详情
    return request({
        url: '/web/v1/getInfoDetail',
        method: 'post',
        data
    })
}