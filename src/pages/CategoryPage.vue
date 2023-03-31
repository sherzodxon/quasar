<template>
  <div class="q-pa-md category-wrapper">
    <Table :columns="col" :row="category" title="Category" />
  </div>
</template>

<script>
import Table from "src/components/Table.vue";
import { mapState, mapActions } from "vuex";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name Uz",
    align: "left",
    field: (row) => row.name_uz,
    format: (val) => `${val}`,

  },
  {
    name: "name",
    required: true,
    label: "Name Ru",
    align: "left",
    field: (row) => row.name_ru,
    format: (val) => `${val}`,

  },
  {
    name: "name",
    required: true,
    label: "Name Uk",
    align: "left",
    field: (row) => row.name_uk,
    format: (val) => `${val}`,

  },
];

export default {
  name: "CategoryPage",
  data() {
    return {
      col: columns,
    };
  },
  computed: {
    ...mapState("category", ["category"]),
  },
  components: {
    Table,
  },
  methods: {
    ...mapActions("category", ["getCategory"]),
    async loadData() {
      try {
        await this.getCategory();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
.category-wrapper{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
</style>
