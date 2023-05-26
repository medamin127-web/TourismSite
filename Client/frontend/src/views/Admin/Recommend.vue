<template>
<div class="container">
    <h1>Your scheduler</h1>
    <button  id="btn4" type="button" class="btn" style="float:right;float: right;
    font-family: 'Comfortaa';
    font-size: 1.8em;" @click="logUserOut">Log Out</button>

    <div class="d-md-flex justify-content-md-center flex-wrap my-5">
      <div class="card bank-app mx-auto mx-md-3 mb-4">
        <div class="card-body information">
            <h2 style="font-family: 'Comfortaa';">{{Reviews.length}} Reviews</h2>
            <div class="row pt-3 mb-2"  v-for="Review in Reviews" :key="Review._id" >
                <image-rating  :increment="0.5"  :read-only="true" :show-rating="false"   :item-size="20" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="Review.Rating"></image-rating>
                <div class="container">
                    <div>
                        <h5>{{Review.UserName}}</h5>
                        <h6><em>{{Review.Comment}}</em></h6>
                    </div>
                </div>
            </div>
            <div><button class="btn1 btn-green accept mr-2" @click="GoBack">Go Back</button></div>
        </div>
    </div>
</div>
</div>


</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import axios from "axios";
export default {

  name: 'Recommend',

  data() {
    return {
        user:{},
        Reviews:[],
    };

  },
  created() {

    this.getUserDetails();
        let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{GuideId:this.user._id}).then((res) => {
              this.Reviews = res.data

          })
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
    },
    GoBack()
    {
         this.$router.push("/Guide1")
    }

  },
};
</script>

<style>


.card.bank-app {
  width: 65rem;
  border-radius: 21px;
}

.card.bank-app .text-classic-blue {
  color: #0f4c81;
}

.card.bank-app .classic-blue {
  background-color: #0f4c81;
}

.card.bank-app .living-coral {
  background-color: #fa7268;
}

.card.bank-app .text-living-coral {
  color: #fa7268;
}

.card.bank-app .foggy-grey {
  background-color: #eee;
}

.card.bank-app .notification {
  font-size: 0.6rem;
}

.card.bank-app .card-body.information {
  border-top-left-radius: 21px !important;
  border-top-right-radius: 21px !important;
}

.card.bank-app .pb-70 {
  padding-bottom: 70px;
}

.card.bank-app .card-small {
  border-radius: 10px;
}

.card.bank-app > .card.history {
  border-radius: 21px;
  margin-top: -35px;
}

.card.bank-app .wh-48 {
  width: 48px;
  height: 48px;
}

.card.bank-app .select-wrapper.dropdown-primary > label.mdb-main-label.active {
  color: #0f4c81;
}

.card.bank-app .dropdown-primary .dropdown-content li.active,
.card.bank-app .dropdown-primary .dropdown-content li a,
.card.bank-app .dropdown-primary .dropdown-content li span:hover {
  background-color: #0f4c81 !important;
  border-radius: 0.25rem;
}

.card.bank-app .dropdown-content li > a,
.card.bank-app .dropdown-content li > span {
  color: #0f4c81;
  border-radius: 0.25rem;
}

.card.bank-app
  .md-form
  input[type="text"]:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #0f4c81;
}

.card.bank-app .select-wrapper .search-wrap .md-form input:focus {
  -webkit-box-shadow: 0 1px 0 0 #0f4c81 !important;
  box-shadow: 0 1px 0 0 #0f4c81 !important;
}

#btn4{
  background-color:white;
  color:#11a0cf;
}

#btn4:hover{
  background-color: #11a0cf;
    color: white;
}
.btn_wrapper {
  left: 50%;
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.btn1 {

  border: 0;
  border-radius: 25px;
  color: #47cf73;
  cursor: pointer;
  font-weight: 900;
  height: 50px;
  overflow: hidden;
  background-color: white;
  padding: 10px;
  text-transform: uppercase;
  transition: .3s;
  width: 200px;
}

.btn-green {
   border: 2px solid #47cf73;
}

.btn-green:hover {
  background-color: #47cf73;
  color:white;
}

.btn-red {
  border: 2px solid red;
  color:red
}

.btn-red:hover {
  background-color: red;
   color:white;
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
</style>

