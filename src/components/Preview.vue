<template>
  <div class="main__add-data-btn d-flex justify-content-center">
    <TheLoader v-if="loading" />
    <div v-else>
      <div v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id">
        <h3 class="text-center my-3">{{ dataset.title }}</h3>
        <div class="iframe_border"> {{code}} </div>
        <div class="my-3 text-center">
          <b-button href="/" class="mr-2">Facebook</b-button>
          <b-button href="/" class="mr-2">Twitter</b-button>
          <b-button class="mr-2" @click="enterCodeEmbed">Embed Code</b-button>
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
      code: 'Code to insert',
      embed: `<iframe src="http://gematrix-dev.hntr.info/visualize" width="600" height="700">
    Ваш браузер не поддерживает плавающие фреймы!
 </iframe>`,
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
    enterCodeEmbed() {
      this.code = this.embed;
    },
  },
};
</script>

<style lang="sass" scoped>

  .iframe_border
    border: 1px solid black
    padding: 20px 30px
    width: 300px
    margin: 0 auto

</style>
