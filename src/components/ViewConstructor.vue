<template>
  <div class="main__add-data-btn d-flex justify-content-center">
    <div v-if="error" :error="error"></div>
    <b-card no-body class="overflow-hidden mt-5">
      <b-card-title class="text-center">Construct the view</b-card-title>
      <b-card-body>
        <b-card-img src="https://picsum.photos/600/300/?grayscale" fluid alt="Responsive image"></b-card-img>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="/" variant="primary">Create</b-button>
      </b-card-body>
    </b-card>
  </div>
</template>
