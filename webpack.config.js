const path = require('path');

const dist = path.join(__dirname, '/dist');
const src = path.join(__dirname, '/src');

module.exports = {
    entry: src + '/app.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }]
    },
    devServer: {
        contentBase: dist,
        port: 3000
    }
};