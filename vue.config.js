module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables/custom-variables.scss";`,
      },
    },
  },
};
