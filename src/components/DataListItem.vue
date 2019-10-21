<template>
  <div class="data-list-item">
    <b-card no-body class="overflow-hidden" style="max-width: 1144px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-body title="Example dataset name">
            <b-card-text>
              {{ dataset.text }}
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <b-card-img src="https://via.placeholder.com/700x160" class="rounded-0"></b-card-img>
        </b-col>
      </b-row>
  </b-card>
  </div>
</template>

<script>
export default {
  props: {
    dataset: Object,
  },
};
</script>
