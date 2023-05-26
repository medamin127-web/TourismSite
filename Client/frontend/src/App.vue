<template>
  <div id="app" v-bind:style="[$route.meta.Navigation ? myStyle : 'background-color:yellow'] " >
    <div id="nav" v-if="$route.meta.hideNavigation"  >

      <Nav />
    </div>

    <div v-if="$route.meta.Navigation">
    <NavAdmin />
    <Scheduler />
      <Side></Side>

      <sidebar class="float-left"/>
      </div>

    <router-view/>

    <div id="footer" v-if="$route.meta.hideNavigation"  >
      <Footer />
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import Nav from "./components/Nav.vue";
//import NavAdmin from "./components/NavAdmin.vue";
import Side from "./components/Side.vue";
import sidebar from "./components/sidebar.vue";
import Footer from "./components/Footer.vue"



import $ from 'jquery';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Lightbox from '@morioh/v-lightbox'
// stylesheet

// global register
Vue.use(Lightbox);
window.Swal = swal;
Vue.use(DatePickerPlugin);
Vue.use(AutoCompletePlugin);

export default {
  name: "app",
  components: {
    Nav,
    Footer,
     sidebar,
    Side,

  },
  created: function () {
          this.getUserDetails();
          console.log(this.user)
           this.Role=localStorage.getItem("Role")
  },
  data(){
       return{

         myStyle:{
            background:"url('https://mdbootstrap.com/img/Photos/Others/img%20(55).jpg')",
            height: "300vh",
            fontFamily:"Avenir, Helvetica, Arial, sans-serif",
            textAlign: "center",
            color:"rgb(145, 139, 139)",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition: "center center",
            webkitFontSmoothing:"antialiased",
            mozOsxFontSmoothing:"grayscale",
            },
           Role:"",
           user:[],
           url:"https://mdbootstrap.com/img/Photos/Others/img%20(55).jpg"
          }
        },




}
$(document).ready(function($) {

  "use strict";

   //initiate as false



  // scroll

  var scrollWindow = function() {

    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.probootstrap_navbar');




      if (st > 150) {
        if ( !navbar.hasClass('scrolled') ) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if ( navbar.hasClass('scrolled') ) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) {
          navbar.addClass('awake');
        }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
      }

    });
  };
  scrollWindow();


  // navigation
  var OnePageNav = function() {
    var navToggler = $('.navbar-toggler');
    $(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;

      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    });
    $("#probootstrap-navbar ul li a[href^='#']").on('click', function(){
      if ( navToggler.is(':visible') ) {
        navToggler.click();
      }
    });

  };
  OnePageNav();


  var select2 = function() {
    $('.js-dropdown-multiple, .js-example-basic-single').select2();
  }
  select2();


  var contentWayPoint = function() {

    if ($('.probootstrap-animate').length > 0 ) {
      $('.probootstrap-animate').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('probootstrap-animated') ) {

          $(this.element).addClass('item-animate');
          setTimeout(function(){

            $('body .probootstrap-animate.item-animate').each(function(k){
              var el = $(this);
              setTimeout( function () {
                var effect = el.data('animate-effect');
                if ( effect === 'fadeIn') {
                  el.addClass('fadeIn probootstrap-animated');
                } else if ( effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft probootstrap-animated');
                } else if ( effect === 'fadeInRight') {
                  el.addClass('fadeInRight probootstrap-animated');
                } else {
                  el.addClass('fadeInUp probootstrap-animated');
                }
                el.removeClass('item-animate');
              },  k * 50, 'easeInOutExpo' );
            });

          }, 50);

        }

      } , { offset: '95%' } );
    }
  };
  contentWayPoint();



  var owlCarouselFunc = function() {
    $('.js-owl-carousel').owlCarousel({
      loop : false,
      margin : 20,
      nav : true,
      stagePadding : 50,
      navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive : {
          0 : {
              items:1
          },
          600 : {
              items:2
          },
          1000 : {
              items:3
          }
      }
    });

    $('.js-owl-carousel-2').owlCarousel({
      loop : false,
      margin : 20,
      nav : true,
      stagePadding : 0,
      navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
      responsive : {
          0 : {
              items:1
          },
          600 : {
              items:1
          },
          800 : {
              items:2
          },
          1000 : {
              items:3
          }
      }
    });
  };
  owlCarouselFunc();

  var ThumbnailOpacity = function() {
    var t = $('.probootstrap-thumbnail');
    t.hover(function(){
      var $this = $(this);
      t.addClass('sleep');
      $this.removeClass('sleep');
    }, function(){

      t.removeClass('sleep');
    });
  }
  ThumbnailOpacity();

  var datePicker = function() {
    $('#probootstrap-date-departure, #probootstrap-date-arrival').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
  };
  datePicker();


});


</script>

<style lang="scss" >

@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,700');
@import './assets/css/style.css';
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #5f99c9;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }


#myMenu {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;

}

#sidebar{
  margin-top: 30px;
}

#myMenu li a {
  padding: 12px;
  text-decoration: none;
  color: white;
  display: block
}

#myMenu li a:hover {
  background-color: #262626;
}
/* Left column (menu) */


/* Left column (menu) */
#left {

  flex:30%;


}

#left h2 {
  padding-left: 8px;
  color:white;
  background-color: #000000;
}


body {
}


* {
  box-sizing: border-box;
}


#dp{
    margin-left: 200px;

}

#app {

    width: 100%;
    height: 100%;
 }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }


 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;

   background: linear-gradient(45deg, rgba(46, 93, 163) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

</style>
