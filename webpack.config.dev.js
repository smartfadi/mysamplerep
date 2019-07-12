import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin ({  
                                                        template: __dirname + '/server/index.html',
                                                        filename: 'index.html',
                                                        inject: 'body'
                                                    });
export default {
    mode: "production",
    entry: path.join(__dirname, './client/index.js'),
    output: {
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
    resolve: {
        extensions: [ '.js','.jsx' ]
    }
}