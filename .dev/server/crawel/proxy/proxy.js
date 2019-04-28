const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const proxys = [];
const useful = [];

const proxy_url = "http://www.xicidaili.com/nn"; // 国内高匿代理
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"
}; //给个浏览器头，不然网站拒绝访问
// const proxy_url = "http://api.hphrj.com/Index/getSystemProduct2"; // 国内高匿代理

class Proxy {
  constructor(proxy_url) {
    this.proxy_url = proxy_url; // 国内高匿代理
    this.config = {
      url: this.proxy_url,
      method: "GET"
    };
  }
  set() {
    const obj = arguments;
    if (obj.length == 0) return;
    if (obj.length == 1) {
      if (Object.prototype.toString.call(obj[0]).includes("Object")) {
        this.config.headers = Object.assign({}, this.config.headers, obj[0]);
      } else {
        throw "参数设置错误，必须为键值对或者 (a, 1)";
      }
    } else if (obj.length === 2) {
      this.config.headers = Object.assign({}, this.config.headers, {
        [obj[0]]: obj[1]
      });
    }
    return this;
  }

  init() {
    this.getXici();
  }

  async getXici() {
    const res = await this.request(this.config);
    const $ = cheerio.load(res.body);
    let trs = $("#ip_list tr");
    for (let i = 1, len = trs.length; i < len; i++) {
      var proxy = {};
      let tr = trs.eq(i);
      let tds = tr.children("td");
      proxy["ip"] = tds.eq(1).text();
      proxy["port"] = tds.eq(2).text();
      console.log(proxy);
    }
    console.log(proxys, useful);
  }

  request(config) {
    return new Promise((resolve, reject) => {
      request(config, function(error, response, body) {
        if (!error) {
          resolve(response);
        } else {
          console.log(error, 11);
          reject(error);
        }
      }).catch(error => console.log("caught", error));
    });
  }
}

const app = new Proxy(proxy_url);
app.set(headers).init();
