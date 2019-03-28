const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const Crawler = require('crawler');

function crypFn(str) {
  hash = crypto.createHash('md5');
  return hash.update(str).digest('hex');
}

const saveDir = path.resolve(__dirname, '../../../../桌面');
const baseUrl = 'http://www.meizitu.com/a/list_1_1.html';

var base = new Crawler({
  rateLimit: 2000,
  callback(err, res, done) {
    if (err) {
      console.log(err);
    } else {
      var $ = res.$;
      let total_page = 0;
      $('#wp_page_numbers li a').each((index, item) => {
        if ($(item).text() === '末页') {
          let _total_page = $(item).attr('href');
          let regexp = /\d+/g;
          total_page = _total_page.match(regexp)[1];
          console.log(index, `total_page:${total_page}`);
        }
      });
      let i = 1;
      var time = setInterval(() => {
        let list_url = `http://www.meizitu.com/a/list_1_${i}.html`;
        console.log(list_url);
        downloadContent(list_url);
        i++;
        if (i > 92) clearInterval(time);
      }, 5000);
    }
    done();
  }
});

function downloadContent(uri) {
  new Crawler({
    jQuery: true,
    rateLimit: 10000,
    callback(err, res, done) {
      if (err) {
        console.log(err);
      } else {
        let $ = res.$;
        let arr = [];
        $('.wp-item .pic a').each((k, i) => {
          let href = $(i).attr('href');
          arr.push(href);
        });
        console.log(arr);
        let i = 0;
        let timer = setInterval(() => {
          downloadSrc(arr[i]);
          i++;
          if (i > 92) clearInterval(timer);
        }, 3000);
      }
    }
  }).queue([
    {
      uri: uri
    }
  ]);
}

// http://www.meizitu.com/a/5493.html
// downloadSrc('http://www.meizitu.com/a/5493.html')
// downloadSrc('http://www.haopic.me/28864')
function downloadSrc(uri) {
  new Crawler({
    jQuery: true,
    rateLimit: 10000,
    callback(err, res, done) {
      if (err) {
        console.log(err);
      } else {
        let $ = res.$;
        let arr = [];
        $('.postContent p img').each((k, i) => {
          let src = $(i).attr('src');
          const ext = src.split('.').pop();
          const filename = `${crypFn(src)}.${ext}`;
          arr.push({ src, filename });
        });
        let i = 0;
        let timer = setInterval(() => {
          downloadImg(arr[i]);
          i++;
          if (i > 92) clearInterval(timer);
        }, 3000);
      }
      done();
    }
  }).queue([
    {
      uri: uri
    }
  ]);
}

function downloadImg({ uri, filename }) {
  new Crawler({
    rateLimit: 3000,
    encoding: null,
    callback(err, res, done) {
      if (err) {
        console.log(err);
      } else {
        fs.createWriteStream(`${saveDir}/${filename}`).write(res.body);
        console.log(`图片保存到本地:`, `${saveDir}/${filename}`);
      }
      done();
    }
  }).queue([
    {
      uri
    }
  ]);
}

base.queue([baseUrl]);
