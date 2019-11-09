import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';


describe('we have the Get-request path', () => {
  it('is there the path', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.requestPath).to.not.be.empty;
  });

  it('the path is string', () => {
    const wrapper = shallowMount(App);
    expect(typeof (wrapper.vm.requestPath) === 'string').to.be.true;
  });
});
