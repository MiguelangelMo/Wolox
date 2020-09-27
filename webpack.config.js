const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: './public/index.html',
        }),
        new MiniCSSExtractPlugin({
            filename: 'main.css',
            template: './src/css/main.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' },
                ],
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // include: path.join(__dirname, '/public/img'),
                            outputPath: 'img',
                            // publicPath: 'img/',
                            useRelativePath: true,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
};
