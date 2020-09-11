import Vue from "vue";
import VueRouter from "vue-router";

import addCategory from '../views/category/create'
import category from '../views/category/list'
import editCategory from '../views/category/edit'
import Home from "../views/Home.vue";

Vue.use(VueRouter);
//todo delete this when start authentication
// const ifAuthenticated =true;
const routes = [

  //  // Category Routes
  { path: '/add-category', component: addCategory, name:'add-category'},
  { path: '/categories', component: category, name:'categories'},
  { path: '/edit-category/:id', component: editCategory, name:'edit-category'},

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
