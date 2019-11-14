import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ButtonAddDataset from '@/components/ButtonAddDataset.vue';

describe('ButtonAddDataset.vue', () => {
  it('Fields are empty', () => {
    const msg = '';
    const wrapper = shallowMount(ButtonAddDataset, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
