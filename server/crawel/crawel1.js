const request = require('request');

class baseCrawel {
  constructor() {
      this.getProxyList()
  }

  getProxyList() {
    const api_url = 'baidu.com';

    return new Promise((resolve, reject) => {
      const options = {
        method: 'GET',
        url: api_url,
        gzip: true,
        encoding: null,
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
          'User-Agent':
            'Mozilla/8.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
          referer: 'http://www.66ip.cn/'
        }
      };

      request(options, (err, res, body) => {
        try {
          if (err) throw err;
          if (/meta.*charset=gb2312/.test(body)) {
            body = iconv.decode(body, 'gbk');
          }
          var ret = body.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/g);
          resolve(ret);
        } catch (e) {
          return reject(e);
        }
      });
    });
  }
}
