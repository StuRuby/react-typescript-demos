const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        app: './index.tsx',
        appStyle: './css/site.css',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'toastr',
            'lc-form-validation'
        ],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
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
                test: /\.(png|jpe?g|gif|svg)$/,
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
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}