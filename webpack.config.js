const path = require('path');

module.exports = {
  entry: {
    'redact-pii': './src/index.ts',
    'redact-pii.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'redact-pii',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  }
};
