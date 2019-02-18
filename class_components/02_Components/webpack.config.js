const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Extract css into separate files,it creates a css file per js file which contains css.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: {
        app: './index.tsx',
        appStyle: './css/site.css',
        vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]?[hash]'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        noInfo: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};