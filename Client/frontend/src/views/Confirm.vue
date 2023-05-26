<template>
    <div>

        <div class="container my-5">
            <section class="magazine-section dark-grey-text " >
                <h2 class="text-center font-weight-bold mb-4 pb-2">Finally,Choose the date</h2>
                <div class="row">
                    <div class="col-6" style="margin: auto; margin-top: 35px;  margin-bottom: 35px;">
                    <ejs-datepicker :placeholder="waterMark" :renderDayCell="disableDates" :value="dateVal" v-model="dateVal" :format="dateFormat" @change="confirm" ></ejs-datepicker>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" style="text-align: center;margin-top: 20px;margin-bottom: 50px;">
                        <div class="btn_wrapper">
                          <button @click="Send" class="btn btn-green accept mr-2">Confirm Again</button>
                          <router-link to="/" tag="button"  class="btn btn-red "  >Cancel</router-link>
                        </div>
                    </div>
                    </div>
        </section>
        </div>
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
export default {

  name: 'Confirm',

  data() {
    return {
        dateVal : new Date(),
        dateFormat : 'yyyy-MM-dd',
        waterMark : 'Select a date',
        date:"",
        user: {},
        Facture:[],
        Dates:[]
    };
  },
  created() {
    this.getUserDetails();
    console.log(this.user._id)

    let apiURL = 'http://localhost:3005/api/Facture';
     axios.get(apiURL).then((res) => {
            this.Facture = res.data;
            for (var i=0;i<=this.Facture.length-1;i++)
            {
                let dates = this.Facture[i].Date.split('/')
                this.Dates.push(dates)
            }
            console.log(this.Dates[0][1])
        })
        .catch(error => {
          console.log(error)
        });


  },
    methods: {
        confirm:function(){
            this.date = this.dateVal.getMonth()+1 + '/' + this.dateVal.getDate() + '/' + this.dateVal.getFullYear();
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    Send:function(){
        let facture = {
            UserId:this.user._id,
            GuideId:this.$route.params.guide,
            Package:this.$route.params.package,
            Date:this.date
        }
        let apiURL = 'http://localhost:3005/api/Create_Facture';
         axios.post(apiURL,facture).then(() => {
             this.$router.push('/ConfirmationMessage')

        })
        .catch(error => {
          console.log(error)
        });
    },
     disableDates: function(args) {
        for (var i=0;i<=this.Dates.length-1;i++){
            if (args.date.getMonth()+1==Number(this.Dates[i][0]) && args.date.getDate()==Number(this.Dates[i][1]) && args.date.getFullYear()==Number(this.Dates[i][2]))
            {
                args.isDisabled = true;
            }

        }
     }
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
  color: #47cf73;
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
   border: 2px solid #47cf73;
}

.btn-green:hover {
  background-color: #47cf73;
  color:white;
}

.btn-red {
  border: 2px solid red;
   color:red;
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
