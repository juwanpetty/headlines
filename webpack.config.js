const path = require('path');

const dist = path.join(__dirname, '/public');
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
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        contentBase: dist,
        port: 3000
    }
};