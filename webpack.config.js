var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const FileManagerPlugin = require('filemanager-webpack-plugin');
var mode = 'development';
var sourceMap = 'source-map';
const path = require('path');

module.exports = env => {

    if (process.env.NODE_ENV === 'production') {
        mode = 'production';
        sourceMap = 'hidden-source-map';
    }

    return {
        mode: mode,
        devtool: sourceMap,
        optimization: {
            minimize: true
        },
        entry:
            {
                'css/main': ['./sass/reset.scss', './sass/main.scss'],
                'js/app': ['./js/scripts.js'],
            },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].min.js',
            assetModuleFilename: 'images/[name][ext]',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.(css|sass|scss)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    type: 'asset',
                    generator: {
                        filename: 'fonts/[name][ext]',
                    },
                }
            ],
        },
        plugins: [
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
            }),
            new FileManagerPlugin({
                events: {
                    onStart: {
                        delete: ['dist/js', 'dist/css', 'dist/fonts', 'dist/images'],
                    },
                }
            }),
        ],
    }
};
