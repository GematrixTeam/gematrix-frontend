<template>
  <div>
    <line-chart :chart-data="datacollection" class="mb-3"></line-chart>
    <b-button href="/" class="mr-2">Facebook</b-button>
    <b-button href="/" class="mr-2">Twitter</b-button>
    <b-button href="/" class="mr-2">Embed Code</b-button>
    <b-button href="/" class="mr-2">Home</b-button>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      labelsX: [1, 2, 3, 4, 5],

    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.labelsX,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            borderColor: '#007979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),
              this.getRandomInt(), this.getRandomInt()],
            // fill: false,
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
