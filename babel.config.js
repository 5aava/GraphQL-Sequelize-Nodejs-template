module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': [
            '>0.25%',
            'not ie 11',
            'not op_mini all',
          ],
        },
      },
    ],
  ];

  const plugins = [
  ];

  return {
    presets,
    plugins,
  };
};
