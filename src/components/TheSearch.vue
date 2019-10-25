<template>
  <div class="search-area">
    <div class="search-area__input">
      <span class="search-area__input-name">Search</span>
      <b-form-input v-model="inputText" class="search-area__input-field"></b-form-input>
    </div>
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
  @import '../assets/style/sass/_TheSearch.sass'
</style>
