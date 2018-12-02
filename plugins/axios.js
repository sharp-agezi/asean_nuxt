import axios from 'axios';
import {
  Message,
  MessageBox
} from 'iview'

const ajaxUrl = 'http://a2.aseantop.com/app';
const service = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

service.title = function (title) {
  title = title ? title : '东盟头条—聚焦东盟 关注中国 放眼世界';
  window.document.title = title;
};

service.interceptors.response.use(

  response => {

    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response;
    //todo 修改.现在未有token

    if (response.status !== 200) {
      Message.error({
        content: res.data,
        duration: 5 * 1000
      });

      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    Message.error({
      content: error.message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)


export default service;
