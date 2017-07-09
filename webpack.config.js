const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");
const PATHS = {
    entryFile: path.resolve(__dirname, "./src/js/app.js"),
    bundleName: "js/bundle.js",
    outputDir: path.resolve(__dirname, "./build/"),
    publicPath: "./build/"
};

let plugins = [];
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
            }
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: PATHS.publicPath
    }
};
