<template>
  <div  style="padding-left:440px ; padding-right: 440px; padding-top: 100px;" >


  <div  >
    <div class="col">


      <!-- Section: Block Content -->
      <section>

        <!-- Card -->
        <div class="card testimonial-card">

            <!-- Background color -->
            <div class="card-up warning-color-dark p-3 white-text">
              <p style="    font-family: 'Comfortaa';
    font-size: 2em;
    color: aquamarine;
    text-shadow: -1px 1px 2px black;
" class="font-weight-normal mb-0">{{user.name}}</p>
              <p class="small mb-0" style="font-family: 'Poppins';
    font-size: 1.5em;">{{user.Role}}</p>
            </div>

            <!-- Avatar -->
            <div>
            <img style="width: 150px;
    height: 150px;
    border-radius: 50%;" :src="user.files[0]" alt=""><!--  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg" class="rounded-circle" alt="woman avatar">-->
            </div>

            <!-- Content -->
            <div class="card-body px-3 py-4">
              <div class="row">
                <div class="col-3 text-center border-left border-right">
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="font-weight-bold mb-0">150</p>
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="small text-uppercase mb-0">Visitors</p>
                </div>
                <div class="col-3 text-center">
                  <p style="font-size: 1em;
    font-family: 'Josefin Sans';" class="font-weight-bold mb-0">30</p>
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="small text-uppercase mb-0">Client</p>
                </div>
                <div class="col-3 text-center border-left border-right">
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="font-weight-bold mb-0">30</p>
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="small text-uppercase mb-0">Guides</p>
                </div>
                <div class="col-3 text-center">
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="font-weight-bold mb-0">27</p>
                  <p style="    font-size: 1em;
    font-family: 'Josefin Sans';" class="small text-uppercase mb-0">packages</p>
                </div>
              </div>
            </div>

          </div>
          <!-- Card -->

      </section>
      <!-- Section: Block Content -->



  </div>
</div>





  </div>

</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: "Home",
  components: {},
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
    console.log(this.user)
  }


};



</script>
<style >
.cont{
    margin-bottom: 0px;
    padding-bottom: 0px;
    height: 1000px;
}
.row{
width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
