const path = require("path")

module.exports = {
 entry: "./src/index.js",
 output: {
  filename: "bundle.js",
  path: path.resolve(__dirname, "dist"),
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
    },
   },
   {
    test: /\.scss$/,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.(png|jpg|jpeg|gif|svg)$/i,
    use: [
     {
      loader: "file-loader",
      options: {
       name: "[name].[hash].[ext]", // Rename the image file with a hash
       outputPath: "images", // Output directory for images
      },
     },
    ],
   },
  ],
 },
 devServer: {
  contentBase: "./dist",
 },
}
