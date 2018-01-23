var ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};