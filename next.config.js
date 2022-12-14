/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','api.escuelajs.co', 'api.lorem.space','wixmp.com', 'romapy'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);



// Configuracion normal 
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['placeimg.com','api.escuelajs.co', 'api.lorem.space','wixmp.com', 'romapy']},
//   // env:{
//   //   customKey:'customValue'
//   // },
//   // basePath: '/dist',
//   // compress:true,
//   // async redirects({
//   //   return [
//   //     {
//   //       source: '/hola',
//   //       destination: '/hello',
//   //       permanentl: true,
//   //     }
//   //   ]
//   // })
// }

// module.exports = nextConfig
