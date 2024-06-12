/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['fakestoreapi.com'],
    },
  };
  
  export default nextConfig;

//   const path = require('path');

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias['@components'] = path.join(__dirname, 'components');
//     config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
//     config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
//     config.resolve.alias['@types'] = path.join(__dirname, 'types');
//     return config;
//   },
// };