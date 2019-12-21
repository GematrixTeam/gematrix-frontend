<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  mixins: [reactiveProp],
  props: {
    optionsGraph: Object,
    chartData: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    // this.chartData создаётся внутри миксина.
    // Если вы хотите передать опции, создайте локальный объект options
    this.renderChart(this.chartData, this.optionsGraph);
  },
};
</script>
