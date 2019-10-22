module.exports = {
  /* module: {
    rules: [
      // ... другие правила опущены

      // это правило будет применяться к обычным файлам `.scss`
      // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      // webpack.config.js -> module.rules
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              // sass-loader >= 8
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },

    ],
  }, */
  // плагин опущен
  /* resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.saas'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      styles: resolve('src/assets/style'),
    },
  }, */
  /*  */
};
