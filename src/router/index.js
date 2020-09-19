import Vue from "vue";
import VueRouter from "vue-router";

import addCategory from '../views/category/create'
import category from '../views/category/list'
import editCategory from '../views/category/edit'


// import addEmployee from '../views/employee/create'
// import employees from '../views/employee/list'
// import editEmployee from '../views/employee/edit'

import addSupplier from '../views/supplier/create'
import suppliers from '../views/supplier/list'
import editSupplier from '../views/supplier/edit'

import addProduct from '../views/product/create'
import product from '../views/product/list'
import editProduct from '../views/product/edit'

// import addExpense from '../views/expense/create'
// import expense from '../views/expense/list'
// import editExpense from '../views/expense/edit'

import addCustomer from '../views/customer/create'
import customer from '../views/customer/list'
import editCustomer from '../views/customer/edit'

// import salary from '../views/salary/all_employee.vue'
// import paySalary from '../views/salary/create.vue'
// import allSalary from '../views/salary/list.vue'
// import viewSalary from '../views/salary/view.vue'
// import editSalary from '../views/salary/edit.vue'


// import stock from '../views/stock/list'
// import editStock from '../views/stock/edit'

// import pos from '../views/pos/pos'

// import order from '../views/order/order'
// import viewOrder from '../views/order/view'
// import searchOrder from '../views/order/search'




import Home from "../views/Home.vue";





Vue.use(VueRouter);
//todo delete this when start authentication
// const ifAuthenticated =true;
const routes = [

  //  // Category Routes
  { path: '/add-category', component: addCategory, name:'add-category'},
  { path: '/categories', component: category, name:'categories'},
  { path: '/edit-category/:id', component: editCategory, name:'edit-category'},

//     { path: '/add-category', component: addCategory, name:'add-category',beforeEnter:ifAuthenticated},
//     { path: '/categories', component: category, name:'categories',beforeEnter:ifAuthenticated},
//     { path: '/edit-category/:id', component: editCategory, name:'edit-category',beforeEnter:ifAuthenticated},



//     // Employee Routes
//     {path:'/add-employee',component:addEmployee,name:'add-employee',beforeEnter:ifAuthenticated},
//     {path:'/employees',component:employees,name:'employees',beforeEnter:ifAuthenticated},
//     { path: '/edit-employee/:id', component: editEmployee, name:'edit-employee',beforeEnter:ifAuthenticated},

    // Supplier Routes
    // { path: '/add-supplier', component: addSupplier, name:'add-supplier',beforeEnter:ifAuthenticated},
    // { path: '/suppliers', component: suppliers, name:'suppliers',beforeEnter:ifAuthenticated},
    // { path: '/edit-supplier/:id', component: editSupplier, name:'edit-supplier',beforeEnter:ifAuthenticated},

    { path: '/add-supplier', component: addSupplier, name:'add-supplier'},
    { path: '/suppliers', component: suppliers, name:'suppliers'},
    { path: '/edit-supplier/:id', component: editSupplier, name:'edit-supplier'},


    // Product Routes
    { path: '/add-product', component: addProduct, name:'add-product'},
    { path: '/products', component: product, name:'products'},
    { path: '/edit-product/:id', component: editProduct, name:'edit-product'},

    // // Expense Routes
    // { path: '/add-expense', component: addExpense, name:'add-expense',beforeEnter:ifAuthenticated},
    // { path: '/expenses', component: expense, name:'expenses',beforeEnter:ifAuthenticated},
    // { path: '/edit-expense/:id', component: editExpense, name:'edit-expense',beforeEnter:ifAuthenticated},

    // // Customer Routes
   { path: '/add-customer', component: addCustomer, name:'add-customer'},
    { path: '/customers', component: customer, name:'customers'},
    { path: '/edit-customer/:id', component: editCustomer, name:'edit-customer'},


    // { path: '/add-customer', component: addCustomer, name:'add-customer',beforeEnter:ifAuthenticated},
    // { path: '/customers', component: customer, name:'customers',beforeEnter:ifAuthenticated},
    // { path: '/edit-customer/:id', component: editCustomer, name:'edit-customer',beforeEnter:ifAuthenticated},


    // // Salary Routes
    // { path: '/given-salary', component: salary, name:'given-salary',beforeEnter:ifAuthenticated},
    // { path: '/pay-salary/:id', component: paySalary, name:'pay-salary',beforeEnter:ifAuthenticated},
    // { path: '/salaries', component: allSalary, name:'salaries',beforeEnter:ifAuthenticated},
    // { path: '/view-salary/:id', component: viewSalary, name:'view-salary',beforeEnter:ifAuthenticated},
    // { path: '/edit-salary/:id', component: editSalary, name:'edit-salary',beforeEnter:ifAuthenticated},

    // // Stock Routes
    // { path: '/stock', component: stock, name:'stock',beforeEnter:ifAuthenticated},
    // { path: '/edit-stock/:id', component: editStock, name:'edit-stock',beforeEnter:ifAuthenticated},


    // // POS Routes
    // { path: '/pos', component: pos, name:'pos',beforeEnter:ifAuthenticated},

    // // Order Routes
    // { path: '/orders', component: order, name:'orders',beforeEnter:ifAuthenticated},
    // { path: '/view-order/:id', component: viewOrder, name:'view-order',beforeEnter:ifAuthenticated},
    // { path: '/searchorder', component: searchOrder, name:'search-order',beforeEnter:ifAuthenticated},

    //Not found
    // { path: '*',  redirect: { name: 'login' } },

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
