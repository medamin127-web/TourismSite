<template>
  <div>


    <div id="video-carousel-example2" class="carousel slide carousel-fade " data-ride="carousel">

      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active">

          <div class="view " >
            <video class="video-fluid" id="videobg" autoplay loop muted style="height: 760px; ">
              <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
            </video>
          </div>


        <div class="carousel-caption" >


                  <h2 style="font-family: 'Josefin Sans', sans-serif;font-size:55px;text-shadow:1px 1px black;color:white">Explore Tunisia </h2>

<div class="wrapper d-flex">
  <div class="advantages">
    <div class="h1 d-flex">Jawwy is for
      <div class="info-color badge text-white px-3 py-2 d-inline-block font-weight-light">
        <ul class="list-unstyled">
          <li>Discovering</li>
          <li>Exploring</li>
          <li>Booking</li>
        </ul>
      </div>
    </div>
  </div>
</div>
            <div class="s003">

               <div class="select" style="width:136px;">
                  <select name="slct" id="slct" style="font-size: 20px;font-family: 'Roboto', sans-serif;" place="Category" v-model="Category" @change="findbycategory">
                    <option  value="" selected disabled>Category</option>
                    <option value="State" >State</option>
                    <option value="Cities" >Cities</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Museum">Museum</option>
                    <option value="Monument">Monument</option>
                    <option value="Beach">Beach</option>
                    <option value="Amusement Park">Amusement Park</option>
                    <option value="Photography location">Photography location</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
            <form v-on:submit.prevent>
              <div class="inner-form  btn btn-rounded btn-amber" id ="this7">
                <div class="input-field second-wrap" >
                  <ejs-autocomplete ref='instance' id="search" :dataSource='Categories' v-model="name"  :fields='fields' placeholder="Search for States,Restaurants,Cafes,....."  ></ejs-autocomplete>
                </div>

                <div class="input-field third-wrap" >
                  <button class="btn-search btn btn-rounded btn-amber" @click="findbyname">
                  <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>




  <section class="probootstrap_section" id="section-feature-testimonial">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-12 text-center mb-5 probootstrap-animate">
          <h2 class="display-4 border-bottom probootstrap-section-heading" style="font-family: 'Josefin Sans';
    margin-top: 15px;">Why we Love Tunisia</h2>
          <blockquote class="">
            <p class="lead mb-4"><em>Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with
                the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                your mouth.</em></p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <section class="probootstrap_section" id="">
    <div class="container">
      <div class="row text-center mb-5 probootstrap-animate">
        <div class="col-md-12">
          <h2 class="display-4 border-bottom probootstrap-section-heading" style="font-family: 'Josefin Sans';
    margin-top: 15px;">Top Places Around Tunisia</h2>
        </div>
      </div>
      <div class="row">


                <figure class="photo red">
  <img src="https://img.ev.mu/images/villes/50630/960x640.jpg" alt="sample33" />
  <figcaption>
    <h2><span>Hammamet</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>






<figure class="photo"><img src="https://www.tunisiapromo.com/images/32258.jpg" alt="sample35" />
  <figcaption>
    <h2> <span> Kantaoui</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>



      </div>

<div class="row">

<figure class="photo blue"><img src="https://images.rove.me/w_1920,q_85/ximf5izbvbsjkrwi0hqc/tunisia-the-waterfall-of-tamerza.jpg" alt="sample34" />
  <figcaption>
    <h2>  <span> Tamerza</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>






<figure class="photo"><img src="https://i.pinimg.com/originals/b3/90/f2/b390f23b702b3d06dd0cb76a241c27b7.jpg" alt="sample35" />
  <figcaption>
    <h2> <span> Aïn Drahem</span></h2>
  </figcaption>
  <a href="#"></a>
</figure>






      </div>
    </div>
  </section>





  <section class="probootstrap_section">
    <div class="container" style="padding-top: 50px;padding-bottom:50px">
      <div class="row text-center mb-5 probootstrap-animate">
        <div class="col-md-12">
          <h2 class="display-4 border-bottom probootstrap-section-heading" style="font-family: 'Josefin Sans';
    margin-top: 15px;">Discover With Us</h2>
        </div>
      </div>
      <div class="row" id="rows" style="padding: 20px;">
        <div class="col-2 images" >
          <img src="https://www.flaticon.com/svg/static/icons/svg/251/251078.svg" style="cursor:pointer" @click="Gotothatplace('Cafe')">
        </div>
        <div class="col-2">
          <img src="https://www.flaticon.com/svg/static/icons/svg/685/685352.svg" style="cursor:pointer" @click="Gotothatplace('Restaurant')" >
        </div>
        <dir class="col-2" style="bottom: 15px;">
          <img src="https://www.flaticon.com/svg/static/icons/svg/1825/1825814.svg" style="cursor:pointer" @click="Gotothatplace('Museum')">
        </dir>
        <div class="col-2">
          <router-link to="/Articles"  style="text-decoration:none;"><img src="https://www.flaticon.com/svg/static/icons/svg/891/891911.svg"></router-link>
        </div>
        <div class="col-2">
          <router-link to="/Articles"  style="text-decoration:none;"><img src="https://www.flaticon.com/svg/static/icons/svg/691/691328.svg"></router-link>
        </div>
        <div class="col-2">
          <router-link to="/Articles"  style="text-decoration:none;"><img src="https://www.flaticon.com/svg/static/icons/svg/310/310245.svg"></router-link>
        </div>
      </div>

    </div>
  </section>
  <!-- END section -->




<div class="container z-depth-1 my-5 py-5 px-4 px-lg-0">
  <!-- Section -->
  <section>
    <h3 class="font-weight-bold text-center dark-grey-text pb-2" style="font-family: 'Josefin Sans';
    margin-top: 15px;font-size: 3.5rem;">The Steps of the Journey</h3>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-5"> way we work today.</p>

    <div class="row">
      <div class="col-lg-8 mx-auto">

        <ol class="timeline">
          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Creat your account</h5>
            <p class="grey-text font-small"><time datetime="2017-02-08">08 Feb 2017</time></p>
                        <p><img class="img-fluid z-depth-1-half rounded" src="https://t3.ftcdn.net/jpg/02/55/55/86/240_F_255558623_8Q0DxNjOmrtCaNjVTuAI21SDscZpkeHi.jpg" width="200px" alt="..."></p>

            <p class="text-muted">Join us.
            </p>
          </li>

          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Discover cities with US </h5>
            <p class="grey-text font-small"><time datetime="2017-08-17">17 Aug 2017</time></p>
            <p><img class="img-fluid z-depth-1-half rounded" src="https://as1.ftcdn.net/jpg/00/64/91/90/500_F_64919000_zSReEzS8z2OD5RBc2UcFhC6dIu8u5o2v.jpg" width="180px" alt="..."></p>
            <p class="text-muted">Discover and learn about cities Like Sousse, Jandouba, Nabeul, Bezerte And Tozeur.</p>
          </li>
          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">Creat your Package</h5>
            <p class="grey-text font-small"><time datetime="2018-03-26">26 Mar 2019</time></p>
                        <p><img class="img-fluid z-depth-1-half rounded" src="https://t4.ftcdn.net/jpg/03/70/80/31/240_F_370803124_uJPHcgf4mB2vGfM8dOijeOQVZ12fWPkH.jpg" width="200px" alt="..."></p>

            <p class="text-muted">Check out our special packages or make your customize package
.
              </p>
          </li>

          <li class="timeline-element">
            <h5 class="font-weight-bold dark-grey-text mb-3">book your Package</h5>
            <p class="grey-text font-small"><time datetime="2018-04-14">14 Apr 2019</time></p>
                                    <p><img class="img-fluid z-depth-1-half rounded" src="https://t4.ftcdn.net/jpg/01/98/17/25/240_F_198172584_D3lf498dm2k0VuF2Ux8Un61uNWKfmH3q.jpg
" width="190px" alt="..."></p>

            <p class="text-muted">Choose your guide and book your package for amazing journey with us
.
             </p>
          </li>
        </ol>

      </div>
    </div>

  </section>
  <!-- Section -->

</div>



  <section class="probootstrap_section">
    <div class="container" style="padding-top: 50px;padding-bottom:50px">
      <div class="row text-center mb-5 probootstrap-animate">
        <div class="col-md-12">
          <h2 class="display-4 border-bottom probootstrap-section-heading" style="font-family: 'Josefin Sans';
    margin-top: 15px;">States</h2>
        </div>
      </div>

      <div class="row rows "  style="padding: 20px;">
        <div class="col-2"  style="margin: auto;">
          <img src="../assets/Sousse.png" @click="Gotothatcity('Sousse')">
          <h3>Sousse</h3>


        </div>
        <div class="col-2" style="margin: auto;">
          <img src="../assets/Nabeul.png" @click="Gotothatcity('Nabeul')">
          <h3>Nabeul</h3>
        </div>
          <div class="col-2"  style="margin: auto;">
          <img src="../assets/Bizerte.png"  @click="Gotothatcity('Bizerte')" >
          <h3>Bizerte</h3>
        </div>
        <div class="col-2"  style="margin: auto;">
          <img src="../assets/Jendouba.png" @click="Gotothatcity('Jandouba')">
          <h3>Jandouba</h3>
        </div>
        <div class="col-2"  style="margin: auto;">
          <img src="../assets/Tozeur.png" @click="Gotothatcity('Tozeur')">
          <h3>Tozeur</h3>
        </div>
      </div>
    </div>
  </section>

<div class="container my-5">
  <!--Section: Content-->
  <section class="text-center">

    <!-- Section heading -->
    <router-link  style="text-decoration: none; color: inherit;" to="/Package" ><h3  class="font-weight-bold dark-grey-text pb-2 mb-4" style="font-family: 'Josefin Sans';
    margin-top: 15px;font-size: 3.5rem;"> Special Offers!
</h3></router-link>
    <!-- Section description -->
    <p class="text-muted w-responsive mx-auto mb-5">Book Now one of our Special Packages ready to Go.  </p>

    <!-- Grid row -->
    <div class="row" >

      <!-- Grid column -->
      <div  v-for="(p,i) in packages"  :key="p._id" class="col-lg-4 col-md-12 mb-4">

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
    <!-- Grid row -->
    <div class="col-12 " style="margin-top: 20px;padding-bottom: 50px; ">

          <router-link to="/Package" tag="button" id="router">

    <svg class="icon-arrow before" >
        <use xlink:href="#arrow"></use>
    </svg>
    <span class="label">See More</span>
    <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
    </svg>
</router-link>

<svg style="display: none;">
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>
    </div>
  </section>
  <!--Section: Content-->
</div>















<!-- Section: Team v.3 -->
<section class="team-section my-5">

  <!-- Section heading -->
  <h3 class="h1-responsive font-weight-bold text-center my-5">Our Amazing Guides</h3>
  <!-- Section description -->


  <!-- Grid row-->
  <div class="row text-center ">

    <!-- Grid column -->
    <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between "   v-for="Guide in eightguides" :key="Guide._id">
      <div class="avatar mb-md-0 mb-4 mx-4" style="width: 300px;height: 300px;">
        <img :src="Guide.files[0]"  class="rounded z-depth-10" alt="Sample avatar"  >
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3"> <button class="btn btn-flat text-primary p-0 mx-0" @click="GuideDetails(Guide._id)"><h6 class="font-weight-bold pt-2" style="margin-top: 40px;margin-top: 40px;
    font-family: 'Yusei Magic';
    font-size: 1.5em;
    color: #23795d;">{{Guide.name}}</h6></button></h4>
        <h6 class="font-weight-bold grey-text mb-3">{{Guide.email}} <br>{{Guide.country}}</h6>
        <p class="grey-text"> "consectetur adipisicing elit. Quod eos id officiis hic
          tenetur".</p>
        <!-- Facebook-->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f"> </i>
        </a>
        <!-- Twitter -->
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter"> </i>
        </a>
        <!--Dribbble -->
        <a class="p-2 fa-lg dribbble-ic">
          <i class="fab fa-dribbble"> </i>
        </a>
      </div>
    </div>
    <!-- Grid column -->

      <div class="col-12" style="margin-top: 20px;padding-bottom: 50px;">

          <router-link to="/Guides" tag="button" id="router">

    <svg class="icon-arrow before">
        <use xlink:href="#arrow"></use>
    </svg>
    <span class="label">See More</span>
    <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
    </svg>
</router-link>

<svg style="display: none;">
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>
    </div>
  </div>
  <!-- Grid row-->

</section>
<!-- Section: Team v.3 -->






<div class="container mt-5">


  <!--Section: Content-->
  <section class="team-section text-center dark-grey-text">

    <!-- Section heading -->
    <h3 class="font-weight-bold mb-4 pb-2" style="font-family: 'Josefin Sans';
    margin-top: 15px;font-size: 3.5rem;">Testimonials</h3>
    <!-- Section description -->
    <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
      eum porro a pariatur veniam.</p>

    <!--Grid row-->
    <div class="row text-center">

      <!--Grid column-->
      <div class="col-md-4 mb-4">

        <div class="testimonial">
          <!--Avatar-->
          <div class="avatar mx-auto" style="width:170px;height:170px">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" >
          </div>
          <!--Content-->
          <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
          <h6 class="font-weight-bold blue-text my-3">Paris</h6>
          <p class="font-weight-normal dark-grey-text">
            <i class="fas fa-quote-left pr-2"></i>Thank you for making my trip to Tunisia the best ! What a great site<i class="fas fa-quote-right pl-2"></i></p>
          <!--Review-->
          <div class="orange-text">
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star-half-alt"> </i>
          </div>
        </div>

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-4 mb-4">

        <div class="testimonial">
          <!--Avatar-->
          <div class="avatar mx-auto" style="width:170px;height:170px">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid">
          </div>
          <!--Content-->
          <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Moscow</h6>
          <p class="font-weight-normal dark-grey-text">
            <i class="fas fa-quote-left pr-2"></i>I had a blast in Tunisia.I went to Sousse ,Tozeur and Bizerte and I loved it!<i class="fas fa-quote-right pl-2"></i></p>
          <!--Review-->
          <div class="orange-text">
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
          </div>
        </div>

      </div>

      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-4 mb-4">

        <div class="testimonial">
          <!--Avatar-->
          <div class="avatar mx-auto" style="width:170px;height:170px">
            <img style="max-width=200px" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid">
          </div>
          <!--Content-->
          <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 class="font-weight-bold blue-text my-3">Rome</h6>
          <p class="font-weight-normal dark-grey-text">
            <i class="fas fa-quote-left pr-2"></i>Tunisia was Great ! Thanks to this amazing site and the help of the Tourist Guide I had alot of good times<i class="fas fa-quote-right pl-2"></i></p>
          <!--Review-->
          <div class="orange-text">
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="far fa-star"> </i>
          </div>
        </div>

      </div>
      <!--Grid column-->

    </div>
    <!--Grid row-->

  </section>
  <!--Section: Content-->


</div>

<!-- END section -->

</div>


</div>
</template>
<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name : 'Home',

 data() {
    return {
        packages:[],
        Namearray:[],
        Categories:[],
        i:0,
        Category:"",
        name:"",
        States:["Sousse","Tozeur","Bizerte","Nabeul","Jandouba"],
        Cities:["Degache","Medina","Tameghza","Nefta","Tozeur","Hergla","Kantaoui","Hammam Sousse","Sahloul","Takrouna","Sousse Centre","Sidi Bou Ali","Aïn Draham","Tabarka","Ghardimaou",
        "Fernana","Beni M'Tir","Balta-Bou Aouane","Jandouba","Ras Jabel","Ghar El Melh","Cap Zebib","Bizerte","Cap Serrat","Cap Angela","Hammamet",
        "Kelibia","Korbous","El Haouaria","Korba","Nabeul"],
        Place:[],
        user:{},
        guides:[],
        Count:0,
        Verif:false

    };
  },
   created(){
    let URL500 = "http://localhost:3005/api/GetSiteInfo"
    axios.get(URL500).then(res => {
        this.Count = Number(res.data[0].Visitors)

        let URL600 = "http://localhost:3005/api/UpdateSiteInfo"
        axios.patch(URL600,{Visitor:this.Count}).then(res => {
            console.log(res.data)

        })
    })




    if (localStorage.jwt)
    {
      this.getUserDetails();
    }
    localStorage.removeItem('Name')
    localStorage.removeItem('CityName')
    let apiURL = 'http://localhost:3005/api/Packages';
    axios.get(apiURL).then(res => {

         for (var i=0;i<3;i++){
        this.packages.push(res.data[i])
      }

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

        }).catch(error => {
    console.log(error)
   });
             let tre = "http://localhost:3005/api/place";
             axios.get(tre).then((res) => {
              this.Categories=[]
              for (var i=0;i<=res.data.length-1;i++)
            {
              this.Categories.push(res.data[i].name)
            }
            })
        .catch(error => {
          console.log(error)
        });
        let URL150="http://localhost:8088/user/UserGuides";
         axios.get(URL150).then((res) => {
          this.guides = res.data
            })
        .catch(error => {
          console.log(error)
        });
  },
  computed :{
    eightguides(){
      let eight = []
      for (var i = 0; i <= 7; i++) {
           eight.push(this.guides[i])

          };
            return eight
          }

  },
  watch: {
  input: function () {
     localStorage.setItem('YourItem', "life")
  }
},
   methods:{
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    GuideDetails(id){
      localStorage.setItem('GuideId', id)
      this.$router.push("/Guide");
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
  },
          findbycategory(){

            if (this.Category!="State" && this.Category!="Cities")
            {
             let tre = "http://localhost:3005/api/Findplace";
             axios.post(tre,{Category:this.Category}).then((res) => {
            //this.Places = res.data;
            this.Categories=[]
            for (var i=0;i<=res.data.length-1;i++)
            {
              this.Categories.push(res.data[i].name)
            }
            console.log(this.Category)
            console.log(this.Categories)

        })
        .catch(error => {
          console.log(error)
        });
        }
        else  {
          if (this.Category == "State")
          {
            this.Categories=[]
            this.Categories=this.States
          }
           if (this.Category == "Cities")
          {
            this.Categories=[]
            this.Categories=this.Cities
          }
        }


        },

          findbyname(){



            if (this.Category=="State" && !this.name)
            {
              this.$router.push("/States");
            }

            else{

            if(this.Category || this.name){

            let tre = "http://localhost:3005/api/Findplace";
             axios.post(tre,{name:this.name}).then((res) => {
              this.Place = res.data
            //this.Places = res.data;

            if (this.Category=="State")
            {
              localStorage.setItem('Name', this.name)
              this.$router.push("/City");
            }
              if (this.Category=="Cities")
            {
              localStorage.setItem('CityName', this.name)
               this.$router.push("/ShowCity");
            }
            if (this.Category!="Cities" && this.Category!="State"){
              if (this.name){
              localStorage.setItem('Name', this.name)
             this.$router.push("/Place");
             }
             else{
              localStorage.removeItem('State')
              localStorage.setItem('Category', this.Category)
              this.$router.push("/AllPlace")
            }
            }



        })

        .catch(error => {
          console.log(error)
        });
          }
          }
        },
        Gotothatplace(Category)
        {
           localStorage.setItem('Category',Category)
           this.$router.push("/AllPlace")
        },

         Gotothatcity(City)
        {
           localStorage.setItem('Name',City)
           this.$router.push("/City")
        }
      },





   };



</script>
<style type="text/css">

.example_a {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 20px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}

.example_a:hover {
background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}

#router {
    border: 4px solid #3F3F3F;
    color: #3F3F3F;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin: auto;
    padding: 12px 32px 12px 82px;
    position: relative;
    text-decoration: none;
}

#router .label,
#router .icon-arrow {
    backface-visibility: hidden;
    transform: translateZ(0);
    perspective: 1000;
}

#router .label {
    display: inline-block;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
}

#router .icon-arrow {
    fill: #3F3F3F;
    height: 15px;
    top: 17px;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1), opacity .4s cubic-bezier(0.86, 0, 0.07, 1);
    width: 35px;
}

#router .icon-arrow.before {
    left: 32px;
    margin-right: 15px;
    position: absolute;
    transform-origin: left center;
}

#router .icon-arrow.after {
    margin-left: 15px;
    opacity: 0;
    position: absolute;
    right: 32px;
    transform: translateX(75%) scaleX(0.1);
    transform-origin: right center;
}

#router:hover .label {
    transform: translateX(-52px);
}

#router:hover .icon-arrow.before {
    opacity: 0;
    transform: translateX(-75%) scaleX(0.1);
}
#router:hover .icon-arrow.after {
    opacity: 1;
    transform: translateX(0) scaleX(1);
}

#router:active {
    border-color: #FD6154;
    color: #FD6154;
}

#router:active .icon-arrow {
    fill: #FD6154;
}

.this:hover{
   transform: scale(1.1);
   cursor: pointer;
}
input#search{
  padding: inherit;
    font-size: 30px;
}
span.e-input-group.e-control-wrapper.e-ddl{
      height: 100%;
}
.parent{
    position: relative;
}
.over-img{
    position: absolute;
    top: 80%;
    left: 20%;
}

.rows img:hover {
    transform:none;
}
.rows img {
  width: 90px;
  cursor:pointer
}

.rows .col-2 img:hover {
   opacity: 0.7
}
.rows .col-2 {
  text-align: center;
}
</style>
