const { DefinePlugin } = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    // Add WebpackObfuscator plugin
    new WebpackObfuscator({
      rotateStringArray: true, // Example option
      stringArray: true,
    }, [])
  ],
  devtool: 'source-map',
};