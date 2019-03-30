
// const c = new Crawel({
//     maxConnections: 10,
//     retries: 5,
//     callback(err, res, done) {
//       if (err) {
//         console.log(err);
//       } else {
//         var $ = res.$;
  
//         console.log(res);
  
//         console.log($('title').text());
//       }
  
//       done();
//     }
//   });
  
//   // c.queue([
//   //   {
//   //     uri: 'http://www.meizitu.com/a/list_1_2.html',
//   //     jQuery: true,
//   //     callback(err, res, done) {
//   //       if (err) {
//   //         console.log(err);
//   //       } else {
//   //         const $ = res.$;
//   //         var total_pag = 0;
//   //         $('#wp_page_numbers li a').each((index, item) => {
//   //           console.log(index, item);
//   //           if ($(item).text() == '末页') {
//   //             total_pag = $(item).attr('href');
//   //             var regexp = /[0-9]+/g;
//   //             total_pag = total_pag.match(regexp)[1];
//   //             console.log(total_pag, index, c);
//   //             downloadContent(index, c);
//   //           }
//   //         });
//   //       }
//   //       done();
//   //     }
//   //   }
//   // ]);
  
//   // function downloadContent(i, c) {
//   //   var uri = `http://www.meizitu.com/a/list_1_${i}.html`;
//   //   c.queue([
//   //     {
//   //       uri: uri,
//   //       jQuery: true,
//   //       callback(err, res, done) {
//   //         var $ = res.$;
//   //         var meizisql = '';
//   //         $('.wp-item .pic a').each((index, item) => {
//   //           let href = $(item).attr('href');
//   //           console.log(href);
//   //           downloadImg(href, c);
//   //         });
//   //       }
//   //     }
//   //   ]);
//   // }
//   const saveDir = path.resolve(__dirname, 'static/img')
//   function downloadImg(uri, c) {
//     const filename = uri.split('/').pop();
//     const ext = filename.split('.').pop();
//     c.queue([
//       {
//         uri: uri,
//         jQuery: false,
//         encoding: null,
//         maxConnections: 3,
//         filename: `aaa.jpg`,
//         callback(err, res, done) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('下载图片:', res.request.uri.href, res.body, res.options);
//             var filename = res.options.filename;
//             if (!fs.existsSync(saveDir))
//             {
//               fs.mkdirSync(saveDir)
//               console.log('创建目录', saveDir)
//             }
//             fs.createWriteStream(saveDir+ '/' + filename).write(res.body)
//             console.log(`图片保存到本地`, `${saveDir}/${filename}`);
  
//           }
//           done()
//         }
//       }
//     ]);
//   }
  
//   function download(url, dir, filenam) {}
  
//   var imgpath =
//     'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/00/ChMkJlwuAEuIMbmBAAMSpPUXEUkAAuKRAMRt0IAAxK8664.jpg';
  
//   downloadImg(imgpath, c);