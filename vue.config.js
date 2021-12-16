module.exports = {
  /*css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_extend.scss";
        `,
      },
    },
  },*/
  outputDir: './docs',
  publicPath: '/vue/',
  configureWebpack: {
    //entry: ['babel-polyfill', './src/main.js'],
  },
  devServer: {
    port: 8080,
    overlay: false,
  },
};
