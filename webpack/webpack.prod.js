const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('w34dsfsgewrw3r3t3rh')
        })
    ]
}