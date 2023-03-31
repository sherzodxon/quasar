<template>
  <q-dialog v-model="alert" class="modal-box">
    <Modal title="Form Modal" :onClose="onClose">
      <template v-slot:content>
        <div class="text-h5">Would You </div>
      </template>
      <template v-slot:footer>
        <q-btn label="Cancel" type="button" color="primary" />
        <q-btn label="Ok" type="button" color="primary" />
      </template>
    </Modal>
  </q-dialog>
</template>
<script>
import Modal from './Modal.vue'
export default {
  name: "Confirmation",
  data() {
    return {
      alert: null,
    };
  },
  components: {
    Modal,
  },
  methods: {
    onOk(data) {
      console.log(data, "data");
    },
    onClose() {
      this.alert = !this.alert;
    },
  },
};
</script>
<style lang="scss"></style>
