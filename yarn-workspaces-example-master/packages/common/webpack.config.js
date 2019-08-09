const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./template/default.aspx",
	filename: "./Default.aspx"
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(gif|png|jpe?g|svg|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'build/images',
							name: '[name].[ext]'
						},
					}
				]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.aspx$/i,
				use: 'raw-loader',
			},
		]
	},
	output: {
		path: __dirname + "/",
		filename: "thejavascript.js"
	},
	plugins: [htmlPlugin]
};