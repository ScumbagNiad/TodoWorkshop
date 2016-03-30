var path = require('path');
var webpack = require('webpack');

console.log(path.resolve(__dirname))

module.exports = {
	cache: true,
	context: path.resolve(__dirname, '../../src/assets'),
	entry: {
		index: './scripts'
	},
	output: {
		path: './dist/assets/js',
		publicPath: 'dist/',
		filename: '[name].js',
		chunkFilename: '[chunkhash].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.coffee?$/,
				loader: 'coffee-loader'
			},
			{
				test: /\.jade?$/,
				loader: 'jade-loader'
			},
			{
				test: /\.json?$/,
				loader: 'json-loader'
			},
			// {
			// 	test: /\.woff$/,
			// 	loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff'
			// },
			// {
			// 	test: /\.ttf$/,
			// 	loader: 'file-loader?prefix=font/'
			// },
			// {
			// 	test: /\.eot$/,
			// 	loader: 'file-loader?prefix=font/'
			// },
			{
				test: /\.svg$/,
				loader: 'svg-inline?removeSVGTagAttrs=false'
			}
		]
	},
	resolve: {
		root: path.resolve(__dirname, '../../src/assets'),

  //   	modulesDirectories: ['node_modules', './src/assets'],
		extensions: [
			'',
			'.webpack.js',
			'.web.js',
			'.ts',
			'.tsx',
			'.js',
			'.coffee'
		],
		// root: [path.resolve(__dirname, 'src/assets'), path.resolve(__dirname, 'node_modules')],
		alias: {
			// Bind version of jquery
			// jquery: 'jquery-2.0.3',

			// Bind version of jquery-ui
			// 'jquery-ui': 'jquery-ui-1.10.3',

			// jquery-ui doesn't contain a index file
			// bind module to the complete module
			// 'jquery-ui-1.10.3$': 'jquery-ui-1.10.3/ui/jquery-ui.js',
		}
	},
	plugins: [
	new webpack.ProvidePlugin({
		// Automtically detect jQuery and $ as free var in modules
		// and inject the jquery library
		// This is required by many jquery plugins
		// jQuery: 'jquery',
		// $: 'jquery'
	})]
};