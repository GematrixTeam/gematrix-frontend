<template>
  <div id="app">
    <div class="header-wrapper">
      <header class="header">
        <span class="header__text">GEMATRIX</span>
      </header>
    </div>
    <div class="main">
      <div class="main__left-part">
        <TheSearch />
        <DataList :datasets="datasets" />
      </div>
      <div class="main__right-part">
        <button class="main__add-data-btn">Add dataset</button>
        <aside class="main__aside"></aside>
      </div>
    </div>
  </div>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue';
import DataList from '@/components/DataList.vue';

export default {
  name: 'app',
  data() {
    return {
      datasets: [
        {
          text: 'dskl',
        },
        {
          text: '',
        },
        {
          text: 'dskljfld ksdlfjskldfj  sdklfjsldkfjls sdfkljsdlkfjsldkfjldkjsdklfj dskfjdkfjdl 333 dskljfld ksdlfjskldfj  sdklfjsldkfjls sdfkljsdlkfjsldkfjldkjsdklfj dskfjdkfjdl 333',
        },
      ],
    };
  },
  components: {
    TheSearch, DataList,
  },
};
</script>

<style lang="sass" scoped>
  @import 'assets/style/sass/style.sass'
</style>
