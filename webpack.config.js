const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
    entry: {
        app: __dirname + '/src/js/index.js',
        test: __dirname + '/src/js/test.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js/'),
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            PORT: JSON.stringify(process.env.PORT)
        })
    ],
    devServer: {
        contentBase: __dirname + '/src/public', //source of static assets
        port: 7700,
    }
};