module.exports = {
    entry: __dirname + "/src/js/container.js",
    devtool: 'source-map',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
