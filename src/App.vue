<template>
  <div id="app">
    <div class="header-wrapper">
      <header class="header">
        <span class="header__text">GEMATRIX</span>
      </header>
    </div>
    <div class="main">
      <div class="main__left-part">
        <TheSearch />
        <DataList :datasets="datasets" />
      </div>
      <div class="main__right-part">
        <button class="main__add-data-btn">Add dataset</button>
        <aside class="main__aside"></aside>
      </div>
    </div>
  </div>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue';
import DataList from '@/components/DataList.vue';

export default {
  name: 'app',
  data() {
    return {
      datasets: [],
    };
  },
  mounted() {
    this.getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=5').then((result) => {
      this.fillTheArrayWith(result);
    });
  },
  components: {
    TheSearch, DataList,
  },
  methods: {
    async getDataFrom(path) {
      try {
        const result = await fetch(path);
        return await result.json();
      } catch (err) {
        return `ERROR ${err}`;
      }
    },

    fillTheArrayWith(data) {
      this.datasets = [...data];
    },
  },
};
</script>

<style lang="sass" scoped>
  @import 'assets/style/sass/style.sass'
</style>
