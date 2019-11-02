<template>
  <div class="loading-error p-1 d-flex justify-content-center align-items-center flex-column">
    <p><span class="loading-error__oops">Oops!</span>&#32;{{ error }}</p>
    <b-img src="http://placekitten.com/400/500" fluid alt="Responsive image" class="py-1"></b-img>
  </div>
</template>

<script>
export default {
  props: {
    error: String,
  },
};
</script>

<style lang="sass" scoped>
  .loading-error
    font-family: Verdana, Geneva, Tahoma, sans-serif
    font-size: large
    &__oops
      background-color: yellow
</style>
