const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true, // Este é o valor crítico
        liveReload: false, // Desativamos o liveReload para evitar dupla recarga
        port: 9000,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin({
            overlay: false, // Opcional: desativa overlay de erro para facilitar debug
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Removemos as opções de plugins daqui para evitar configuração duplicada
                        // O plugin react-refresh/babel deve estar no babel.config.js
                    }
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};