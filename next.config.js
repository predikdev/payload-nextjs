const path = require('path');
require('dotenv').config();
const { sizes } = require('./blocks/Image/sizes.json');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};
