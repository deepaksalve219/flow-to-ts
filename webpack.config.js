const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    libraryTarget: "commonjs",
    filename: "fingerartur.f2ts.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  externals: [
    nodeExternals({
      allowlist: ["trim-right"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
