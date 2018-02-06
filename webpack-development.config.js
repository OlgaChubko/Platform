const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    // Точка входа для webpack
    entry: [
        //activate HMR for React
        'react-hot-loader/patch.js',


        //bundle the client for webpack dev server
        //and connect to the provided endpoint
        'webpack-dev-server/client/index.js?http://localhost:3000',

        //bundle the client for hot reloading
        //only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',

        "./index.js",
    ],


    // Папка относительно которой расчитывается точка входа и иные настройки webpack
    context: path.resolve(__dirname, "src"),

    // В панели разработчиека возможность просматривать и отлаживать код
    devtool: 'inline-source-map',

    // Конечный файл сборки webpack с указанием настройки, где он лежит и как называется
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // resolve.alias позволяет нам одним словом заменить более длинный путь до определенной папки
    resolve : {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
        },
    },

    // эта секция предназначена для настройки loader
    module: {
        rules: [{

            // подключение  babel-loader
            resource: {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
            },

            use: [
                {
                    loader: "babel-loader",
                    options: {}
                }
            ]
            },

     // подключение модулей для преобразования css
            {
                resource: {
                test: /\.scss$/,
                },

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
            }
        ]
    },


    // эта секция предназначена для запуска пректа на localhost, с возможностью прописать порт запуска,            настройку быстрой перезагрузки и т.д (обращаться в документацию)
        devServer: {
        contentBase: './build',
        port: 3000,
        hot: true,
    },

    // эта секция предназначена для настройки plugin
    plugins: [

        // ProvidePlugin нужен для прямого обращения к модулям React и др. если мы явно обращаемся
        // в модуле к этой библиотеке, а она там не подключена
        new webpack.ProvidePlugin({
            'React': 'react',
        }),

        // HtmlWebpackPlugin нужен для того чтоб сформировать стартовую html страницу сборки
        new HtmlWebpackPlugin({
            template: './helpers/template/index.html',
            title: 'Development',
            filename: "./index.html",
            inject: "body",
        }),

        new webpack.HotModuleReplacementPlugin(),
        //activates HMR

        new webpack.NamedModulesPlugin(),
        //prints more readable module names in the browser console on HMR updates
    ],
};