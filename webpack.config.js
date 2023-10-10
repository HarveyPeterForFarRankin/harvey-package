const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
