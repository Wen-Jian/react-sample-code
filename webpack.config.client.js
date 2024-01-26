// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
// const glob = require("glob");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
// var WebpackPwaManifest = require("webpack-pwa-manifest");
const ReactServerWebpackPlugin = require('react-server-dom-webpack/plugin');
// const webpack = require('webpack');
require('dotenv').config();

const isProduction = process.env.NODE_ENV == "production";

// const manifest = require("./manifest.json");

const config = {
  // entry: glob.sync("./src/pages/*/*.tsx").reduce((acc, path) => {
  //   const entry = path.replace("index.tsx", "").replace(".js", "");
  //   acc[entry] = './' + path;
  //   return acc;
  // }, {}),
  // entry: './src/pages/index/index.tsx',
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  entry: [path.resolve(__dirname, './src/thirdParty/framework/bootstrap.js')],
  output: {
    path: path.resolve("./public"),
    filename: "[name][contenthash].index.js",
    publicPath: "",
    // library: 'test',
    // libraryExport: "default",
    // libraryTarget: "window",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    //   inject: true,
    // }),
    new ReactServerWebpackPlugin({
      isServer: false,
      clientReferences: [{
        directory: path.resolve("./dist"),
        recursive: true,
        include:/\.(js|jsx)$/
      }]
    }),
    // new webpack.EnvironmentPlugin({
    //   "CLIENT_SIDE_SERVER": process.env.CLIENT_SIDE_SERVER
    // })
    // new WebpackPwaManifest(manifest),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 配置 Babel 解析器 (第三步)
              "presets": [
                [
                  "@babel/preset-react",
                  {
                    "runtime": "automatic"
                  }
                ]
              ]
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "~": path.resolve(__dirname, ''),
      '@workspace/ui-components': path.resolve('./packages/ui-component'),
      "react": path.resolve('./node_modules/.pnpm/react@18.3.0-next-1308e49a6-20230330/node_modules/react'),
      'chat-proto': path.resolve('./packages/proto/proto/chat/chat_pb.js'),
    },
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    // config.plugins.push(
    //   new WorkboxWebpackPlugin.GenerateSW({
    //     clientsClaim: true,
    //     skipWaiting: true,
    //     runtimeCaching: [
    //       {
    //         handler: "NetworkFirst",
    //         urlPattern: ({url}) => url.pathname.match(/^\/.+/).length > 0,
    //         options: {
    //           cacheName: "static-assets-cache",
    //           cacheableResponse: {
    //             statuses: [200],
    //           },
    //         },
    //       },
    //     ],
    //   })
    // );
  } else {
    config.mode = "development";
  }
  return config;
};
