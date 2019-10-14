const app1 = new Vue({
  el: '#app-1',
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

const app2 = new Vue({
  el: '#app-2',
  methods: {},
});
