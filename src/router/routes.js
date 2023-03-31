const routes = [{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      name: "home",
      component: () => import("pages/IndexPage.vue"),
    }, ],
  },
  {
    path: "/category",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      name: "category",
      component: () => import("pages/CategoryPage.vue"),
    }, ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      name: "about",
      component: () => import("pages/AboutPage.vue")
    }]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
