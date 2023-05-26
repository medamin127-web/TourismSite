<style>
    .card-block {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }


    @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');
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
      .map-container {
        overflow: hidden;
        position: relative;
        height: 0;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }




      .gallery {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
        column-width: 33%;
      }
        .gallery .pics {
        -webkit-transition: all 350ms ease;
        transition: all 350ms ease;
      }
        .gallery .animation {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      @media (max-width: 450px) {
        .gallery {
          -webkit-column-count: 1;
          -moz-column-count: 1;
          column-count: 1;
          -webkit-column-width: 100%;
          -moz-column-width: 100%;
          column-width: 100%;
        }
      }

      @media (max-width: 400px) {
        .btn.filter {
          padding-left: 1.1rem;
          padding-right: 1.1rem;
        }
      }
      button.close {
        position: absolute;
        right: 0;
        z-index: 2;
        padding-right: 1rem;
        padding-top: .6rem;
      }

    </style>


<template>
  <div>

<!-- Main navigation -->
<header>

  <!-- Full Page Intro -->
  <div class="view jarallax" data-jarallax='{"speed": 0.2}' style="background-image: url('https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center; height:600px ">
    <!-- Mask & flexbox options-->
    <div class="mask rgba-black-light d-flex justify-content-center align-items-center" >
      <!-- Content -->
      <div class="container">
        <!--Grid row-->
        <div class="row" style=" margin-top: 100px">
          <!--Grid column-->
          <div class="col-md-12 m-4 white-text text-center">
            <h1 class="h1-reponsive white-text text-uppercase font-weight-bold  wow fadeInDown"
              data-wow-delay="0.3s" style="font-weight-bold; color:#fff; "><strong>{{City[0].name}}</strong></h1>
              <h1 style="margin: 20px; color:#fff;">Your City Guide</h1>
            <hr class="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s">

<div class="wrapper d-flex">
  <div class="advantages">
    <div class="h1 d-flex">
      <div class=" badge text-white px-3 py-2 d-inline-block font-weight-light" >
        <ul class="list-unstyled" style="color:#e17157; widht:30px">
          <li>Discovering</li>
          <li> Have fun       <i class="far fa-smile-beam fa-spin"></i>
</li>
        </ul>
      </div>
    </div>
  </div>
</div>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Content -->
    </div>
    <!-- Mask & flexbox options-->
  </div>
  <!-- Full Page Intro -->
</header>
<!-- Main navigation -->









  <div class="container my-5">
  <!-- Section -->
  <section>
    <!-- Modal -->
    <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">

          </div>
        </div>
      </div>
    </div>



    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">portfolio</h6>
    <hr class="w-header my-4">
    <p class="lead text-center text-muted pt-2 mb-5">Find breathtaking places for photography! </p>

    <!-- Grid row -->
    <div class="row" >

      <!-- Grid column -->
      <div class="col-md-12 dark-grey-text d-flex justify-content-center mb-5" >

        <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="all">Architecture</button>
        <p class="font-weight-bold mb-0 px-1 py-1">/</p>
        <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="1">Culture</button>
        <p class="font-weight-bold mb-0 px-1 py-1">/</p>
        <button type="button" class="btn btn-flat btn-lg m-0 px-3 py-1 filter" data-rel="2">Nature</button>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->
    <!-- Grid row -->

    <!-- Grid row -->

    <!-- Grid row -->
    <div class=" row gallery mb-5" id="gallery" >

      <!-- Grid column -->
      <div class=" col-3 mb-3 pics all 2 animation" v-for="picture in City[0].Pictures" :key="picture._id">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" :src="picture" alt="Card image cap" style="height: 170px;">
        </a>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <!-- Grid column -->
    </div>
    <!-- Grid row -->

  </section>
  <!-- Section -->

</div>

    <section class="probootstrap_section" id="section-feature-testimonial">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-12 text-center mb-5 probootstrap-animate">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Why we Love {{City[0].name}}</h3>
            <blockquote class="">
              <p class="lead mb-4"><em>{{City[0].Description}}</em></p>
              <p class="probootstrap-author">

              </p>
            </blockquote>

          </div>
        </div>

      </div>
    </section>
    <!-- END section -->
    <!-- END section -->
    <div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Cities</h3>
          </div>
          <div class="container mt-5">

  <!--Section: Content-->
    <section class="dark-grey-text text-center">
    <!-- Grid row -->
      <div class="row">
          <div class="col-2 mb-4" v-for="City in Cities" :key="City._id">
            <div>
            <img :src="City.Pictures[0]" style="border-radius: 50%;width: 180px;height: 150px;cursor: pointer;" @click="ShowCity(City.name)">
            <h3>{{City.name}}</h3>
            </div>
         </div>
      </div>
  </section>
</div>
</div>







<div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Museums & Art</h3>
          </div>
          <div class="container mt-5">

  <!--Section: Content-->
  <section class="dark-grey-text text-center">


    <!-- Section description -->


    <!-- Grid row -->
    <div class="row ">

      <!-- Grid column -->
      <div class="col-lg-3 col-md-6 mb-4 " v-for="Museum in FourMuseum" :key="Museum._id">
        <!-- Collection card -->
        <div class="card card-cascade narrower card-ecommerce card-block " >
          <!-- Card image -->
          <div class="view view-cascade overlay card-block">
            <img style="height: 231px;"  :src="Museum.image" class="img-fluid"
              alt="">
              <a>
              <div class="mask rgba-white-slight"></div>
            </a>
            </div>
            <div class="card-body card-body-cascade text-center pb-3 card-block" style="width: 253px;
    height: 237px;">
            <!-- Title -->
            <h5 class="card-title mb-1">
              <strong>
                <h5 href="">{{Museum.name}}</h5>
              </strong>
            </h5>
            <!--Rating-->
            <ul class="rating mb-1 pb-2" style="color:#FFD700;">
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="far fa-star fa-xs"></i>
              </li>
            </ul>
            <!-- Description -->

            <!-- Card footer -->
            <div class="card-footer px-1 card-block ">
              <button class="accept  btn btn-rounded btn-amber "  style="margin-top: auto;background:#eca0a0;"  @click="AddtoCart(Museum.name)" ><i class="fas fa-cart-plus"></i> Add To Cart</button>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

    </div>
    <div style="padding: 30px;">
      <button id="router" @click="Seemore(Museum[0].Category)">

    <svg class="icon-arrow before">
        <use xlink:href="#arrow"></use>
    </svg>
    <span class="label">See More</span>
    <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
    </svg>
</button>
<svg style="display: none;">
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>
    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>

    <!-- END section -->
    <!-- END section -->
</div>


 <div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Restaurant</h3>
          </div>
          <div class="container mt-5">

  <!--Section: Content-->
  <section class="dark-grey-text text-center">

    <!-- Section heading -->
    <!-- Section description -->


    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-lg-3 col-md-6 mb-4" v-for="Restaurant in FourResturant" :key="Restaurant._id">
        <!-- Card -->
        <div class="card card-cascade narrower card-ecommerce" >
          <!-- Card image -->
          <div class="view view-cascade overlay card-block">
            <img style="height: 231px;" :src="Restaurant.image" class="card-img-top"
              alt="sample photo">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-3 card-block">
            <!-- Title -->
            <h5 class="card-title mb-1">
              <strong>
                <h5 href="">{{Restaurant.name}}</h5>
              </strong>
            </h5>
            <!--Rating-->
            <ul class="rating mb-1 pb-2" style="color:#FFD700;">
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="far fa-star fa-xs"></i>
              </li>
            </ul>
            <!-- Description -->

            <!-- Card footer -->
            <div class="card-footer px-1">
              <button class="accept  btn btn-rounded btn-amber "  style="margin-top: auto;background:#eca0a0;" @click="AddtoCart(Restaurant.name)"><i class="fas fa-cart-plus"></i> Add To Cart</button>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

    </div>
    <div style="    padding: 30px;">
      <button id="router" @click="Seemore(Restaurant[0].Category)">

    <svg class="icon-arrow before">
        <use xlink:href="#arrow"></use>
    </svg>
    <span class="label">See More</span>
    <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
    </svg>
</button>
<svg style="display: none;">
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>
    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>

    <!-- END section -->
    <!-- END section -->
</div>
<div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Cafe</h3>
          </div>
          <div class="container mt-5">

  <!--Section: Content-->
  <section class="dark-grey-text text-center">
 <div class="row">

      <!-- Grid column -->
      <div class="col-lg-3 col-md-6 mb-4" v-for="Cafe in FourCafe" :key="Cafe._id">
        <!-- Collection card -->
        <div class="card card-cascade narrower card-ecommerce" >
          <!-- Card image -->
          <div class="view view-cascade overlay card-block">
            <img style="height: 231px;"  :src="Cafe.image" class="img-fluid"
              alt="">
              <a>
              <div class="mask rgba-white-slight"></div>
            </a>
            </div>
            <div class="card-body card-body-cascade text-center pb-3 card-block" style="width: 253px;
    height: 237px;">
            <!-- Title -->
            <h5 class="card-title mb-1 ">
              <strong>
                <h5 href="">{{Cafe.name}}</h5>
              </strong>
            </h5>
            <!--Rating-->
            <ul class="rating mb-1 pb-2" style="color:#FFD700;"
            >
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="fas fa-star fa-xs"></i>
              </li>
              <li>
                <i class="far fa-star fa-xs"></i>
              </li>
            </ul>
            <!-- Description -->

            <!-- Card footer -->
            <div class="card-footer px-1">
              <button class="accept  btn btn-rounded btn-amber "  style="margin-top: auto;background:#eca0a0;" @click="AddtoCart(Cafe.name)"><i class="fas fa-cart-plus"></i> Add To Cart</button>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

    </div>
    <div style="padding: 30px;">
      <button id="router" @click="Seemore(Cafe[0].Category)">

    <svg class="icon-arrow before">
        <use xlink:href="#arrow"></use>
    </svg>
    <span class="label">See More</span>
    <svg class="icon-arrow after">
        <use xlink:href="#arrow"></use>
    </svg>
</button>
<svg style="display: none;">
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>
    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>

    <!-- END section -->
    <!-- END section -->
</div>




 <div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Our Activity</h3>
          </div>
          <div class="container mt-5">


  <!--Section: Content-->
  <section class="dark-grey-text text-center">

    <!-- Section heading -->

    <!-- Section description -->


    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-lg-4 col-md-12 mb-4" v-for="Activities in Activity" :key="Activities._id">
        <!-- Card -->
        <div class="card card-cascade wider card-ecommerce" >
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img style="height: 247px;width:348px" :src="Activities.image" class="card-img-top"
              alt="sample photo">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <!-- Card image -->
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center pb-0">
            <!-- Title -->
            <h5 class="card-title">
              <strong>
                <a href="">{{Activities.name}}</a>
              </strong>
            </h5>
            <!-- Description -->
            <p class="card-text">{{Activities.Description}}</p>
            <!-- Card footer -->
            <div class="card-footer mt-4">
              <button class="accept  btn btn-rounded btn-amber "  style="margin-top: auto;background:#eca0a0;" @click="AddActivity(Activities.name)" ><i class="fas fa-cart-plus"></i> Add To Cart</button>
            </div>
          </div>
          <!-- Card content -->
        </div>
        <!-- Card -->
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>
        </div>






<!-- Section: Team v.3 -->
<section class="team-section my-5" style="width: 1600px;margin: auto;">

  <!-- Section heading -->
  <h3 class="h1-responsive font-weight-bold text-center my-5">Our Amazing Guides</h3>
  <!-- Section description -->
  <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
    nostrum quisquam eum porro a pariatur veniam.</p>

  <!-- Grid row-->
  <div class="row text-center ">

    <!-- Grid column -->
    <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between " v-for="Guide in Guides" :key="Guide._id">
      <div class="avatar mb-md-0 mb-4 mx-4" style="width: 500px;height: 500px;">
        <img :src="Guide.files[0]"  class="rounded z-depth-10" alt="Sample avatar"  >
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">{{Guide.name}}</h4>
        <h6 class="font-weight-bold grey-text mb-3">{{Guide.email}}</h6>
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


  </div>
  <!-- Grid row-->

</section>
<!-- Section: Team v.3 -->











 <div class="row text-center mb-5 probootstrap-animate">
          <div class="col-md-12">
            <h3 class="display-4 border-bottom probootstrap-section-heading">Our Special Packages for Today!</h3>
          </div>

<div class="container my-5">

  <!-- Section: Block Content -->
  <section>
    <div class="row" >

      <!-- Grid column -->
      <div  v-for="(p,i) in packages"  :key="p._id" class="col-lg-4 col-md-12 mb-4">

        <!-- Card -->

       <router-link :to="{name: 'ShowPackage', params: { id: p._id }}" tag="div" class="card card-image this"  v-bind:style="{ backgroundImage: 'url(' + p.image + ')' }">

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
              <div class="button_cont" align="center" style="text-decoration=none;">
              <router-link :to="{name:'ChooseGuides',params: { id: p._id },query:{State:p.State}}" tag="button" class="example_a btn btn-rounded btn-amber "  style="margin-top: 50px;background:#eca0a0;"><span>Book now</span></router-link>
            </div>

            </div>
            <!-- Content -->

          </div>
          <!-- Pricing card -->

        </router-link>
        <!-- Card -->

      </div>
      <!-- Grid column -->
    </div>

  </section>
  <!-- Section: Block Content -->
</div>
</div>





</div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
import 'sweetalert2/dist/sweetalert2.min.css';
export default {

  name: 'City',

  data() {
    return {
      user: {},
      Client:[],
      City:[],
      itemname:"",
      Guides:[],
      packages:[],
      Namearray:[],
      Activity:[],
      Restaurant:[],
      Places:[],
      Cafe:[],
      Museum:[],
      Beach:[],
      Monument:[],
      AmusementPark:[],
      Others:[],
      i:0,
      Activities:[],
      OneActivity:[],
      Cities:[]

    };
  },
  computed: {
     FourResturant()
     {
      let Res=[]
      for (var i = 0; i <= 3; i++) {
        Res.push(this.Restaurant[i])
      };
      return Res
     },
     FourCafe()
     {
      let Res=[]
      for (var i = 0; i <= 1; i++) {
        Res.push(this.Cafe[i])
      };
      return Res
     },
     FourMuseum()
     {
      let Res=[]
      for (var i = 0; i <= 3; i++) {
        Res.push(this.Museum[i])
      };
      return Res
     },
     FourMonument()
     {
      let Res=[]
      for (var i = 0; i <= 3; i++) {
        Res.push(this.Monument[i])
      };
      return Res
     },
     FourAmusementPark()
     {
      let Res=[]
      for (var i = 0; i <= 3; i++) {
        Res.push(this.AmusementPark[i])
      };
      return Res
     },
     FourOthers()
     {
      let Res=[]
      for (var i = 0; i <= 3; i++) {
        Res.push(this.Others[i])
      };
      return Res
     },
  },
  created(){
    this.getUserDetails();
    console.log(this.user)

    let URL01 = "http://localhost:3005/api/FindCity";
          this.itemname=localStorage.Name
          console.log("State: " + this.itemname)
        axios.post(URL01,{State:this.itemname}).then((res) => {
              this.Cities = res.data
              console.log(this.Cities)
            })
        .catch(error => {
          console.log(error)
        });

    let ApiUrl= "http://localhost:3005/api/FindCustom";
        axios.post(ApiUrl,{UserId:this.user._id}).then((res) => {
              this.Client = res.data
        })
        .catch(error => {
          console.log(error)
        });

    let tre = "http://localhost:3005/api/FindState";
            this.itemname=localStorage.Name
             axios.post(tre,{name:this.itemname}).then((res) => {
              this.City = res.data
              console.log(this.City[0].Pictures)
        })
        .catch(error => {
          console.log(error)
        });


        let url ="http://localhost:8088/user/UserGuides2";
         this.itemname=localStorage.Name
         axios.post(url,{country:this.itemname,Role:'Guide'}).then((res) => {
              this.Guides = res.data
              console.log(this.Guides)
        })
        .catch(error => {
          console.log(error)
        });

        let url2 ="http://localhost:3005/api/FindPackages";
         this.itemname=localStorage.Name
         axios.post(url2,{State:this.itemname}).then((res) => {

              this.packages=res.data;


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
        })
        .catch(error => {
          console.log(error)
        });

          let url3 ="http://localhost:3005/api/AddActivity";
         this.itemname=localStorage.Name
         axios.post(url3,{State:this.itemname}).then((res) => {
              this.Activity = res.data
              console.log(this.Activity)
        })
        .catch(error => {
          console.log(error)
        });

         let url4 ="http://localhost:3005/api/Findplace";
         this.itemname=localStorage.Name
         axios.post(url4,{State:this.itemname}).then((res) => {
            this.Places=res.data
              for (var i=0;i<=res.data.length-1;i++)
              {
                if (res.data[i].Category=="Restaurant")
                {
                  this.Restaurant.push(res.data[i])
                }
                if (res.data[i].Category=="Cafe")
                {
                  this.Cafe.push(res.data[i])
                }
                if (res.data[i].Category=="Museum")
                {
                  this.Museum.push(res.data[i])
                }
                if (res.data[i].Category=="Monument")
                {
                  this.Monument.push(res.data[i])
                }
                 if (res.data[i].Category=="Beach")
                {
                  this.Beach.push(res.data[i])
                }
                 if (res.data[i].Category=="Amusement Park")
                {
                  this.AmusementPark.push(res.data[i])
                }
                if (res.data[i].Category=="Others")
                {
                  this.Others.push(res.data[i])
                }
              }
              console.log(this.Cafe)
        })
        .catch(error => {
          console.log(error)
        });



  },
  methods:{
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    Seemore(Category){
      localStorage.setItem('Category',Category)
      localStorage.setItem('State',this.City[0].name)
      this.$router.push("/AllPlace");
    },
    AddtoCart(name){
      localStorage.setItem('Name',name)

      this.$router.push("/Place");
    },
    AddActivity(Name){
      let OneActivity;
      let url7 = "http://localhost:3005/api/AddActivity";
      axios.post(url7,{name:Name,State:this.itemname}).then((res) => {
        console.log(res.data[0])
          OneActivity= res.data[0]
            let url8 = "http://localhost:3005/api/Create_Custom";



      this.Activities.push(OneActivity)

      this.$swal("Success", "Activity Successfully Added to your cart", "success")
       if (!this.Client.length)
        {
           let newPackage= {
          UserId:this.user._id,
          Places:[],
          Activity:this.Activities,
          Duration:'1'
            }
          axios.post(url8,newPackage).then(() => {
          this.$router.push('/City')

        })

        }
        else{
          let ApiUrl2 = `http://localhost:3005/api/UpdateCustomPackage/${this.Client[0]._id}`;
           this.Client[0].Activity.push(OneActivity)

          let UpdatedClient = {
            Activity:this.Client[0].Activity
          }
          axios.patch(ApiUrl2,UpdatedClient).then((res) => {
                console.log(res)

                this.$router.push('/City')
            }).catch(error => {
                console.log(error)
            });
        }
        })

        .catch(error => {
          console.log(error)
        });


      //this.Activities.push(this.OneActivity)

      },
      ShowCity(name){
        localStorage.setItem('CityName', name)
        this.$router.push("/ShowCity");
      }
    }

};



</script>
