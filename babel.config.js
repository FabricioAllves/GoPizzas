module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins : [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jason'
          ],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@assets': './src/assets'
          }
        }
      ]
    ]
  };
};
