<template>
  <section class="data-list-item container rounded mb-2 p-2">
    <b-row class="no-gutters align-items-center justify-content-between">
      <b-col class="data-list-item__title p-1" sm="12" md="9">
        <h3>{{ dataset.title }}</h3>
      </b-col>
      <b-col>
        <div class="data-list-item__btn d-flex justify-content-end" md="2">
          <b-button href="/visualize">Visualize</b-button>
        </div>
      </b-col>
      <div class="w-100"></div>
      <b-col class="data-list-item__content p-1" sm="12" md="6">
        <div>{{ dataset.body }}</div>
      </b-col>
      <b-col sm md="5">
        <div class="data-list-item__img">
          <b-img src="https://picsum.photos/400/200/?grayscale" fluid alt="Responsive image"></b-img>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>

export default {
  props: {
    dataset: Object,
  },
};
</script>

<style lang="sass" scoped>
  .data-list-item
    background-color: #C4C4C4
</style>
