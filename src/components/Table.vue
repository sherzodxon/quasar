<template>
  <q-table
    :title="title"
    :rows="row"
    :columns="columns"
    row-key="name"
    class="costum-table"
    color="primary"
  >
    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <div>
          <q-btn
            flat
            round
            color="teal"
            icon="edit"
            class="q-mx-sm"
            @click="editData(props.row)"
          />
          <q-btn
            flat
            round
            color="negative"
            icon="delete"
            class="q-mx-sm"
            @click="removeData(props.row.id)"
          />

        </div>
      </q-td>
    </template>
  </q-table>
</template>
<script>
export default {
  name: "Table",
  data() {
    return {};
  },
  props: {
    columns: {
      require: true,
    },
    row: {
      require: true,
    },
    title: {
      type: String,
      default: "Dashboard",
    },
    removeData: {
      type: Function,
    },
    editData: {
      type: Function,
    },
  },

};
</script>


