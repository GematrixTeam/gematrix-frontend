import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
// import { BContainer, BRow, BCol } from 'bootstrap-vue';
import App from '@/App.vue';

describe('App.vue', () => {
  it('is there the path', () => {
    const path = '';
    const wrapperPath = shallowMount(App, {
      propsData: { path },
    });
    expect(wrapperPath.text()).to.include(path);
  });
});
