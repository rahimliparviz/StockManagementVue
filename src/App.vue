<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
   <div id="app">
    <div id="wrapper">
      <!-- Sidebar -->
      <sidebar></sidebar>
      <!-- <sidebar v-if="$route.path === '/login' || $route.path === '/register' || $route.path === '/forget' ? false : true "></sidebar> -->
      <!-- Sidebar -->
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- TopBar -->
          <topbar></topbar>
              <!-- <topbar v-if="$route.path === '/login' || $route.path === '/register' || $route.path === '/forget' ? false : true "></topbar> -->
          <!-- Topbar -->

          <!-- Container Fluid-->
          <div class="container-fluid" id="container-wrapper">
          <router-view></router-view>
          </div>
          <!---Container Fluid-->
        </div>

      </div>
    </div>
   </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
