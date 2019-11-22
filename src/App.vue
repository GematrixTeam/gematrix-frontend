<template>
  <div id="app">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <LineExample />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineExample from './components/LineChart.js';

export default {
  components: {
    LineExample,
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin:  0 auto;
}
</style>
