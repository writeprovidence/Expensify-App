// entry -> output
// writing regular expression for test. the $sign check if the file end with .js --read
//we have to make webpack use the preset=env, react- we create a separate config file .babelrc
//use alows us to provide array of loaders
//historyApiFallback- tell our brower we will be handling routing via client side code
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test:  /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
};
