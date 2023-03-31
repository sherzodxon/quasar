<template>
  <div class="link-box">
    <q-item clickable light :to="route" class="link-item">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="label-text">{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    route: {
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.link-box {
  .label-text {
    font-size: 1rem;
    font-weight: 600;
  }
  .q-item.q-router-link--active {
    color: $dark;
  }
  .link-item {
    min-height: 43px;
    color: $muted-text;
    &:hover {
      color:$box-hover-color;
    }

    .q-router-link--active {
      color: #baaeae;
    }
  }
}
</style>
