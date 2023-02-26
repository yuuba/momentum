const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "index.html",
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    client: {
      overlay: true,
    },
    watchFiles: path.join(__dirname, "src"),
    port: 5000,
    hot: true,
    liveReload: true,

    allowedHosts: "all",
    compress: true,
  },
};
