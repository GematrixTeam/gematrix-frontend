<template>
  <div id="app">
    <b-container>
      <header class="header rounded text-center p-4 mt-2">
        <span class="header__text">GEMATRIX</span>
      </header>
      <section class="main py-2">
        <b-row class="no-gutters align-items-center justify-content-between">
          <b-col sm="12" md="8" class="pb-2"><TheSearch /></b-col>
          <b-col md="3" class="pb-2"><ButtonAddDataset/></b-col>
        </b-row>
        <b-row class="no-gutters justify-content-between">
          <b-col sm="12" md="8">
            <TheLoader v-if="loading" />
            <DataList v-else :datasets="datasets" />
          </b-col>
          <b-col md="3">
            <aside class="aside w-100 h-75 bg-light rounded"></aside>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue';
import DataList from '@/components/DataList.vue';
import TheLoader from '@/components/TheLoader.vue';
import ButtonAddDataset from '@/components/ButtonAddDataset.vue';

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
    TheSearch, DataList, TheLoader, ButtonAddDataset,
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
        throw new Error(err);
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
  .header
    background-color: #C4C4C4
</style>
