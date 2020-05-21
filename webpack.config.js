const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        anyname: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port:'3030',
        hot:true,
        open:true
},

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.js(x?)$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                loader:'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
    ],
    optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    resolve: {
        extensions: ['.js','.ts','.tsx']
    }
}
