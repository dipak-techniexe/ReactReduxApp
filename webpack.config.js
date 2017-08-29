var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        rules: [
        //{ enforce: "pre", test: /\.js$/, loader: "eslint", exclude: /node_modules/ },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
            test:/\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    }
}