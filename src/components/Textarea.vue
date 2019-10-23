<template>
  <div>
        <label for="title">{{titleField}}:</label>
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="CSV data here"
      rows="10"
      max-rows="15"
    ></b-form-textarea>
    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  props: ['titleField'],
};
</script>
