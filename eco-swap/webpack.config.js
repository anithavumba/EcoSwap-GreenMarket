const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: {
    main: './src/index.js', // Main entry point
    dynamicFeature: './src/dynamicFeature.js', // Entry point for code splitting
  },
  output: {
    filename: 'static/js/[name].[contenthash].js', // Use placeholders for dynamic filenames
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the 'dist' directory before each build
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Enable code splitting for all chunks
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
