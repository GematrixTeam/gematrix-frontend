<template>
  <div class="main__add-data-btn d-flex justify-content-center">
    <b-button v-b-modal.modal-uploadPage size="lg">Add dataset</b-button>

    <b-modal
     ref="my-modal"
     id="modal-uploadPage"
     size="lg"
     centered
     scrollable
     title="Add new dataset"
     hide-footer>
      <b-form ref="my-form" @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Source:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.source"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Tags:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.tags"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="textarea-group" label="Data:" label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="form.data"
            placeholder="CSV data here"
            rows="10"
            max-rows="15"
            required>
          </b-form-textarea>
        </b-form-group>

        <b-button type="submit" class="mr-3" variant="primary" @click="hideModal">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      form: {
        title: '',
        source: '',
        tags: '',
        data: '',
      },
      show: true,
    };
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = '';
      this.form.source = '';
      this.form.tags = '';
      this.form.data = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
