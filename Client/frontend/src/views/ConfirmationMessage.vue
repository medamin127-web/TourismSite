<template>
    <div>
  <div class="container my-5 " style="padding: 90px;background-color: whitesmoke;"  >
             <section class="magazine-section dark-grey-text " >
                    <h2 class="text-center font-weight-bold mb-4 pb-4 ">Congrats {{user.name}} ! Your Order has been placed</h2>
                    <div class="row">
                        <h4 style="margin: auto;" class="text-center font-weight-bold mb-4 pb-4 ">We'll contact you within 24 hours </h4>
                    </div>
                     <div class="row">
                    <div class="col-12" style="text-align: center;margin-top:20px;margin-bottom: 50px;">
                    <div class="btn_wrapper">
                    <router-link to="/" tag="button" style="width: 250px;" class="btn btn-green accept"  >Return to Homepage</router-link>
                    </div>
                </div>
                </div>
             </section>
         </div>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
//import axios from "axios";
export default {

  name: 'ConfirmationMessage',

  data() {
    return {
        user: {},
    };
  },
  created() {
    this.getUserDetails();
    console.log(this.user.name)

    },
    methods:{
        getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    }
};
</script>

<style lang="css" scoped>

.btn_wrapper {
  left: 50%;
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.btn {

  border: 0;
  border-radius: 25px;
  color: lightblue;
  cursor: pointer;
  font-weight: 900;
  height: 50px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  transition: .3s;
  width: 200px;
}

.btn-green {
   border: 2px solid lightblue;
}

.btn-green:hover {
  background-color:lightblue;
  color:white;
}

.btn-red {
  border: 2px solid #ff3c41;
}

.btn-red:hover {
  background-color: #633d3d;
}

.popup {
  align-items: center;
  background-color: #252a34;
  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%), 0 3px 3px -2px rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  height: 100px;
  justify-content: center;
  margin: 25px;
  position: fixed;
  right: -400px;
  text-align: center;
  width: 300px;
}

.popup:hover {
  right: 0;
}

.popup-green {
  background-color: #35513e;
  border: 2px solid #47cf73;
}

.popup-red {
  background-color: #633d3d;
  border: 2px solid #ff3c41;
}

.bottom {
  bottom: 0;
}

.top {
  top: 0;
}

.slide-in {
  -webkit-animation: slide-in 0.5s forwards;
  animation: slide-in 0.5s forwards;
}

@-webkit-keyframes slide-in {
    100% { right: 0; }
}

@keyframes slide-in {
    100% { right: 0; }
}
</style>

