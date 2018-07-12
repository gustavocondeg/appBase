var webpack = require('webpack');
var path = require('path');

module.exports = [{
    resolve: {
        extensions: ['', '.js', '.min.js'],
        root: [
            path.resolve('.')
        ]
    },
    entry: './UI/app/main',
    output: {
        filename: './UI/dist/bundle.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
},
{
    resolve: {
        extensions: ['.min.js', '', '.js'],
        root: [
            path.resolve('.'),
            path.resolve('./UI/libs/kendo/js') // the path to the minified scripts
        ]
    },
    entry: './UI/app/main-libs',
    output: {
        filename: './UI/dist/bundle-libs.js'
    }
}]