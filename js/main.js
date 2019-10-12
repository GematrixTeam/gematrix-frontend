const app = new Vue({
  el: '#app',
  methods: {
    async getDataFrom(path) {
      try {
        const result = await fetch(path);
        return await result.json();
      } catch (err) {
        return `ERROR ${err}`;
      }
    },
  },
});
