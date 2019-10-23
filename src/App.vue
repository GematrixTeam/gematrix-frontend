<template>
  <div id="app">
    <ButtonForCenteredModal />
  </div>
</template>

<script>
import ButtonForCenteredModal from '@/components/ButtonForCenteredModal.vue';

export default {
  name: 'app',
  components: {
    ButtonForCenteredModal,
  },
};
</script>

<style lang="sass" scoped>
@import 'assets/style/sass/style.sass'
</style>
