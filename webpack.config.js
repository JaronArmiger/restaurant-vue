const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
  	rules: [
  	  {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
      	test: /\.js$/,
      	exclude: /node_modules/,
      	use: {
      	  loader: 'babel-loader',
      	  options: {
      	  	presets: ['@babel/preset-env'],
      	  }
      	}
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            }
          }        
        ]
      }
  	]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}