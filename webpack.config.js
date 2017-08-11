const path = require('path');

module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.html$/,
        use: ['raw-loader']
      }
    ]
  }
};
