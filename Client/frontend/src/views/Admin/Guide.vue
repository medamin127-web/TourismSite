<template>
  <div class="container">
    <h1>Your scheduler</h1>
    <button  id="btn4" type="button" class="btn" style="float:right;float: right;
    font-family: 'Comfortaa';
    font-size: 1.8em;" @click="logUserOut">Log Out</button>

    <div class="d-md-flex justify-content-md-center flex-wrap my-5">
      <div class="card bank-app mx-auto mx-md-3 mb-4">
        <div class="card-body information">
          <ul
            class="list-unstyled mt-2 mb-4 pb-2 d-flex justify-content-between align-items-center"
          >
            <li><div><h2 style="font-family: 'Comfortaa';
    background: cadetblue;
    color: white;">Rating</h2><h3 style="font-family: 'Poppins';">{{review}}/5</h3></div></li>
            <li>
              <ul
                class="list-unstyled d-flex justify-content-right align-items-center">
                <li>
                  <a>
                    <img
                      :src="user.files[0]"
                      class="rounded-circle z-depth-0"
                          style="width: 60px;height: 80px;"

                      alt="avatar image"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p class="h6 text-muted font-weight-normal mb-2" style="font-family:'Poppins';">Welcome Back</p>
          <p class="h4 mb-2">{{user.name}}</p>
          <div class="row pt-2">
            <div class="col-6 mb-3">
              <a class="card card-small default-color white-text">
                <div class="card-body px-3 pt-4 pb-3">
                  <i
                    class="fas fa-dollar-sign white text-default rounded-circle wh-48 text-center p-3 mr-4 mb-3"
                    aria-hidden="true"
                  ></i>
                  <p class="mb-1">Transactions</p>
                  <p class="small mb-0">8 items</p>
                </div>
              </a>
            </div>
            <div class="col-6 mb-3" @click="Client">
              <a class="card card-small classic-blue white-text">
                <div class="card-body px-3 pt-4 pb-3">
                  <i
                    class="fas fa-piggy-bank white text-classic-blue rounded-circle wh-48 text-center p-3 mr-4 mb-3"
                    aria-hidden="true"
                  ></i>
                  <p class="mb-1">Client</p>
                  <p class="small mb-0">{{Facture.length}} Client</p>
                </div>
              </a>
            </div>
            <div class="col-6 mb-3">
              <a class="card card-small info-color white-text">
                <div class="card-body px-3 pt-4 pb-3" @click="Recommend">
                  <i
                    class="fas fa-star white text-info rounded-circle wh-48 text-center p-3 mr-4 mb-3"
                    aria-hidden="true"
                  ></i>
                  <p class="mb-1">Recommend</p>
                  <p class="small mb-0">{{num}} Reviews</p>
                </div>
              </a>
            </div>
            <div class="col-6 mb-3">
              <a class="card card-small living-coral white-text">
                <div class="card-body px-3 pt-4 pb-3">
                  <i
                    class="fas fa-credit-card white text-living-coral rounded-circle wh-48 text-center p-3 mr-4 mb-3"
                    aria-hidden="true"
                  ></i>
                  <p class="mb-1">Credit Cards</p>
                  <p class="small mb-0">4 items</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

import VueJwtDecode from 'vue-jwt-decode';
import axios from "axios";
export default {
  name: "Guide",

  data() {
    return {
      guide: {},
      Facture: [],
      Facturesearch: "",
      user:{},
      num:"",
      Reviews:[],
      review:null

}
},


created() {

    this.getUserDetails();
  let url = "http://localhost:3005/api/FindReview";
  axios.post(url,{GuideId:this.user._id}).then((res) => {
              this.Reviews = res.data
              this.num = res.data.length
              let total=0

              for (var i=0;i<=this.Reviews.length-1;i++)
              {
                if (this.Reviews[i].Rating)
                {
                    total += Number(this.Reviews[i].Rating)
                }
              }

              this.review = total/this.Reviews.length

        })
  let url2 = 'http://localhost:3005/api/FindFacture';
   axios.post(url2,{GuideId:this.user._id}).then(res => {
        this.Facture = res.data
        console.log(this.Facture)
   })
        .catch(error => {
          console.log(error)
        });

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
    Recommend(){
      this.$router.push("/Recommend");

    },
    Client(){
      this.$router.push("/Clients");
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
</style>
