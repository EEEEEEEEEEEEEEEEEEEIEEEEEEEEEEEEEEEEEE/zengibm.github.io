import axios from 'axios'
import qs from 'qs'
import store from './../store/index.js'
import router from './../router/'
import {domainName, protocol, apiWithoutToken, errCode, eventLoopList} from '../utils/config'
import {getLogUrl} from '../utils/utils'
import {Indicator, Toast} from 'mint-ui'

// axios 配置
// axios.defaults.timeout = 5000
axios.defaults.withCredentials = true    // 存住cookie
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// c站
axios.defaults.baseURL = `${protocol}//api.${domainName}/`  // 测试环境

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post' || config.method === 'get') {
    config.data = qs.stringify(config.data)
  }
  let flag = false
  let token = store.state.login.user_token
  if (token.includes('已登录')) return config
  apiWithoutToken.forEach(item => {
    if (config.url.includes(item)) flag = true
  })
  if (!flag && token) {  // 判断是否存在token，如果存在的话，则在apis新接口每个request header都加上token
    config.headers.token = token
  }
  return config
}, (error) => {
  Toast('错误的参数')
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response.data.code)
  // if (response.data.code == 401) {  // 接口code为401全局拦截
  //   store.commit('SHOW_LOGINBOX')
  // }
  return response
}, error => {
  // let err = new CatchError(error)
  return Promise.reject(error)
})

class CatchError {
  constructor(error) {
    this.message = errCode.DEFAULT
    this.status = '接口异常，无法获取状态码！'
    this.errUrl = '无法获取报错接口url！'
    this.logUrl = getLogUrl()
    this.params = {
      type: 1,
      level: 2,
      data: null,
      msg: null
    }
    this.error = null
    this.init(error)
    return this.error
  }

  init(error) {
    this.error = this.dealResData(error)
    this.sendErrorToBackend()
  }

  dealResData(error) {
    try {
      if (error) {  // http状态码
        error.status = error.response && error.response.status || error.status
        switch (error.status) {
          case 401:
            error.message = errCode.__401__
            break
          case 403:
            error.message = errCode.__403__
            break
          case 404:
            error.message = errCode.__404__
            break
          case 500:
            error.message = errCode.__500__
            break
          case 501:
            error.message = errCode.__501__
            break
          case 502:
            error.message = errCode.__502__
            break
          case 503:
            error.message = errCode.__503__
            break
          default:
            error.message = errCode.DEFAULT
            break
        }
        if (error.config && error.config.url && error.config.baseURL) {
          this.errUrl = error.config.url.split(error.config.baseURL)[1]
        }
        this.message = error.message
        this.status = error.response && error.response.status || error.status || this.status
      }
    } finally {
      this.params.data = this.errUrl
      this.params.msg = this.status
      eventLoopList.some(item => {
        return item.includes(this.errUrl)
      }) || Toast(this.message)
    }
    return error
  }

  sendErrorToBackend() {
    let id = this.params.data
    let uniqueEle = document.getElementById(id)
    let paramsStr = '?'
    let url = ''
    let body = document.body
    for (let k in this.params) {
      paramsStr += `${k}=${this.params[k]}&`
    }
    url = `${this.logUrl}${paramsStr.slice(0, -1)}`
    let script = document.createElement('script')
    script.type = "text/javascript"
    script.src = url
    script.id = id
    if (uniqueEle !== null) {
      body.removeChild(uniqueEle)
    }
    body.appendChild(script)
  }
}

function fetch(url, params) {
  return new Promise((resolve, reject) => {
    // store.dispatch('FETCH_LOADING', true)
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
        // 关闭  loading图片消失
        // store.dispatch('FETCH_LOADING', false)
      })
      .catch((error) => {
        // 关闭  loading图片消失
        // store.dispatch('FETCH_LOADING', false)
        reject(error)
      })
  })
}

function fetchHeader(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params
      //   , {
      //   headers: {
      //     'Referer': 'http://m.hphrj.com/',
      //     'Host': 'api.hphrj.com',
      //     'Origin': 'http://m.hphrj.com'
      //   }
      // }
    )
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })

    // axios({
    //   url: url,
    //   params: qs.stringify(params),
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //     'Referer': 'http://m.hphrj.com/',
    //     'Host': 'api.hphrj.com',
    //     'Origin': 'http://m.hphrj.com'
    //   }
    // })
    //   .then(response => {
    //     resolve(response.data)
    //   })
    //   .catch((error) => {
    //     reject(error)
    //   })
  })
}

function startApp(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
        // 关闭  loading图片消失
        store.dispatch('FETCH_LOADING', false)
      })
      .catch((error) => {
        // 关闭  loading图片消失
        store.dispatch('FETCH_LOADING', false)
        reject(error)
      })
  })
}

function fetchWithLoading(url, params) {
  return new Promise((resolve, reject) => {
    Indicator.open()
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
        Indicator.close()
      })
      .catch((error) => {
        Indicator.close()
        console.log(error.response.data.code)
        reject(error)
        if (error.response.data.code === 401) {
          router.push('/user/mine')
        }
      })
  })
}

// 获取行情，超时处理
function getHangqing(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(
      url,
      params,
      {
        timeout: 5000
      }
    )
      .then(response => {
        resolve(response)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default {
  /**
   * 获取用户信息
   */
  getUserInfo() {
    return fetch('/User/getUserInfo', {device: 1})
  },

  /**
   * 通用接口
   */
  commonApi(url, params) {
    return fetch(url, params)
  },

  /**
   * 修改host，referer,origin
   */
  commonApiHeader(url, params) {
    return fetchHeader(url, params)
  },

  /**
   * 通用接口带loading
   */
  APiWithLoading(url, params) {
    return fetchWithLoading(url, params)
  },

  /**
   * 公告列表
   */
  notice_list() {
    return fetch('/Notice/getNoticelist')
  },

  /**
   * 获取公告列表详情
   */
  notice_del() {
    return fetch('/Notice/getNoticeDetail', {notice_id: notice_id})
  },

  /**
   * 获取行情
   */
  hangqing(url, params) {
    return getHangqing(url, params)
  },
  /**
   * 启动APP首页调用的接口，加载初始化loading
   */
  startApp(url, params) {
    return startApp(url, params)
  }
}
