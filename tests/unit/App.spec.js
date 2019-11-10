import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

const wrapper = shallowMount(App);

describe('we have the Get-request path', () => {
  it('is there the path', () => {
    const path = 'this is the right path';
    wrapper.vm.$_setRequestPath(path);
    expect(wrapper.vm.requestPath === path).to.be.true;
  });
  it('the path is string', () => {
    expect(wrapper.vm.requestPath).to.be.a('string');
  });
});

describe('$_getDataFrom(...) works', () => {
  it('we have got a valid response', (done) => {
    return wrapper.vm.$nextTick(() => {
      wrapper.vm.$_getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=5', {method: 'GET'}).then((res) => {
        expect(res).to.have.lengthOf(5);
        done();
      }).catch(done);
    });
  });
});

describe('$_fillTheArrayWith(...) works', () => {
  it('method should fill datasets property', () => {
    const arr = [1, 'a', '#', true, {}, []];
    wrapper.vm.$_fillTheArrayWith(arr);
    expect(wrapper.vm.datasets).to.have.lengthOf(arr.length);
    expect(wrapper.vm.datasets).to.include(...arr);
  });
});
