const path = require("path");

const resolve = path.resolve;
const join = path.join;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(process.cwd(), "dist"),
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: join(__dirname, "dist"),
    port: 6868,
    historyApiFallback: true,
  },
};
