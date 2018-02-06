const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    resolve : {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
        },
    },
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    // эта секция предназначена для настройки loader
    module: {
        rules: [

            // подключение  babel-loader
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {}
                    }
                ]
            },

            // подключение модулей для преобразования css
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {}
                    },

                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },

                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
        }),


        new HtmlWebpackPlugin({
            title: 'Development',
            filename: "./index.html",
            inject: "body",
            xhtml: "true"
        }),

    ],

    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};