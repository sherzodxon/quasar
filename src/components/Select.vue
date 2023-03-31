<template>
  <q-select
    dense
    filled
    v-model="value"
    label="Categories"
    :options="options"
    @filter="loadCategoryData"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Select",
  data() {
    return {
      options: null,
    };
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    ...mapGetters("category", ["getSelectCategory"]),
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    ...mapActions("category", ["getCategory"]),

    async loadCategoryData(val, update, abort) {
      if (this.getSelectCategory.lenght > 0) {
        this.options = this.getSelectCategory;
        update();
        return;
      }
      try {
        await this.getCategory();
        update(() => {
          this.options = this.getSelectCategory;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang=""></style>
