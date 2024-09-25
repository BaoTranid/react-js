const path = require('path');
const sass = require('sass');

// craco.config.js
module.exports = {
  webpack: {
    resolve: {
      alias: {
        'sass-loader': require.resolve('sass-loader'),
      },
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
};
