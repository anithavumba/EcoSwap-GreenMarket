const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const options = {
  setupMiddlewares: (devServer) => {
    // Your middleware setup code here
    // Add your middleware functions here using devServer.app.use(...)
  },
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(8080, 'localhost', () => {
  console.log('Server is running on http://localhost:8080');
});
