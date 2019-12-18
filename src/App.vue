<template>
  <div id="app">
    <b-container>
      <header class="header rounded text-center p-4 mt-2">
        <span class="header__text"><b-link class="link-logo" href="/">GEMATRIX</b-link></span>
      </header>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
  .header
    background-color: #C4C4C4
</style>
