import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('getting datasets', done => {
  it('checking get-request method', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.datasets).to.not.be.empty;
      done();
    });
  });
});
