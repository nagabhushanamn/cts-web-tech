var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "cheap-eval-source-map",
    entry: [
        './src/index.js'
    ],
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: 'dist'
    }
};