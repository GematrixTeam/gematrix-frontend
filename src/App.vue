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
      <div class="main__right-part"></div>
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
          text: 'dskljfld ksdlfjskldfj  sdklfjsldkfjls sdfkljsdlkfjsldkfjldkjsdklfj dskfjdkfjdl 111',
        },
        {
          text: 'dskljfld ksdlfjskldfj  sdklfjsldkfjls sdfkljsdlkfjsldkfjldkjsdklfj dskfjdkfjdl 222',
        },
        {
          text: 'dskljfld ksdlfjskldfj  sdklfjsldkfjls sdfkljsdlkfjsldkfjldkjsdklfj dskfjdkfjdl 333',
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
