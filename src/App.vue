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
    this.$_getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=5').then((result) => {
      this.$_fillTheArrayWith(result);
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
    */
    async $_getDataFrom(path) {
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
    $_fillTheArrayWith(data) {
      if (this.$_isValidFormat(data)) {
        this.datasets = [...data];
      }
    },

    /**
    * Method checks if the data format is valid (array of not empty objects).
    * @param {*} data
    * @return {boolean} - true - if is valid, otherwise - false.
    */
    $_isValidFormat(data) {
      if (this.$_isArray(data)) {
        if (this.$_areArrayElemsNotEmptyObjects(data)) {
          return true;
        }
      }
      return false;
    },

    /**
    * Method checks if the data is array.
    * @param {*} data
    * @return {boolean} - true - if it is, otherwise - false.
    */
    $_isArray(data) {
      return Array.isArray(data);
    },

    /**
    * Method checks are the array elements not empty objects.
    * @param {array} arr
    * @return {boolean} - true - if they are, otherwise - false.
    */
    $_areArrayElemsNotEmptyObjects(arr) {
      if (arr.every((elem) => {
        const check = Object.values(elem);
        return check.length;
      })) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import 'assets/style/sass/style.sass'
</style>
