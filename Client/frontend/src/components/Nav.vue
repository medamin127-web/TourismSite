<template >

<div >

  <b-navbar class="navbar navbar-expand-lg navbar-dark probootstrap_navbar bg-foobar" toggleable="lg" type="dark"  style="height: 5rem;"  >
<div>
  <!-- Image and text -->
  <b-navbar  type="light">
    <b-navbar-brand href="/">
      <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/256/4259475256_422dd31f-f7c4-434b-831f-12068ae3a73a.png?cb=1607434085" class="d-inline-block align-top" alt="Kitten" style="width: 70px;height: 60px;cursor: pointer;margin-top: 10px;">

    </b-navbar-brand>
  </b-navbar>
</div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

  <b-navbar-nav style="margin: auto;">
        <b-nav-item><router-link to="/"><h3 style="font-size:0.90rem;">Home</h3><span class="sr-only">(current)</span></router-link></b-nav-item>
        <b-nav-item ><router-link to="/Package"><h3 style="font-size:0.90rem;">Packages</h3></router-link></b-nav-item>
         <b-nav-item ><router-link to="/Articles"><h3 style="font-size:0.90rem;">Articles</h3></router-link></b-nav-item>
        <b-nav-item ><router-link to="/Guides"><h3 style="font-size:0.90rem;">Tourist Guides</h3></router-link></b-nav-item>
        <b-nav-item ><router-link to="/States"><h3 style="font-size:0.90rem;">States</h3></router-link></b-nav-item>
        <b-nav-item ><router-link to="/contact"><h3 style="font-size:0.90rem;">Contact</h3></router-link></b-nav-item>
        <b-nav-item ><router-link to="/About"><h3 style="font-size:0.90rem;">About</h3></router-link></b-nav-item>
      </b-navbar-nav>
        <b-nav-item ><router-link to="/Signin" tag="button" v-if="!user._id" id="signup" class="btn_sign-up" ><i class="fas fa-sign-in-alt"></i>  Sign in</router-link></b-nav-item>
      </b-navbar-nav>
    <b-navbar-nav v-if="user._id && user.Role=='Client'">
      <img class="img" :src="user.files[0]" style="width: 60px;height: 60px;border-radius: 50%;cursor: pointer;margin-top: 10px;">
        <b-nav-item-dropdown id="my-nav-dropdown"
      toggle-class="nav-link-custom"
      right >

          <b-dropdown-item ><router-link  to="/Editprofile" ><h5><i class="fas fa-user-edit"></i>  Edit Profile</h5></router-link></b-dropdown-item>
          <b-dropdown-item><router-link  to="/Cart"><h5><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Cart</h5></router-link></b-dropdown-item>
          <b-dropdown-item><a @click="logUserOut"><h5><i class="fas fa-sign-out-alt"></i>  Log Out</h5></a></b-dropdown-item>

        </b-nav-item-dropdown>

    </b-navbar-nav>
    </b-collapse>


  </b-navbar>


</div>
  </template>


  <script>

  import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Nav",

/*<div >
  <ul style="float:right;text-align: center;padding-top: 10px;">
  <li ><h5 style="margin-bottom:15px">Edit Account</h5></li>
  <li><router-link  to="/Cart"><h5 style="margin-bottom:15px">Cart</h5></router-link></li>
  <li><a @click="logUserOut" ><h5 style="margin-bottom:15px">Log Out</h5></a></li>
</ul>

<div class="dropdown-item">  <a class="nav-link"  @click="logUserOut"> Logout</a></div>
<div class="dropdown-item"> <router-link to="/Editprofile">Edit Profile</router-link ></div></div>*/

  data() {
     return {
      user: {},
      face:"life"
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
    console.log(this.user)
  }
};

</script>

<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.navbar-dark .navbar-nav .nav-link {
  color: #555;
}


ul.nav.navbar-nav .dropdown.open .dropdown-toggle{
  color: red;
}

a nav-link{
  color: #555;
}
a:hover {
  background-color: #555;
}

.ml-auto h3:hover{
}

a[data-v-65af85a3]:hover {
    background-color: inherit;

  }
li {
  display: inline;
}
li a {
    text-decoration: none;
}
h5{
  font-size: 0.99rem;
  color:black;
}

.dropdown-toggle::after {
border-top: 0.4em solid;
}
.btn_sign-up {
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  /*   width: 100%; */
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;
  height: 40px;
}

.btn_sign-up:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgb(255, 255, 255);
}
</style>
