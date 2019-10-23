<template>
  <div>
    <b-button v-b-modal.modal-uploadPage>Add dataset</b-button>

    <b-modal id="modal-uploadPage" size="lg" centered scrollable title="Add new dataset">
      <InputText titleField="Title" />
      <InputText titleField="Source" />
      <InputText titleField="Tags" />
      <p class="my-4">Vertically centered modal!</p>
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </b-modal>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';

export default {
  name: 'app',
  components: {
    InputText,
  },
};
</script>

<style lang="sass" scoped>
@import '../assets/style/sass/style.sass'
</style>
