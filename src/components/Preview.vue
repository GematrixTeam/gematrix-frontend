<template>
  <div class="main__add-data-btn d-flex justify-content-center">
    <TheLoader v-if="loading" />
    <div v-else>
      <b-card no-body class="overflow-hidden p-3 mt-5 lg"
      v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id">
        <b-card-title class="text-center">{{ dataset.title }}</b-card-title>
        <b-card-body>
          <RandomChart />
          <b-card-text/>
        </b-card-body>
      </b-card>
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
