// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './src/A0019-exercicio/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};
