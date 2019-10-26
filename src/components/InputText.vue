<template>
  <div>
    <b-row class="my-1 row-vertical-center">
      <b-col sm="1">
        <label for="title">{{titleField}}:</label>
      </b-col>
      <b-col sm="11">
        <b-form-input id="title" v-model="textTitle"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textTitle: '',
    };
  },
  props: {
    titleField: String
  },
};
</script>

<style lang="sass" scoped>
.row-vertical-center
  line-height: 38px
</style>
