<template>
  <div class="q-pa-lg flex flex-center">
    <div class="q-pa-lg">
      <div class="q-gutter-md">
        <q-pagination v-model="current" outline
        push
        color="teal"
        active-design="push"
        active-color="teal" :max="pagesNumber()" direction-links />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Pagination",
  data() {
    return {
      current: 1,
      perPage: 5,
    };
  },
  computed: {
    ...mapState("product", ["productLength"]),
  },
  methods: {
    pagesNumber() {
      return Math.ceil(this.productLength / this.perPage);
    },
    change(page) {
      this.current = page;
      return {
        query: { page: page, perPage: this.perPage },
      };
    },
  },
  watch: {
    "$route.query"(val, oldVal) {
      if (val) {
        this.perPage = val.perPage;
      }
    },
    current() {
      this.$router.push({
        query: { page: this.current, perPage: this.perPage },
      });
    },
  },
};
</script>

