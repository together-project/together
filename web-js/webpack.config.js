const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'together-button.min.js',
    libraryTarget: 'umd',
    library: 'TogetherButton'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(?:png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            }
          },
        ]
      },
    ],
  },
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'lib')],
  },
}