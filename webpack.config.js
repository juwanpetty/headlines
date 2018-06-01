const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const dist = path.join(__dirname, '/public');
const src = path.join(__dirname, '/src');

module.exports = {
    entry: src + '/app.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: dist
    }
};