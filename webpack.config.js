const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        path: __dirname + 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx'],
        alias:{
            "@assets": __dirname + 'assets/',
            "@styles": __dirname + 'public/styles/',
            "@components": __dirname + 'src/app/components/',
            "@containers": __dirname + 'src/app/containers/',
            "@pages": __dirname + 'src/app/pages/'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: 'file-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}