module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            _actions: './src/actions',
            _api: './src/api',
            _app: './src/app',
            _assets: './src/assets',
            _components: './src/components',
            _common: './src/components/common',
            _config: './src/config',
            _constants: './src/constants',
            _containers: './src/containers',
            _features: './src/features',
            _navigations: './src/navigations',
            _screens: './src/screens',
            _services: './src/services',
            _styles: './src/styles',
            _utils: './src/utils',
          },
        },
      ],
    ],
  };
};
