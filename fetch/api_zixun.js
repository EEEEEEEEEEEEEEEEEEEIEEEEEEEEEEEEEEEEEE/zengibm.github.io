import axios from 'axios'
import qs from 'qs'
import store from '../store/index.js'
import router from '../router'
import {domainName, protocol} from '../utils/config'
import {Indicator} from 'mint-ui'

//----股票接口-----
let instance = axios.create({
  baseURL:`http://47.101.175.164/api/admin/fetcher/newss/page?`
});

instance.defaults.withCredentials = true    // 存住cookie
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

let _baseURL = `http://47.101.175.164/api/admin/fetcher/newss/page?`  // 测试环境
instance.defaults.baseURL = `http://47.101.175.164/api/admin/fetcher/newss/page?`  // 测试环境

// POST传参序列化
instance.interceptors.request.use((config) => {
  if (config.method === 'post' || config.method === 'get') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  _.toast("错误的传参", 'fail')
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error && error.response) {  // http状态码
    switch (error.status) {
      case 401:
        error.message = '错误请求'
        store.commit('SHOW_LOGINBOX')
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
    }
  } else {
    error.message = '网络繁忙'
  }
  return Promise.reject(error)
})

function fetch(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getFetch(url, params,typeUrl) {
  return new Promise((resolve, reject) => {
    // store.dispatch('SET_FETCH_LOADING', true)
    // console.log('params',params)
    if(typeUrl&&typeUrl != undefined && typeUrl != null)
    {
      _baseURL.replace('newss',typeUrl)
    }
    let urlAry = url.split("?");
    let baseURL = urlAry.shift();
    let fullURL = _baseURL;
    let _ps = ''
    _ps = urlAry.join("&")
    if(params){
      if(_ps){
        _ps += "&"
      }
      _ps +=Object.entries(params).map(v => `${v[0]}=${v[1]}`).join('&');
    }
    if(params || _ps){
      fullURL+='?'+_ps 
    }
    axios.get(fullURL)
      .then(response => {
        resolve(response.data)
        // 关闭  loading图片消失
        // store.dispatch('SET_FETCH_LOADING', false)
      })
      .catch((error) => {
        // 关闭  loading图片消失
        // store.dispatch('SET_FETCH_LOADING', false)
        reject(error)
      })
  })
}

function fetchHeader(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function startApp(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
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
    instance.post(url, params)
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
    instance.post(
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
   * 通用接口
   */
  commonApi(url, params) {
    return fetch(url, params)
  },
  /**
   * 通用get提交接口
   */
  getCommonApi(url, params, typeUrl) {
    return getFetch(url, params, typeUrl)
  },
  /**
   * 通用接口带loading
   */
  APiWithLoading(url, params) {
    return fetchWithLoading(url, params)
  },
  /**
   * 获取用户信息
   */
  getUserInfo() {
    return fetch('/User/getUserInfo', {device: 1})
  },
  /**
   * 获取行情
   */
  hangqing(url, params) {
    return getHangqing(url, params)
  },
  /**
    * 获得并运行一个 JavaScript 文件
    */
   getScript(uri,cb){
      var head = document.head || document.head.getElementsByTagName('head')[0];
      var el = document.createElement('script');
      el.type = 'text\/javascript';
      el.onerror = e=>{
          cb(e)
      };
      el.onload = event=>{
          cb({uri,event})
      }
      head.appendChild(el);
      el.src = uri;
    }

}
