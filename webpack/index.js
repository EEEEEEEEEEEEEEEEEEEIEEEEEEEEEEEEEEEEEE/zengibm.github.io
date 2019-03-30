const path = require('path');
const Koa = require('koa');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const webpack = require('webpack');
const app = new Koa();

class AngelConfig {
  constructor(options) {
    this.config = require(options.configUrl);
    this.webpackConfig = require(options.webpackUrl);
    this.compiler = webpack(this.webpackConfig);
    this.app = app;
    this.setServerConfig();
  }
  setServerConfig() {
    this.port = this.config.dev_server.port;
    this.host = this.config.dev_server.host;
    this.app.keys = this.config.keys ? this.config.keys : this.app.keys;
  }
}

class AngeServer extends AngelConfig {
  constructor(options) {
    super(options);
    this.startService();
  }

  startService() {
    this.app.use(
      devMiddleware(this.compiler, {
        noInfo: true,
        reload: true,
        publicPath: this.webpackConfig.output.publicPath
      })
    );

    this.app.use(
      hotMiddleware(this.compiler, {
        noInfo: true,
        reload: true
      })
    );

    this.app.listen(this.port, () => {
      console.log(`当前服务器已启动`, `http://${this.host}:${this.port}`);
    });
  }
}

var server = new AngeServer({
  configUrl: path.join(process.cwd(), 'webpack/config.js'),
  webpackUrl: path.join(process.cwd(), 'webpack/webpack.config.js')
});
