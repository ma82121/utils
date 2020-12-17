module.exports = {
  mode: 'development',
  entry: {
    fisherYatesShuffle: './src/example/fisherYatesShuffle.js',
    hitTestPoint: './src/example/hitTestPoint.js',
    hitTestRect: './src/example/hitTestRect.js',
    maintainAspectRatio: './src/example/maintainAspectRatio.js',
    index: './src/example/index.js',
    randomColorHsl: './src/example/randomColorHsl.js',
    randomColorRgb: './src/example/randomColorRgb.js',
    randomFloat: './src/example/randomFloat.js',
    randomInt: './src/example/randomInt.js',
    randomIntCenterSide: './src/example/randomIntCenterSide.js',
    randomIntMaximamSide: './src/example/randomIntMaximamSide.js',
    randomIntMinimamSide: './src/example/randomIntMinimamSide.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: 'public',
    open: true
  },
  resolve: {
    alias: {
      '@': __dirname + '/src'
    },
    extensions: ['.js']
  }
};