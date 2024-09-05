//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'export' // We want only SSG
};

const useMockServer = {
  rewrites: async () => {
    const API_HOST = process.env.API_HOST ?? 'http://localhost:3500';
    return [
      {
        source: '/content/:path*',
        destination: `${API_HOST}/content/:path*`
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)({
  ...nextConfig,
  ...(process.env.NODE_ENV !== 'production' ? useMockServer : {}),
});
