const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    plugins: [
       new webpack.optimize.ModuleConcatenationPlugin(),
       // new webpack.optimize.UglifyJsPlugin(),
    ]
};