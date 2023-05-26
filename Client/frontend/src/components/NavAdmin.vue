<template >
    <nav class="navbar  navbar-light bg-light">
      <router-link to="/Admin/Home" class="navbar-brand"><img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/678/4286283678_e7c84d54-1661-495b-8a7f-d8ea374c0aa7.png?cb=1607875975"  alt="Logo"></router-link>


     <span >
        <ul>

        <li class="mr-4"><img class="mt-2" src="https://www.vhv.rs/dpng/d/426-4262997_notification-bell-icon-png-png-download-transparent-notification.png" width="35px"></li>
        <li class="mr-1 "><img src="https://logodix.com/logo/1707088.png" width="50px"></li>
        <li class="mt-2"><h4>Hello {{user.name}}</h4></li>

      </ul>
    </span>

</nav>
</template>

<script>
  import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Nav",


  data() {
     return {
      user: {}

    };
  },
   methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/Signin");
    }
  },
  created() {
    this.getUserDetails();
  }




};
</script>

<style lang="css" scoped>

 li{
    display: inline;
    float:left;
}
 html,
  body,
  header,
  .view {
    height: 100%;
  }

  @media (max-width: 740px) {
    html,
    body,
    header,
    .view {
      height: 100vh;
    }
  }

  .top-nav-collapse {
    background-color: #78909c !important;
  }

  .navbar:not(.top-nav-collapse) {
    background: transparent !important;
  }

  @media (max-width: 991px) {
   .navbar:not(.top-nav-collapse) {
    background: #78909c !important;
   }
  }

  h1 {
    letter-spacing: 8px;
  }

  h5 {
    letter-spacing: 3px;
  }

  .hr-light {
    border-top: 3px solid #fff;
    width: 80px;
  }





/********NAVBAR ***************/
.navbar-brand {
  text-transform: uppercase;
  letter-spacing: 0.3em;
}

.user{
  margin-top: 90px;
  padding-top: 20px;
}

.navbar-toggler span i {
  font-size: 30px;
}

.probootstrap_navbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #868e96;
  background-color: #fff; }

@media (max-width: 991px) {
  .probootstrap_navbar {
    background: rgba(0, 0, 0, 0.6);
  }
}
.probootstrap_navbar .nav-item .nav-link {
  padding: 1.6em 1em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 400;
}
@media (max-width: 991px) {
  .probootstrap_navbar .nav-item .nav-link {
    padding: 0.5em 0;
  }
}
.probootstrap_navbar .nav-item .nav-link.active {
  color: #fff;
}
.probootstrap_navbar.scrolled {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  margin-top: -130px;
}
.probootstrap_navbar.scrolled .nav-item .nav-link {
  padding: 0.5em 1em;
}
.probootstrap_navbar.scrolled.awake {
  margin-top: 0px;
  -webkit-transition: 0.3s all ease-out;
  -o-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
}
.probootstrap_navbar.scrolled.sleep {
  -webkit-transition: 0.3s all ease-out;
  -o-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
}
.bg-foobar{
  background-color: #868e96;
}


</style>
