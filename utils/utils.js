let withOperationClock = 600
let isOpen = true
let promptCopy = '长时间未操作，获取最新行情'
import api from '../fetch/api'
/**
 * 休闲时间
 * @param {时间} clock
 */
export const setWithOperationClock = function (clock) {
  if (clock === 0) {
    setWithOperationHasOpen(false)
  } else {
    setWithOperationHasOpen(true)
  }
  localStorage.setItem('clock', clock)
}
const getWithOperationClock = function () {
  return String(localStorage.getItem('clock')) === 'undefined'
    ? withOperationClock
    : String(localStorage.getItem('clock')) === 'null'
    ? withOperationClock
    : localStorage.getItem('clock')
}

/**
 * 是否打开提示
 * @param {时间} clock
 */
export const setWithOperationHasOpen = function (isOpen) {
  localStorage.setItem('clockState', isOpen)
}
export const getWithOperationHasOpen = function () {
  return localStorage.getItem('clockState') || isOpen
}

/**
 * 提示内容
 * @param {时间} clock
 */
export const setWithOperationCopy = function (copy) {
  localStorage.setItem('clockCopy', copy)
}
export const getWithOperationCopy = function () {
  return localStorage.getItem('clockCopy') == 'undefined' || promptCopy
}
/*
判断页面一定时间内用户没有操作，执行fn
 */
export const withOperation = function (fn) {
  let _isOpen = getWithOperationHasOpen()
  if (typeof _isOpen === 'string' && _isOpen === 'false') {
    return
  }
  window.withOperationTimer && clearTimeout(window.withOperationTimer)
  window.withOperationTimer = setTimeout(() => {
    fn()
  }, getWithOperationClock() * 1000)
}

/**
 * 
 * 判断首页是否需要  提示窗口
 */
export const hasHomeWithOperation = function () {
  return false;
}

/**
 * 根据合约代码对与他相关的价格、涨跌幅等进行小数点处理
 * @param value 需要处理小数点的数值
 * @param productCode 合约代码
 * @returns {*|number}
 */
export const formatPoint = function (value, productCode) {
  let num = Number(value)
  if (
    productCode.includes('WGCN') ||
    productCode.includes('CEDAX') ||
    productCode.includes('SFIF') ||
    productCode.includes('SFIH') ||
    productCode.includes('SFIC') ||
    productCode.includes('SESC')
  ) {
    num = num.toFixed(1)
  } else if (
    productCode.includes('NECL') ||
    productCode.includes('CMGC') ||
    productCode.includes('CENQ') ||
    productCode.includes('SCAU') ||
    productCode.includes('CEESH')
  ) {
    num = num.toFixed(2)
  } else if (productCode.includes('CMSI')) {
    num = num.toFixed(3)
  } else if (
    productCode.includes('CMHG') ||
    productCode.includes('CMAD') ||
    productCode.includes('CMBP')
  ) {
    num = num.toFixed(4)
  } else if (productCode.includes('CMEC') || productCode.includes('CMCD')) {
    num = num.toFixed(5)
  } else if (
    productCode.includes('HIHS') ||
    productCode.includes('HIMH') ||
    productCode.includes('SCRB') ||
    productCode.includes('SCRU') ||
    productCode.includes('SCBU') ||
    productCode.includes('SCNI') ||
    productCode.includes('SCAG') ||
    productCode.includes('SCCU') ||
    productCode.includes('SCHC') ||
    productCode.includes('ZCSR') ||
    productCode.includes('ZCSM') ||
    productCode.includes('DCP1') ||
    productCode.includes('DCM') ||
    productCode.includes('DCY') ||
    productCode.includes('DCPP1') ||
    productCode.includes('CTYMH') ||
    productCode.includes('ZCTA') ||
    productCode.includes('ZCMA') ||
    productCode.includes('CEMDAX')
  ) {
    num = num.toFixed(0)
  } else {
    num = value
  }
  return num
}

export function getKefuInfo (fn) {
  if (!localStorage.getItem('qq') || !localStorage.getItem('service')) {
    api
      .commonApi('/Notice/getNoticelist', { page: 1 })
      .then(res => {
        if (res.code === 200) {
          let qq =
            qq !== undefined && qq !== null && qq !== '' ? res.qq : 3361547719
          let service =
            service !== undefined && service !== null && service !== ''
              ? res.service
              : 'https://chat.liveneed.net/chat/Hotline/channel.jsp?cid=5003432&cnfid=4015&j=9838507728&s=1'
          localStorage.setItem('qq', qq)
          localStorage.setItem('service', service)
          fn({ qq, service })
        }
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    fn({
      qq: localStorage.getItem('qq'),
      service: localStorage.getItem('service')
    })
  }
}

export function qqClicked (qq) {
  /**
   * qq号被点击后唤醒qq
   * @param qq qq号码
   */
  if (qq !== undefined && qq !== null && qq !== '') {
    if (
      /(Android|android)/g.test(window.navigator.userAgent) ||
      /(iPhone|iPad|IOS)/g.test(window.navigator.userAgent)
    ) {
      window.open(
        `mqqwpa://im/chat?chat_type=wpa&uin=${qq}&version=1&src_type=web&web_src=oicqzone.com`
      )
    } else {
      window.open(`http://wpa.qq.com/msgrd?v=3&uin=${qq}&site=qq&menu=yes`)
    }
  }
}



//--------k线-部分整体颜色 grow---------
export const chartOption = {
  // textColor: '#ccc', // 全局字体，坐标轴字体
  // backgroundColor: '#1a1a1a', // 背景色
  // themeColor: '#756ab6', // 主题色
  // lineGradient: ['#302e41', '#1f1e23', '#1a1a1a'], // 填充区域渐变

  textColor: '#747ea1', // 全局字体，坐标轴字体
  backgroundColor: '#ffffff', // 背景色
  themeColor: '#326fe4', // 主题色
  labelBg: '#326fe4', // 主题色
  labelColor: '#fff', // 主题色
  tooltipColor: '#113da9', // 最新价格的字体色
  tooltipBg: '#eeeeee', // 最新价格的背景色
  themeColorLink: '#fff', // 主题色
  themeColorLinkY: '#fff', // 主题色
  themeColorLinklabel: '#593a25', // 主题色
  lineGradient: ['rgba(234, 237, 251, 0.72)', 'rgba(234, 237, 251, 0.72)', 'rgba(234, 237, 251, 0.72)'], // 填充区域渐变

  lineGridDandlestick:{
    left: 0,
    right: '57px',
    top: '5%',
    height: '70%'
  },
  lineGridBar:{
    left: 0,
    right: '57px',
    top: '76%',
    height: '17%'
  },
  linehideDelay: 5*1000,//浮层隐藏的延迟
  showNumber:40,
  linkStep:24
}

export const chartLinkDate = {
  lineDayzooMMin:95,//------日k线缩放比例值 
  lineDayzooMCont:480,//-----日k线整体数据列表大小
  lineDayDataLength:480,//-----从接口一次获取数据条数 2年

  lineWeekzooMMin:90,//------周k线缩放比例值 
  lineWeekzooMCont:260,//------周k线缩放比例值 
  lineWeekDataLength:260,//------周k线缩放比例值 5年

  lineMonthzooMMin:65,//------月k线缩放比例值 
  lineMonthzooMCont:60,//------月k线缩放比例值 
  lineMonthDataLength:60,//------月k线缩放比例值 5年，12个月
  showNumber:24,
  linkStep:24 //-----------k线步长-------
};

/**
 * 股票行情外部接口+开市休市时间判断
 */
export const common = {
	//获取股票是否在开盘
	isOnSell(){
		let now = new Date();
		let day = now.getDay();
		let hour = now.getHours();
		let minute = now.getMinutes();
		return (day < 6 && day > 0 && ((hour == 9 && minute>=30) || hour == 10 || (hour == 11 && minute <= 30) || (hour>=13 && hour<=14)));
	},
	//获取股票实时数据
	UPDATE_STOCK_TIME:2000,
	//腾讯股票接口
	TEND_XUN_URL:"http://web.ifzq.gtimg.cn/appstock/app/",
	//新浪股票接口
  XIN_LANG_URL:"http://suggest3.sinajs.cn/",
  //日k,周k,月k,baseUrl
  BASE_LINK_URL:"http://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=",
  //A股实时行情，baseUrl
  BASE_A_SHARE_URL:"http://web.ifzq.gtimg.cn/appstock/app/minute/query?code=",
  //期货实时数据
  UPDATE_FUTURES_TIME:500,
}