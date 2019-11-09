import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

const wrapper = shallowMount(App);

describe('we have the Get-request path', () => {
  it('is there the path', () => {
    expect(wrapper.vm.requestPath).to.not.be.empty;
  });

  it('the path is string', () => {
    expect(typeof (wrapper.vm.requestPath) === 'string').to.be.true;
  });
});
