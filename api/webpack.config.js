const path = require('path');

const root = path.resolve(__dirname);

module.exports = {
  entry: `${root}/src/index.ts`,
  target: 'node',
  externals: [
    /^[a-z\-0-9]+$/
  ],
  output: {
    filename: 'server.js',
    path: `${root}/dist`,
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  // resolveLoader: {
  //   root: [`${root}/node_modules`]
  // },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: `${root}/node_modules`,
      loader: 'ts-loader'
    }]
  }
}
