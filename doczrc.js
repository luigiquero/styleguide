export default {
  title: 'Indeva Styleguide',
  description: 'The UI library by Indeva',
  repository: 'https://github.com/indeva/styleguide',
  ordering: 'ascending',
  src: './src/docs',
  dest: './docs',
  hashRouter: true,
  themeConfig: {
    colors: {
      primary: '#f47d35',
      link: '#2463d0',
    },
  },
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.scss');
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    );

    return config;
  },
};
