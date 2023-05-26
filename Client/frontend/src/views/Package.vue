<template>
    <div>
        <div class="container  p-5">

  <!--Section: Content-->
  <section class="dark-grey-text text-center">
    <div id="loader">
  <span class="ball"></span>
  <span class="ball"></span>
  <span class="ball"></span>
</div>
    <h3 class="font-weight-bold pt-5 pb-2">Book your Package Now!</h3>

    <div class="row mx-3">
      <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/drawkit-drawing-man-colour.svg" class="img-fluid" alt="smaple image">
        </div>

      </div>
     <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/drawkit-phone-conversation-colour.svg" class="img-fluid" alt="smaple image">
        </div>

      </div>
      <div class="col-md-4 px-4 mb-4">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg" class="img-fluid" alt="smaple image">
        </div>

      </div>
    </div>

  </section>
  <!--Section: Content-->


</div>



        <div>
<br>
<br>
<br><br>
  <section class="dark-grey-text text-center">

            <div class="row my-5 justify-content-center " >
            <!-- Grid column -->
            <div  v-for="(p,i) in packages"  :key="p._id" class="col-lg-5 col-md-12 mb-4">

            <!-- Card -->
            <div class="card card-image this"  style="height: 400px;" v-bind:style="{ backgroundImage: 'url(' + p.image + ')' }" @click="SeeDetails(p._id)">


            <!-- Pricing card -->
            <div class="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded" >

                <!-- Content -->
                <div class="card-body" >
                <h5>{{p.name}}</h5>

              <!-- Price -->
              <div class="price pt-0">
                <h2 class="number mb-0">{{p.Duration}}Day(s)</h2>
              </div>

              <div class="striped mb-0 mt-4" style="font-weight: bold;white-space: pre-wrap;">
               {{Namearray[i]}}
              </div>
               <div class="button_cont btn btn-rounded btn-amber" align="center" style="text-decoration=none;">
              <router-link v-if="user._id" :to="{name:'ChooseGuides',params: { id: p._id },query:{State:p.State}}" tag="button" class="example_a btn btn-rounded btn-amber "  style="margin-top: 50px; background:#eca0a0;"><span><i class="fa fa-shopping-cart" aria-hidden="true"></i>
              Book now</span></router-link>
             <button v-if="!user._id" class="example_a"  style="margin-top: 50px;" @click="Signup"><span>Book now</span></button>
            </div>

            </div>
            <!-- Content -->

          </div>
          <!-- Pricing card -->

        </div>
        <!-- Card -->

      </div>
      <!-- Grid column -->

    </div>
  </section>
        </div>

    </div>
</template>

<script>
import axios from "axios";
 import VueJwtDecode from "vue-jwt-decode";


export default {

  name: 'CustomePackage',

  data() {
    return {
        packages:[],
         user: {},
        Namearray:[],
         i:0,
    };
  },
  methods:{
     getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },

  Signup(){
    this.$router.push('/Signin')
  },
  SeeDetails(pid){
    if (localStorage.jwt)
    {
      localStorage.setItem('id',pid)
      this.$router.push('/ShowPackage')
    }
  }
  },
  created(){
    if (localStorage.jwt)
    {
      this.getUserDetails();
    }
    let apiURL = 'http://localhost:3005/api/Packages';
    axios.get(apiURL).then(res => {
            this.packages=res.data
         for (var j=0;j<=this.packages.length-1;j++){
          var word=""
          for(var l=0;l<=this.packages[j].Places.length-1;l++)
          {
           word+=this.packages[j].Places[l].Time + "-" + this.packages[j].Places[l].name
           word+='\n'
          }
          for(var m=0;m<=this.packages[j].Activity.length-1;m++){
            word+=this.packages[j].Activity[m].Time + "-" + this.packages[j].Activity[m].name
            word+='\n'
          }
          this.Namearray.push(word)
      }
       console.log(this.Namearray)

        }).catch(error => {
    console.log(error)
   });
  },
};





</script>




<style lang="css" scoped>
.this:hover{
   transform: scale(1.1);
   cursor: pointer;
}


</style>
