// @ts-check
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_env, { mode = 'development' }) => {
  const develop = mode === 'development';

  return {
    mode,
    entry: {
      app: ['./src/index.tsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name].js',
      assetModuleFilename: 'assets/[name][ext]',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [{ loader: 'ts-loader', options: { transpileOnly: develop } }],
        },
        {
          test: /\.(ico|svg|jpe?g|png|webp|woff)$/,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: 'vendor.bundle',
        // Dynamic import に関連しない node_modules から呼び出すライブラリをひとまとめにする
        chunks: ({ name }) => name === 'app',
      },
      minimizer: [
        new TerserPlugin({
          extractComments: {
            condition: /^\**!|@preserve|@license|@cc_on/i,
            filename: 'licenses.txt',
          },
          terserOptions: {
            output: {
              // 対象とするコメントの pattern
              comments: /^\**!|@preserve|@license|@cc_on/,
            },
          },
        }),
      ],
    },
    devtool: develop ? 'eval-cheap-module-source-map' : 'source-map',
    ...(develop
      ? {
          devServer: {
            port: 3000,
            open: true,
            hot: true,
            publicPath: '/',
            contentBase: path.join(__dirname, 'dist/'),
            historyApiFallback: {
              index: '/',
            },
          },
        }
      : {}),
  };
};
