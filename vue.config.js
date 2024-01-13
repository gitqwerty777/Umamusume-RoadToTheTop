const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/Umamusume-RoadToTheTop/",
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Road To The Top',
    },
  }
})
