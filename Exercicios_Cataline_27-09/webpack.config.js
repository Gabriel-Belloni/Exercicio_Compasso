
const path = require('path');

module.exports = {
    mode: 'development',
    entry:['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
       static: path.resolve(__dirname, './public')
    }
}