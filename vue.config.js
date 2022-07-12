module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 
    pwa: {
      name: 'Heladerias',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      workboxPluginMode: 'GenerateSW',
      worboxOptions: {
        skipWaiting: true
      }
  
    }
  
}
