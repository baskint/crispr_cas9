const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    entry: {
      './js/entry.tsx': glob.sync('./vendor/**/*.js').concat(['./js/entry.tsx']),
    },
    output: {
      path: path.resolve(__dirname, '../priv/static/js'),
      filename: 'entry.js',
      publicPath: '/js/'
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.[s]?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '../css/app.css' }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static/', to: '../' }
        ]
      })
    ],
    optimization: {
      minimizer: [
        '...',
        new CssMinimizerPlugin()
      ]
    },
    devtool: devMode ? 'source-map' : undefined
  }
};
