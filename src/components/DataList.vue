<template>
  <div class="data-list rounded px-2 pt-2">
      <DataListLoadingError v-if="error" :error="error" />
      <DataListItem v-else
      v-for="dataset of datasets"
      :dataset="dataset"
      :key="dataset.id"/>
  </div>
</template>

<script>
import DataListItem from '@/components/DataListItem.vue';
import DataListLoadingError from '@/components/DataListLoadingError.vue';

export default {
  props: {
    datasets: Array,
    error: String,
  },
  components: {
    DataListItem, DataListLoadingError,
  },
};
</script>

<style lang="sass" scoped>
  .data-list
    border: 0.05rem solid #C4C4C4
</style>
