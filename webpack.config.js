const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');



module.exports = {
    // entry: './src/index.jsx',
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },

  output: {
    // path: path.resolve(__dirname, 'build'),
    path: path.resolve(__dirname, 'dist'),
    //path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
  },// ????????????
  resolve: {
    aliasFields: ['browser'], //???????????
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      bootstrapPath: path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx'],// ?????????
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './',
    hot: true,
 },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // template: './src/index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};