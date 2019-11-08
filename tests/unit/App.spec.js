import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';


// describe('getting datasets', () => {
//   it('checking get-request method', done => {
//     const wrapper = shallowMount(App);
//     wrapper.vm.$_getDataFrom('../tests/testData.json', {method: 'GET'})
//     .then((res) => {console.log(`Oops: ${res}`); done();});
//   });
// });

// describe('getting datasets', () => {
//   it('checking get-request method', done => {
//     const wrapper = shallowMount(App);
//     wrapper.vm.$_getDataFrom('https://jsonplaceholder.typicode.com/posts?_limit=5', {method: 'GET'});
//     wrapper.vm.$nextTick(() => {
//       expect(wrapper.vm.datasets).to.not.be.empty;
//       done();
//     });
//   });
// });
