<template>
  <div class="search-area p-2 rounded">
    <b-form-input  v-model="inputText" placeholder="Search..."></b-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
    };
  },
};
</script>

<style lang="sass" scoped>
.search-area
  background-color: #C4C4C4
</style>
