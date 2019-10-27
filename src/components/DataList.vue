<template>
  <div class="data-list rounded px-2 pt-2">
      <DataListItem
      v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id"/>
  </div>
</template>

<script>
import DataListItem from '@/components/DataListItem.vue';

export default {
  props: {
    datasets: Array,
  },
  components: {
    DataListItem,
  },
};
</script>

<style lang="sass" scoped>
  .data-list
    border: 0.05rem solid #C4C4C4
</style>
