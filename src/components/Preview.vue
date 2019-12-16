<template>
  <div class="main__add-data-btn d-flex justify-content-center">
    <TheLoader v-if="loading" />
    <div v-else>
      <div v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id">
        <h3 class="text-center my-3">{{ dataset.title }}</h3>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Code to insert..."
          rows="15"
          max-rows="6"
          value='<a class="embedly-card" data-card-controls="0" href="http://gematrix-dev.hntr.info/visualize">gematrix</a>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>'
        ></b-form-textarea>
        <div class="my-3 text-center">
          <b-button href="/" class="mr-2">Facebook</b-button>
          <b-button href="/" class="mr-2">Twitter</b-button>
          <b-button href="/" class="mr-2">Embed Code</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';

export default {
  data() {
    return {
      datasets: [],
      text: '',
      loading: true,
    };
  },
  mounted() {
    this.$_getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=1').then((result) => {
      this.$_fillTheArrayWith(result);
      this.loading = false;
    });
  },
  components: {
    TheLoader,
  },
  methods: {
    async $_getDataFrom(path) {
      try {
        const result = await fetch(path);
        return await result.json();
      } catch (err) {
        return `ERROR ${err}`;
      }
    },
    $_fillTheArrayWith(data) {
      this.datasets = [...data];
    },
  },
};
</script>
