<template>
  <div>
        <label for="title">{{titleField}}:</label>
        <b-form-textarea
      id="textarea"
      v-model="textTitle"
      placeholder="CSV data here"
      rows="10"
      max-rows="15"
    ></b-form-textarea>
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
    titleField: String,
  },
};
</script>
