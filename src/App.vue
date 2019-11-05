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
            <DataList v-else-if="error" :error="error" />
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
      requestPath: '',
      datasets: [],
      loading: true,
      getRequestConfig: {
        method: 'GET',
      },
      error: '',
    };
  },
  mounted() {
    this.$_setRequestPath('https://jsonplaceholder.typicode.com/posts?_limit=5');
    this.$_getDataFrom(this.requestPath, this.getRequestConfig).then((result) => {
      this.$_fillTheArrayWith(result);
      this.loading = false;
    });
  },
  components: {
    TheSearch, DataList, TheLoader, ButtonAddDataset,
  },
  methods: {

    /**
    * Method sets the GET-request path.
    * @param {string} requestPath - the path to...
    * @returns {void}
    */
    $_setRequestPath(requestPath) {
      this.requestPath = requestPath;
    },

    /**
    * Method sends a GET-request.
    * @param {string} requestPath - the path to...
    * @param {Object} getRequestConfig - get-request params scope.
    * @returns {(Array|null)} - array of data or null - if in catch.
    */
    async $_getDataFrom(requestPath, getRequestConfig) {
      try {
        const result = await fetch(requestPath, getRequestConfig);
        return await result.json();
      } catch (err) {
        this.loading = false;
        this.error = `${err.name}: ${err.message}`;
        return null;
      }
    },

    /**
    * Method fills the array with data.
    * @param {Array} data
    * @returns {void}
    */
    $_fillTheArrayWith(data) {
      this.datasets = [...data];
    },
  },
};
</script>

<style lang="sass" scoped>
  .header
    background-color: #C4C4C4
</style>
