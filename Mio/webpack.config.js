const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack')
const path = require('path')

module.exports = () => {
  return {
    entry: './src/js/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath : '/dist'
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": "jquery"
      })
    ],
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(.jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
            },
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
    watch: true,
  }
}