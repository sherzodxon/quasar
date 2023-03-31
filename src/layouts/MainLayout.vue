<template>
  <q-layout view="lHh Lpr lFf" class="layout">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Quasar Task</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="aside">
      <q-list>
        <q-item-label header class="logo-container">
         <p class="title">Furor Progress</p>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Product",
    icon: "home",
    route: { name: "home" },
  },
  {
    title: "Category",
    icon: "category",
    route: { name: "category" },
  },
  {
    title: "About",
    icon: "person",
    route: { name: "about" },
  },
  {
    title: "Contact",
    icon: "call",
    route: { name: "home2" },
  },
  {
    title: "Twitter",
    icon: "telegram",
    route: { name: "home3" },
  },
  {
    title: "Facebook",
    icon: "facebook",
    route: { name: "home4" },
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss">
.layout {
  background: $main-section-color;

  .toolbar {
    height: 70px;
    background: $white;
    color: $dark;

  }
  .aside {
    background: $white;
    color: #fff;

    .logo-container {
      margin: 0.5rem 0;
    }
  }
}
.title{
  font-size: 30px;
}
</style>
