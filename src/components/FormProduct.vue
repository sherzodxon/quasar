<template>
  <q-dialog v-model="alert" class="modal-box">
    <Modal  :onClose="onClose">
      <template v-slot:content>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <Select class="q-mb-md" v-model="product_type_id" />
          <q-input
            dense
            filled
            v-model="name_uz"
            label="Your name *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            dense
            filled
            type="number"
            v-model="cost"
            label="Your cost *"
            lazy-rules
            :rules="[
              (value) => (value !== null && value !== '') || 'Please cost',
              (value) => value > 0 || 'Please positive cost',
            ]"
          />

          <q-input
            dense
            filled
            v-model="address"
            label="Your address *"
            lazy-rules
            :rules="[
              (value) => (value && value.length > 0) || 'Please type something',
            ]"
          />
          <div class="submit-box">
            <q-btn
              label="Submit"
              type="submit"
              color="teal"
              filled
              :disable="loading"
            />
          </div>
        </q-form>
      </template>
      <template v-slot:footer> </template>
    </Modal>
  </q-dialog>
</template>
<script>
import Select from "./Select.vue";
import Modal from "./Modal.vue";
import { Notify } from "quasar";
import { mapActions, mapState } from "vuex";

export default {
  name: "FormProduction",
  data() {
    return {
      name_uz: null,
      cost: null,
      address: null,
      product_type_id: null,
      alert: null,
    };
  },
  components: {
    Select,
    Modal,
  },
  computed: {
    ...mapState("product", ["loading"]),
  },
  props: {
    data: {
      id: {
        type: Number,
        require: true,
      },
      name_uz: {
        type: String,
        require: true,
      },
      cost: {
        type: Number,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      product_type_id: {
        type: Number,
        require: true,
      },
      created_date: {
        type: Number,
        require: true,
      },
    },
    type: {
      type: String,
      default: "create",
    },
  },
  mounted() {
    if (this.type === "edit") {
      this.getData();
    }
  },
  methods: {
    ...mapActions("product", ["editProduct", "createProduct"]),
    getData() {
      this.name_uz = this.data.name_uz;
      this.cost = this.data.cost;
      this.address = this.data.address;
      this.product_type_id = this.data.product_type_id;
    },
    async onSubmit() {
      const newData = {
        name_uz: this.name_uz,
        cost: this.cost,
        address: this.address,
        product_type_id: this.product_type_id.value,
        created_date: Date.now(),
      };

      if (this.type === "edit") {
        try {
          await this.editProduct({
            id: this.data.id,
            ...newData,
          });
          Notify.create({
            message: "Edited",
            icon: "check",
            color: "positive",
            position: "top",
            timeout: 1000,
          });
          this.onClose();
        } catch (error) {
          Notify.create({
            message: "not Edited !",
            icon: "times",
            color: "negative",
            position: "top",
            timeout: 1000,
          });
        }
      } else {
        try {
          await this.createProduct(newData);
          Notify.create({
            message: "Created",
            icon: "check",
            color: "positive",
            position: "top",
            timeout: 1000,
          });
          this.onClose();
        } catch (error) {
          Notify.create({
            message: "not created !",
            icon: "times",
            color: "negative",
            position: "top",
            timeout: 1000,
          });
        }
      }
    },
    onClose() {
      this.alert = !this.alert;
    },
  },
};
</script>
<style lang="scss" scoped>
.submit-box {
  display: flex;
  justify-content: center;
}
</style>
