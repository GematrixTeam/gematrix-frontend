const app = new Vue({
  el: '#app',
  methods: {
    async getDataFrom(path) {
      try {
        const result = await fetch(path);
        return await result.json();
      } catch (err) {
        throw new Error(err);
      }
    },
  },
});
