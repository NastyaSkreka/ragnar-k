const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/assets/js/index.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name][ext]'
        }     
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "God Of War",
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src','assets',  'images'),
            to: path.resolve(__dirname, 'dist','assets', 'images'),
          },
        ],
      }),
]
};