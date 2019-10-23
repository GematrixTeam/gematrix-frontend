<template>
  <b-container class="data-list-item">
    <b-row>
      <b-col cols="9" class="data-list-item__heading">
        <h2>{{ dataset.title }}</h2>
      </b-col>
      <b-col>
        <div class="data-list-item__button">
          <b-button class="data-list-item__button_size
          data-list-item__button_color">
            Visualize
          </b-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="data-list-item__text-content">{{ dataset.body }}</b-col>
      <b-col>
        <div class="data-list-item__img">
          <b-img right src="https://picsum.photos/700/160/?grayscale" fluid alt="Responsive image"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    dataset: Object,
  },
};
</script>

<style lang="sass" scoped>
  @import '../assets/style/sass/DataListItem.sass'
</style>
