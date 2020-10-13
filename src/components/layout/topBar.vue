<template>
  <nav
    class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top"
  >
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <!-- <img class="img-profile rounded-circle" src="{{asset('backend/img/boy.png')}}" style="max-width: 60px"> -->
          <img
            class="img-profile rounded-circle"
            :src="this.$store.getters.userImage"
            style="max-width: 60px"
          />
      
      <span>{{this.$store.getters.username}} ({{this.$store.getters.userType}})</span>
              
        </a>
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            <span @click="logout">Logout</span>
          </a>
       
       

        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: window.baseUrl
    };
  },methods: {
    logout(){
      this.$store.commit('logout');
    }
  },
};
</script>






































