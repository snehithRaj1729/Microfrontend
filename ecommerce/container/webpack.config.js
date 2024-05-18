const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
// products in the key before the url must be same as the key value of name in products webpack.config.js
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};