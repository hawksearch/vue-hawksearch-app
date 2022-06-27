const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: ['./app.js']
    },
    output: {
        filename: 'js/vue-hawksearch-app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            src: path.resolve(__dirname, 'src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "targets": {
                                        "esmodules": true,
                                        "browsers": ['last 2 versions']
                                    },
                                    "modules": false,
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-class-properties',
                            'babel-plugin-transform-export-extensions',
                            '@babel/plugin-proposal-export-default-from',
                            //'babel-plugin-transform-es2015-modules-commonjs',
                            ['@babel/plugin-transform-runtime', {useESModules: true}]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    // and now lastly extract the css into a dist file
                    MiniCssExtractPlugin.loader,
                    // then load the css
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    // first, transpile sass to css
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/vue-hawksearch-app.css",
            chunkFilename: "css/vue-hawksearch-app.css",
        })
    ]
};
