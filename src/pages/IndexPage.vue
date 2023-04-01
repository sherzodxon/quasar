<template>
  <div class="q-pa-md wrapper-box">
    <q-btn color="teal" iconRight="add" rounded class="q-ml-auto q-mr-auto q-mb-md" size="md" @click="showDialog" />
    <Table
      :columns="col"
      :row="product"
      :removeData="removeData"
      :editData="editData"
      title="Product"
    />

    <q-inner-loading :showing="loading" color="teal" />
  </div>
</template>

<script>
import { Dialog, Notify } from "quasar";
import { editData } from "../api/useApi";
import FormProduction from "../components/FormProduct.vue";
import Table from "src/components/Table.vue";
import { mapState, mapActions } from "vuex";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: 'name_uz',
  },
  {
    name: "cost",
    align: "center",
    label: "Cost",
    field: "cost",
    align: "left",
  },
  {
    name: "product_type_id",
    label: "Product Type",
    field: "product_type_id",
    align: "center",
  },
  {
    name: "address",
    label: "Address",
    field: "address",
    align:"center"
  },
  {
    name: "created_date",
    label: "Created Date",
    field: "created_date",
    align:"center"
  },
  {
    name: "action",
    align: "center",
    required: true,
    label: "Actions",

  },
];

export default {
  name: "IndexPage",
  data() {
    return {
      col: columns,
    };
  },
  computed: {
    ...mapState("product", ["product", "loading"]),
  },
  components: {
    Table,
  },

  methods: {
    ...mapActions("product", ["getProduct","deleteProduct"]),
    ...mapActions("category", ["getCategory", "getSelectDefaultValue"]),

    async loadData() {
      try {
        await this.getProduct();
      } catch (error) {
        console.log(error);
      }
    },

    async removeData(id) {
      try {
        Dialog.create({
          title: "Confirmation",
          message: "Are you sure!?",
          cancel: true,
          persistent: true,
          color: "teal",
        }).onOk(async () => {
          await this.deleteProduct(id);
          Notify.create({
            message: "Deleted",
            icon: "check",
            color: "positive",
            position: "top",
            timeout: 1000,
          });
          this.loadData();
        });
      } catch (error) {
        Notify.create({
          message: error,
          icon: "times",
          color: "negative",
          position: "top",
          timeout: 1000,
        });
      }
    },

    async editData(data) {
      await this.getCategory();
      Dialog.create({
        component: FormProduction,
        parent: this,
        componentProps: {
          data: {
            ...data,
            product_type_id: await this.getSelectDefaultValue(
              data.product_type_id
            ),
          },
          type: "edit",
        },
      });
    },
    showDialog() {
      Dialog.create({
        component: FormProduction,
        parent: this,
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.wrapper-box {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .q-inner-loading {
    height: 100%;
    background: transparent;
  }
}

</style>
