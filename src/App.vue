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
@import '/assets/style/style.sass'
</style>
