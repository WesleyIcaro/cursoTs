// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './src/A0018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  devtool: 'source-map',
};
