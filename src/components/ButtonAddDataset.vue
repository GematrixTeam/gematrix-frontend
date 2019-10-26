<template>
  <div>
    <b-button v-b-modal.modal-uploadPage size="lg">Add dataset</b-button>

    <b-modal id="modal-uploadPage" size="lg" centered scrollable title="Add new dataset">
      <InputText titleField="Title" />
      <InputText titleField="Source" />
      <InputText titleField="Tags" />
      <Textarea titleField="Data" />
    </b-modal>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';
import Textarea from '@/components/Textarea.vue';

export default {
  name: 'app',
  components: {
    InputText, Textarea,
  },
};
</script>
