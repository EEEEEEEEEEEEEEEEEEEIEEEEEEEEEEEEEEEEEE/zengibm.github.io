import types from "../types";
import { Local } from "./../../../utils/storage";
/**
 * 用户信息
 */
const initlogin = {
  router_login: false, //  控制全局路由拦截登录弹框
  login_box: false, //  控制全局接口登录弹框
  user_token: Local.get("user_token") || "", // 登录成功保存token，暂时用'已登录'代替
  notice_status: false // 默认首页公告不展示
};

function login(state = initlogin, action) {
  switch (action.types) {
    case types.SET_TOKEN:
      return { ...state, ...action.payload };
    case types.DELETE_TOKEN:
      return { ...state, ...action.payload };
    case types.SET_ROUTER_LOGIN:
      return { ...state, ...action.payload };
    case types.SET_API_LOGIN:
      return { ...state, ...action.payload };
    case types.SET_NOTICE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const actions = {
  [types.SET_TOKEN](data) {
    Local.set("user_token", token);
    return {
      type: types.SET_TOKEN,
      payload: {
        ...data
      }
    };
  },
  [types.DELETE_TOKEN]() {
    Local.remove("user_token");
    return {
      type: types.DELETE_TOKEN,
      payload: {
        user_token: ""
      }
    };
  },
  [types.SET_ROUTER_LOGIN](data) {
    return {
      type: types.SET_ROUTER_LOGIN,
      payload: {
        ...data,
        user_token: data.flag
      }
    };
  },
  [types.SET_API_LOGIN](data) {
    return {
      type: types.SET_API_LOGIN,
      payload: {
        ...data
      }
    };
  },
  [types.SET_NOTICE](data) {
    return {
      type: types.SET_NOTICE,
      payload: {
        ...data
      }
    };
  }
};

export { login };
