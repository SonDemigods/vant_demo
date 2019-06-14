import {
  Notify
} from 'vant'
import axios from '@/lib/api.request'
import {
  TOKEN_KEY,
  getToken
} from '@/lib/util'
import qs from 'qs'
import Cookies from 'js-cookie'

/**
 * @functionName api
 * @param {String} url 请求地址
 * @param {Object} data 发送数据
 * @param {Object} config 额外参数{contentType:请求头(url|json),showMsg:是否显示提示信息(true|false)}
 * @description ajax封装
 * @author 张航
 * @date 2019-02-01 08:33:13
 * @version V1.0.0
 */
export default (url, data, config) => {
  // 发送的数据类型
  const ContentType = {
    url: 'application/x-www-form-urlencoded;charset=utf-8',
    json: 'application/json;charset=utf-8'
  }

  // 初始化额外参数
  config = config || {}
  let _config = {
    method: config.method ? config.method : 'post',
    responseType: config.responseType ? config.responseType : 'json',
    contentType: config.contentType ? config.contentType : 'url',
    showMsg: config.showMsg ? config.showMsg : false
  }

  // 处理发送的数据
  let _data
  let _contentType
  if (_config['contentType'] === 'url') {
    _data = qs.stringify(data, {
      arrayFormat: 'repeat'
    })
    _contentType = ContentType.url
  } else if (_config['contentType'] === 'json') {
    _data = JSON.stringify(data)
    _contentType = ContentType.json
  }

  // 返回ajax方法
  return axios.request({
    url,
    data: _data,
    headers: {
      'Content-Type': _contentType,
      token: getToken() ? getToken() : ''
    },
    method: _config.method,
    responseType: _config.responseType
  }).then(res => {
    // 处理请求状态码
    // switch (res.code) {
    //   case 0: // 超时清掉cookie
    //     Cookies.remove(TOKEN_KEY)
    //     break;
    //   case 1: // 处理状态码
    //     Notify({
    //       message: res.msg,
    //       duration: 1000,
    //       background: '#f44'
    //     })
    //     break;
    //   default:
    //     break;
    // }
    return res.data
  })
}