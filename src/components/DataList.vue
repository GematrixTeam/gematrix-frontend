<template>
  <section class="data-list">
    <DataListItem
    v-for="dataset of datasets"
    :dataset="dataset"
    :key="dataset.id"/>
  </section>
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
  @import '../assets/style/sass/_DataList.sass'
</style>
