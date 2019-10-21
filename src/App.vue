<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
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

<style lang="scss">
  h1 {
    color: red;
    text-align: center;
  }

</style>
