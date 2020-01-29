// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Gridsome',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: true,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'Gridsome',
          themeColor: '#666600',
          backgroundColor: '#ffffff',
          icon: '', // must be provided
          msTileImage: '',
          msTileColor: '#666600'
      }
  }
  ],
  icon: {    
    favicon: {
      src: './src/assets/images/favicon.png', 
      sizes: [16, 32, 96]
    },  
  }
}
