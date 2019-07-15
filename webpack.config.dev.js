import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin ({  
                                                        template: path.join(__dirname, './server/index.html'),
                                                        filename: 'index.html',
                                                        inject: 'body',
                                                    });
export default {
    mode: "development",
    // devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader/webpack','babel-loader'] 
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [ '.js','.jsx' ]
    }
}