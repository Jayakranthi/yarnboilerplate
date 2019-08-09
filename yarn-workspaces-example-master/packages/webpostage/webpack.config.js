const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./template/default.aspx",
	filename: "./Default.aspx"
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-react', '@babel/env']
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