const path = require('path');

// see settings for production mode here
// https://webpack.js.org/concepts/mode/

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'node',
    externals: ['aws-sdk', 'bcrypt'],
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
    }
};