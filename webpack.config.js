const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const PATHS = {
    entryFile: path.resolve(__dirname, "./src/js/app.js"),
    bundleName: "js/bundle.js",
    outputDir: path.resolve(__dirname, "./build/"),
    publicPath: "./build/"
};

let plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.ejs",
        title: packageJson.name,
        keywords: packageJson.keywords,
        description: packageJson.description,
        cache: false,
        alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
        outputPath: PATHS.publicPath
    })
];

if (process.env.NODE_ENV === "production") {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: PATHS.entryFile,
    output: {
        filename: PATHS.bundleName,
        path: PATHS.outputDir
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: packageJson.babel
                    },
                    {
                        loader: "eslint-loader",
                    }
                ]
            },
            {
                test: /\.scss$/i,
                exclude: [/node_modules/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: PATHS.publicPath
    }
};
