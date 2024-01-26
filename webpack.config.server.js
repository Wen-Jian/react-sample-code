// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const glob = require('glob');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
// var WebpackPwaManifest = require("webpack-pwa-manifest");
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == 'production';

// const manifest = require("./manifest.json");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  target: 'node',
  entry: glob.sync('apps/playground-client/src/pages/**/index.tsx').reduce(
    (acc, path) => {
      const entry = path.replace('.tsx', '').replace('.js', '');
      const splitEntry = entry.split("/")
      acc[splitEntry[splitEntry.length -2]] = './' + path;
      return acc;
    },
    {
      // "src/usecase/serverSideRenderSrv":
      //   "./src/usecase/serverSideRenderSrv/index.ts",
    }
  ),
  output: {
    path: path.resolve("./dist/apps/playground-client/server"),
    filename: '[name].js',
    // library: 'test',
    // libraryExport: "default",
    clean: false,
    // libraryTarget: "commonjs-module",
    libraryTarget: 'commonjs',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'apps/playground-client/index.html',
    // }),
    // new WebpackPwaManifest(manifest),
    new MiniCssExtractPlugin({
      filename: '../../../../public/style/index.css',
    }),
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
              presets: ['@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 配置 Babel 解析器 (第三步)
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        // loader: "ts-loader",
        // exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        // include: [path.resolve(__dirname, "packages/ui-component/lib/core")],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
            // publicPath: 'https://cdn/assets/',
            outputPath: "../../../../public",
          },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, ''),
      '@workspace/ui-components': path.resolve('./packages/ui-component'),
      'chat-proto': path.resolve('./packages/proto/proto/chat/chat_pb.js'),
      // "react": path.resolve(__dirname, "/thirdParty/react/node_modules/react"),
    },
  },
//   externals: {
//     react: 'react',
//     'react-dom': 'react-dom'
//   },
  externals: [nodeExternals()],
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    // config.plugins.push(
    //   new WorkboxWebpackPlugin.GenerateSW({
    //     clientsClaim: true,
    //     skipWaiting: true,
    //   })
    // );
  } else {
    config.mode = 'development';
  }
  return config;
};
