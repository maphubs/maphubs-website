var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var local = require('./local');
require('babel-polyfill');

module.exports = {
  devtool: 'eval',
  entry: {
    home: "./client/home",
    error: "./client/error",
    about: "./client/about",
    crowdcover: "./client/crowdcover",
    services: "./client/services",
    journalists: "./client/journalists",
    vendor: ["./materialize.config.scss", "jquery", "react", "react-dom", "materialize-css", "reflux", "reflux-state-mixin", "debug", "bluebird", "classnames", "intl"],
    locales: ["./services/locales"],
    clientconfig: ["./clientconfig"]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
    },
    extensions: ['', '.js', '.jsx', '.json']
  },

  output: {
    path: local.publicFilePath,
    publicPath: '/public/',
    filename: "[name].js"
  },

  node: {
    fs: "empty",
    i18n: 'empty',
    net: "empty",
    tls: "empty"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },{
        test: /\.(glsl|vert|frag)([\?]?.*)$/,
        loader: 'raw'
      },{
      test: /\.jsx?$/,
      loader: 'babel-loader',

      include: [/i18n\.js/, /locales/, /views/, /client/, /components/, /stores/, /actions/, /services/, /reflux-state-mixin/],
      query: {
        presets: [
          "es2015",
          "react",
          "stage-0"
        ],
        plugins: ['transform-flow-strip-types']
      }
    },

      {test: /\.(scss|css)$/, loader: ExtractTextPlugin.extract('style-loader', "css!resolve-url!sass")},

      {test: /\.(woff|svg|ttf|eot|gif)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}

    ],
    postLoaders: [{
          include: /node_modules\/mapbox-gl-shaders/,
          loader: 'transform',
          query: 'brfs'
      }],
    noParse: [
      '/node_modules\/json-schema\/lib\/validate\.js/' //https://github.com/request/request/issues/1920
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
          $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Materialize: "materialize-css",
       "window.Materialize": "materialize-css"
    }),
    new webpack.optimize.CommonsChunkPlugin({
           names: ["clientconfig", "locales", "vendor"],
                       minChunks: Infinity
   }),
   new ExtractTextPlugin("[name].css"),
   new webpack.IgnorePlugin(/^(i18n|winston|winston-loggly)$/),
   new webpack.DefinePlugin({
    'process.env': {
        APP_ENV: JSON.stringify('browser')
    }
})
  ],

  externals: {
    'unicode/category/So': '{}'
}
};

//
//  new webpack.optimize.DedupePlugin(),
