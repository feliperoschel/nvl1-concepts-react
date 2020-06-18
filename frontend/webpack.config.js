const path = require('path');

module.exports = {
  //entry point dir/file
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    // output dir/file
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // Webpack dev server to monitor file changes just like nodemon
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    //rules to differentiate the loaders for each file
    rules: [
      {
        // regex to match *js files
        test: /\.js$/,
        // remove node_modules from bundle/loader it's a task for the dependency
        exclude: /node_modules/,
        use: {
          // Webpack bundle will use babel-loader when conditions above match.
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
};
