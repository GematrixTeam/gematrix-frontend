<template>
  <div id="app">
    <header>
      <h1>GEMATRIX</h1>
    </header>

    <b-breadcrumb :items="items"></b-breadcrumb>

    <main>
      <aside class="sidebar">
      </aside>
      <div class="content">
      </div>
    </main>

<div>
  <b-button v-b-modal.modal-uploadPage>Add dataset</b-button>

  <b-modal id="modal-uploadPage" size="lg" centered title="Add new dataset">
    <p class="my-4">Vertically centered modal!</p>
  </b-modal>
</div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#',
        },
        {
          text: 'Manage',
          href: '#',
        },
        {
          text: 'Library',
          active: true,
        },
      ],
    };
  },
};
</script>

<style lang="sass">
@import 'assets/style/sass/style.sass'
</style>
