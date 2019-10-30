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
      requestPath: '',
      datasets: [],
      loading: true,
      getRequestConfig: {
        method: 'GET',
      },
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
    */
    $_setRequestPath(requestPath) {
      this.requestPath = requestPath;
    },

    /**
    * Method sends a GET-request.
    * @param {string} requestPath - the path to...
    * @param {object} getRequestConfig - get-request params scope.
    * @return {array} - array of objects.
    */
    async $_getDataFrom(requestPath, getRequestConfig) {
      try {
        const result = await fetch(requestPath, getRequestConfig);
        return await result.json();
      } catch (err) {
        throw new Error(err);
      }
    },

    /**
    * Method fills the array with data.
    * @param {array} data
    */
    $_fillTheArrayWith(data) {
      // if (this.$_isValidFormat(data)) {
      this.datasets = [...data];
      // }
    },

    // /**
    // * Method checks if the data format is valid (array of not empty objects).
    // * @param {*} data
    // * @return {boolean} - true - if is valid, otherwise - false.
    // */
    // $_isValidFormat(data) {
    //   if (this.$_isArray(data)) {
    //     if (this.$_areArrayElemsNotEmptyObjects(data)) {
    //       return true;
    //     }
    //   }
    //   return false;
    // },

    // /**
    // * Method checks if the data is array.
    // * @param {*} data
    // * @return {boolean} - true - if it is, otherwise - false.
    // */
    // $_isArray(data) {
    //   return Array.isArray(data);
    // },

    // /**
    // * Method checks are the array elements not empty objects.
    // * @param {array} arr
    // * @return {boolean} - true - if they are, otherwise - false.
    // */
    // $_areArrayElemsNotEmptyObjects(arr) {
    //   if (arr.every((elem) => {
    //     const check = Object.values(elem);
    //     return check.length;
    //   })) {
    //     return true;
    //   }
    //   return false;
    // },
  },
};
</script>

<style lang="sass" scoped>
  .header
    background-color: #C4C4C4
</style>
