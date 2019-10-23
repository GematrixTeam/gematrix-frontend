<template>
  <div>
    <b-row class="my-1">
      <b-col sm="1">
        <label for="title">{{titleField}}:</label>
      </b-col>
      <b-col sm="11">
        <b-form-input id="title" v-model="textTitle" placeholder="Enter dataset title"></b-form-input>
        <!--    <div class="mt-2">Value: {{ textTitle }}</div> -->
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
  props: ['titleField'],
};
</script>

<style lang="sass" scoped>
.my-1
  line-height: 38px
</style>
