const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    extensions: [".tsx", ".ts", ".jsx", ".jsx"],
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
      inject: "body",
    }),
  ],
  devServer: {
    port: 41111,
    hot: false,
    historyApiFallback: true,
  },
};
