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
        <TheLoader v-if="loading" />
        <DataList v-else :datasets="datasets" />
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
import TheLoader from '@/components/TheLoader.vue';

export default {
  name: 'app',
  data() {
    return {
      datasets: [],
      loading: true,
    };
  },
  mounted() {
    this.getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=5').then((result) => {
      this.fillTheArrayWith(result);
      this.loading = false;
    });
  },
  components: {
    TheSearch, DataList, TheLoader,
  },
  methods: {
    /**
    * Method sends a get- request.
    * @param {string} path - the path to...
    * @return {array} - array of objects.
    * @return {string} - error messege if catch some error.
    */
    async getDataFrom(path) {
      try {
        const result = await fetch(path);
        return await result.json();
      } catch (err) {
        return `ERROR ${err}`;
      }
    },

    /**
    * Method fills the array with data.
    * @param {array} data
    */
    fillTheArrayWith(data) {
      this.datasets = [...data];
    },
  },
};
</script>

<style lang="sass" scoped>
  @import 'assets/style/sass/style.sass'
</style>
