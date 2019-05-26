// 判断当前时间是否在所设定的时间范围内
export const time_range = function (beginTime, endTime, nowTime) {
  var strb = beginTime.split(":");
  if (strb.length != 2) {
    return false;
  }

  var stre = endTime.split(":");
  if (stre.length != 2) {
    return false;
  }

  var strn = nowTime.split(":");
  if (stre.length != 2) {
    return false;
  }
  var b = new Date();
  var e = new Date();
  var n = new Date();

  b.setHours(strb[0]);
  b.setMinutes(strb[1]);
  e.setHours(stre[0]);
  e.setMinutes(stre[1]);
  n.setHours(strn[0]);
  n.setMinutes(strn[1]);

  if (n.getTime() - b.getTime() >= 0 && n.getTime() - e.getTime() < 0) {
    return true;
  } else {
    // alert("当前时间是：" + n.getHours() + ":" + n.getMinutes() + "，不在该时间范围内！");
    return false;
  }
}

function doHandleMonth(month) {
  var m = month
  if (month.toString().length == 1) {
    m = "0" + month
  }
  return m
}

export const getDay = function (day) {
  var today = new Date()
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
  today.setTime(targetday_milliseconds) // 注意，这行是关键代码

  var tYear = today.getFullYear()
  var tMonth = today.getMonth()
  var tDate = today.getDate()
  tMonth = doHandleMonth(tMonth + 1)
  tDate = doHandleMonth(tDate)
  // return tYear + "-" + tMonth + "-" + tDate
  return (tYear + "-" + tMonth + "-" + tDate).substr(-2,2)
}
