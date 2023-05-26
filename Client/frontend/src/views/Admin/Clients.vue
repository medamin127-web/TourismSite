<template>
<div>
    <div class="container">
     <h1>Your scheduler</h1>
    <button  id="btn4" type="button" class="btn" style="float:right;float: right;
    font-family: 'Comfortaa';
    font-size: 1.8em;" @click="logUserOut">Log Out</button>

    <div class="d-md-flex justify-content-md-center flex-wrap my-5">
      <div class="card bank-app mx-auto mx-md-3 mb-4">
        <div class="card-body information">
        <div class="row mt-3 mb-3" style="text-align:center" >
         <div class="col-3"><h5>Date</h5></div>
         <div class="col-5"><h5>Client</h5></div>
         <div class="col-3"><h5>Program</h5></div>
         <div class="col-1"><h5></h5></div>
       </div>
                <div class="row" v-for="(factures) in Factures" :key="factures._id">
                  <div class="col-3" style="margin: auto;"><h5 style="text-align: center;
    font-family: 'Comfortaa';">{{factures.Date}}</h5></div>
                  <div class="col-5"><div style="text-align: center;"><img style="width: 120px;height: 120px;border-radius: 50%;" :src="factures.image"><h5  style="margin-top: 5px;">{{factures.Name}}</h5><p style="font-family: 'Comfortaa';font-style: italic;">{{factures.Email}} <br> {{factures.country}}</p></div></div>
                  <div class="col-3" style="text-align: center;
    font-family: 'Comfortaa';
    margin: auto;">{{factures.Plan}}</div>
                  <div class="col-1" style="font-size: 50px;
    color: rgb(31, 168, 122);
    margin: auto;" @click="Checked(factures._id)"><i class="fas fa-check" style="cursor: pointer;"></i></div>
                </div>
                <div><button class="btn1 btn-green accept mr-2" @click="GoBack">Go Back</button></div>
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

  name: 'Clients',

  data() {
    return {
        user:{},
        Factures:[],
        Clients:[]
    };

  },
  created(){
     this.getUserDetails();
      let url = 'http://localhost:3005/api/FindFacture';
     axios.post(url,{GuideId:this.user._id}).then((res) => {
        this.Factures = res.data
        let url80 = 'http://localhost:8088/user/FindUser';
            axios.post(url80).then(res => {
            this.Clients = res.data;
        for (var i=0;i<=this.Factures.length-1;i++)
        {
            for(var j =0;j<=this.Clients.length-1;j++)
            {
                if (this.Clients[j]._id == this.Factures[i].UserId)
                {
                    this.Factures[i].Name = this.Clients[j].name
                    this.Factures[i].Email = this.Clients[j].email
                    this.Factures[i].image = this.Clients[j].files[0]
                    this.Factures[i].country = this.Clients[j].country
                }
            }

        }
        for ( j=0;j<=this.Factures.length-1;j++){
        var word=""

      for (i = 0;i<=this.Factures[j].Package[0].Places.length-1;i++)
      {
         word+=this.Factures[j].Package[0].Places[i].Time + "-" + this.Factures[j].Package[0].Places[i].name
          word+='\n'
      }
       for (var m = 0;m<=this.Factures[j].Package[0].Activity.length-1;m++)
      {
         word+=this.Factures[j].Package[0].Activity[m].Time + "-" + this.Factures[j].Package[0].Activity[m].name
          word+='\n'
      }

      //Arr.push(word)
      this.Factures[j].Plan = word



    }
        })

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
    Checked(id){
        let url = `http://localhost:3005/api/delete-Facture/${id}`
        let indexOfArrayItem = this.Factures.findIndex(i => i._id === id);

                if (window.confirm("Verify Checking")) {
                    axios.delete(url).then(() => {
                        this.Factures.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
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


