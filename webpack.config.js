const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./"),
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    chunkFilename: "js/[name]-[chunkhash:8].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".jsx",'.less'],
    mainFiles: ["index"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                modules: true
            },
        },
          'less-loader'
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", // 提取的 CSS 文件名
      chunkFilename: "css/[id].css",
    })
  ],
  devServer: {
    port: 41111,
    hot: false,
    historyApiFallback: true,
  },
};
