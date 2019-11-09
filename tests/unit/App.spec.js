import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';


describe('getting datasets', () => {
  it('is there the path', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.requestPath).to.not.be.empty;
  });
});
