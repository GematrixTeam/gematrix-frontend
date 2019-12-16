<template>
  <div class="">
    <TheLoader v-if="loading" />
    <div v-else>
      <div v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id" class="m-100">
        <h3 class="text-center my-3">Construct the view</h3>
        <div class="w-75 mx-auto">
          <RandomChart class="mb-3" />
          <strong>Title</strong> {{ dataset.title }}
          <div class="text-right">
            <b-button href="/create" class="mt-3 mb-3" >Create</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';
import RandomChart from '@/components/RandomChart.vue';

export default {
  data() {
    return {
      datasets: [],
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
    TheLoader, RandomChart,
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
