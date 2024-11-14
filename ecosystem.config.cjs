module.exports = {
  apps: [
    {
      name: 'StandoffHub',
      port: '3033',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
        NITRO_PRESET: 'node_cluster',
      },
      script: './.output/server/index.mjs',
      interpreter: 'bun',
    },
  ],
}
