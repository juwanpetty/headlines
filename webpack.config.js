const path = require('path');

const dist = path.join(__dirname, '/dist');
const src = path.join(__dirname, '/src');

module.exports = {
    entry: src + '/app.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
};