//@ts-check
const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
};

module.exports = nextConfig;
