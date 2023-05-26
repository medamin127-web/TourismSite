<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
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
.modal.show .modal-dialog {
    transform: none;
    margin-right: 50%;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1000px;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
form{
  margin-top:70px;
}
</style>

<template>

<div>
  <div class="container my-5">
    <section class="magazine-section dark-grey-text">
       <h2 class=" text-center font-weight-bold mb-4 pb-2">Checkout Area</h2>
       <div class="row mt-3 mb-3" style="text-align:center" >
         <div class="col-1"><h5>#</h5></div>
         <div class="col-3"><h5><i class="fas fa-image"></i></h5></div>
         <div class="col-2"><h5>Name</h5></div>
         <div class="col-3"><h5>Description</h5></div>
         <div class="col-2"><h5><i class="far fa-clock"></i></h5></div>
         <div class="col-1"></div>
       </div>
       <div class="row" v-for="(Plane) in Custom.Places" :key="Plane"  style="padding-top: 50px;padding-bottom: 50px;text-align: center;background: mintcream;">
         <div class="col-1"><h5>{{Plane.id}}</h5></div>
         <div class="col-3"><img :src="Plane.image"></div>
         <div class="col-2"><h5></h5>{{Plane.name}}</div>
         <div class="col-3"><p class="lead mb-4" ><em>{{Plane.State}} <br> {{Plane.City}} <br> {{Plane.Adress}}</em></p></div>
          <div class="col-2"><input type="time" id="appt" class="form-control" name="appt" v-model="Times[Plane.id]" @change="ChangeTimeinCustom(Plane._id)"></div>
         <div class="col-1" ><button class="btn btn-danger" @click="Delete(Plane._id)">Delete</button></div>
       </div>
        <div class="row" v-for="(Plane) in Custom.Activity" :key="Plane"  style="padding-top: 50px;padding-bottom: 50px;text-align: center;background: mintcream;">
         <div class="col-1"><h5>{{Plane.id}}</h5></div>
         <div class="col-3"><img :src="Plane.image"></div>
         <div class="col-2"><h5></h5>{{Plane.name}}</div>
         <div class="col-3"><p class="lead mb-4" ><em>{{Plane.State}} <br> {{Plane.City}} <br> {{Plane.Adress}}</em></p></div>
          <div class="col-2"><input type="time" id="appt" class="form-control" name="appt" v-model="Times[Plane.id]" @change="ChangeTimeinCustom(Plane._id)"></div>
         <div class="col-1"><button class="btn btn-danger" @click="Delete1(Plane._id)">Delete</button></div>
       </div>
       <div style="text-align: -webkit-right; padding: 30px;" >

       <b-button v-b-modal.modal-prevent-closing variant="light" @click="fetch" class="btn1 btn-green accept mr-2" :disabled="Plan.length==0">Go To Checkout</b-button>
       <router-link to="/" tag="button"   variant="info" class="btn1 btn-red">Cancel</router-link>
       </div>
    </section>
  </div>




    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      size="xl"
      header-bg-variant="light"
      footer-bg-variant="light"
      body-bg-variant="light"
      hide-header="true"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
     <section class="magazine-section dark-grey-text "  >
                <h2 class="text-center font-weight-bold mb-4 pb-2">Choose a guide</h2>
                <div class="row">
                    <div class="col-3 mt-5 " v-for="guide in Guides" :key="guide._id" style="text-align:center;margin:auto">
                        <img style="border-radius:50%;width:150px;height:150px;" :src="guide.files[0]">
                        <div>
                        <h3 style="width: max-content;margin: auto; margin-top: 15px;">{{guide.name}}</h3>
                        <h5 style="margin-top: 15px;">{{guide.birthdate}}</h5>
                        <h5 style="margin-bottom: 15px;">{{guide.country}}</h5>
                        <h5>{{guide.Price}} DT</h5>
                        </div>
                        <input style="margin-top: 30px;height: 25px;" type="radio" id="male" name="gender" :value="guide._id" @click="show(guide._id)" v-model="guideid" >
                    </div>
                </div>
             </section>
              <div style="margin-top: 50px;">
                  <h2 class="text-center font-weight-bold mt-2 ">Choose the date</h2>
                  <div class="row" style=";margin-top: -50px;">
                    <div class="col-6" style="margin: auto; margin-top: 35px;  margin-bottom: 35px">
                    <ejs-datepicker :placeholder="waterMark" :renderDayCell="disableDates" :value="dateVal" :min="min"  v-model="dateVal" :format="dateFormat" @change="confirm" ></ejs-datepicker>
                    </div>
                  </div>
                  </div>
    </b-modal>

</div>

</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'cart',

data() {
    return {
      user:{},
      Custom:[],
      i:0,
      j:0,
      Places:[],
      Plan:[],
      Times:[],
      Times2:[],
      Guides:[],
      UpdatedPlaces:[],
      UpdatedActivity:[],
      Facture:[],
       name: '',
        nameState: null,
        submittedNames: [],
        guideid:"",
        Dates:[],
        waterMark : 'Select a date',
        dateVal : new Date(),
        dateFormat : 'yyyy-MM-dd',
        date:"",
        index:0,
        min:"",
        Factures2:[],
        Places2:[],
        Places3:[],
        Activity2:[],
        Activity3:[],

    };
  },
    methods:{

    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    ChangeTimeinCustom(j){

      for(var i=0;i<=this.Plan.length-1;i++)
      {

        if (this.Plan[i]._id==j)
        {
          this.Plan[i].Time=this.Times[i];

        }

      }
      console.log(this.Plan)
    },
    show(id){
      this.Dates = []
        let url8= "http://localhost:3005/api/FindFacture";
         axios.post(url8,{GuideId:id}).then((res) => {
          this.Facture = res.data;
          for (var i=0;i<=this.Facture.length-1;i++)
            {
                let dates =
                 this.Facture[i].Date.split('/')

                this.Dates.push(dates)

            }


          console.log(this.Dates)
          console.log(this.Facture)

         })
         .catch(error => {
          console.log(error)
        })

          axios.post(url8,{UserId:this.user._id}).then((res) => {
          this.Facture2 = res.data;
          for (var i=0;i<=this.Facture2.length-1;i++)
            {
                let dates = this.Facture2[i].Date.split('/')

                this.Dates.push(dates)

            }
         })
    },
    fetch(){
          let apiUrl01 = "http://localhost:3005/api/place"
         axios.get(apiUrl01).then((res) => {
            this.Places2 = res.data
          })


    },
    checkFormValidity() {

        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        let facture = {
            UserId:this.user._id,
            GuideId:this.guideid,
            Package:this.Custom,
            Date:this.date
        }



          if (this.Places2.length != this.Places3.length)
          {
            for (var i=0;i<=this.Custom.Places.length-1;i++)
            {
              var verif = false
              for (var j=0;j<=this.Places2.length-1;j++)
              {
                if (this.Custom.Places[i]._id == this.Places2[j]._id)
                {
                  verif = true
                  break
                }

              }
              if (verif == false)
              {

              this.Custom.Places.splice(i,1)
              let identifier = this.Custom._id

              let Url10 = `http://localhost:3005/api/UpdateCustomPackage/${identifier}`
              let UpdatedCustom ={
              Places:this.Custom.Places
                }
              axios.patch(Url10, UpdatedCustom).then(() => {
               }).catch(error => {
              console.log(error)
              });
              }
            }
            this.$router.push('/Error')
          }
         else{
        let apiURL = 'http://localhost:3005/api/Create_Facture';
         axios.post(apiURL,facture).then(() => {
          let apiURL2 = `http://localhost:3005/api/delete-Custompackage/${this.Custom._id}`
             axios.delete(apiURL2).then(() => {
             })

             this.$router.push('/ConfirmationMessage')

        })
        .catch(error => {
          console.log(error)
        })

      }
    },
         disableDates: function(args) {
        for (var i=0;i<=this.Dates.length-1;i++){
            if (args.date.getMonth()+1==Number(this.Dates[i][0]) && args.date.getDate()==Number(this.Dates[i][1]) && args.date.getFullYear()==Number(this.Dates[i][2]))
            {
                args.isDisabled = true;
            }

        }
     },
     Send:function(){
        let facture = {
            UserId:this.user._id,
            GuideId:this.guideid,
            Package:this.Plan,
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
     confirm:function(){
            this.date = this.dateVal.getMonth()+1 + '/' + this.dateVal.getDate() + '/' + this.dateVal.getFullYear();
    },

    Delete(id){

     for (var i=0;i<=this.Custom.Places.length-1;i++)
     {
      if (this.Custom.Places[i]._id == id )
      {
         this.Custom.Places.splice(i,1)

      }
      }

      let identifier = this.Custom._id

      let Url10 = `http://localhost:3005/api/UpdateCustomPackage/${identifier}`
       let UpdatedCustom ={
              Places:this.Custom.Places
            }

     axios.patch(Url10, UpdatedCustom).then(() => {

        }
        )
        .catch(error => {
          console.log(error)
        });
     },
     Delete1(id)
     {
      for (var i=0;i<=this.Custom.Activity.length-1;i++)
     {
      if (this.Custom.Activity[i]._id == id )
      {

        this.Custom.Activity.splice(i,1)
      }
      }

      let identifier = this.Custom._id

      let Url10 = `http://localhost:3005/api/UpdateCustomPackage/${identifier}`
       let UpdatedCustom ={
              Activity:this.Custom.Activity
            }


     axios.patch(Url10, UpdatedCustom).then(() => {

        }
        )
        .catch(error => {
          console.log(error)
        });




     },
    },

  created(){
    this.getUserDetails();

    //To set the min date in Select the date
     var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        this.min = today


          let apiURL02 = "http://localhost:3005/api/Activity"
        axios.get(apiURL02).then((res) => {
          this.Activity3 = res.data
        })

    let url= "http://localhost:3005/api/FindCustom";
    axios.post(url,{UserId:this.user._id}).then((res) => {
      this.Custom = res.data[0]
      var count =0
      for (var l =0;l<=this.Custom.Places.length-1;l++)
      {
        this.Custom.Places[l].id = l
        count++
      }
      for (var ll = 0 ; ll<=this.Custom.Activity.length-1;ll++)
      {
        this.Custom.Activity[ll].id = count
        count++
      }



      let apiUrl01 = "http://localhost:3005/api/place"
         axios.get(apiUrl01).then((res) => {
            this.Places3 = res.data

            for (var i=0;i<=this.Custom.Places.length-1;i++)
            {
              var verif = false
              for (var j=0;j<=this.Places3.length-1;j++)
              {
                if (this.Custom.Places[i]._id == this.Places3[j]._id)
                {
                  verif = true
                  break
                }

              }

              if (verif == false)
              {

              this.Custom.Places.splice(i,1)
              let identifier = this.Custom._id

              let Url10 = `http://localhost:3005/api/UpdateCustomPackage/${identifier}`
              let UpdatedCustom ={
              Places:this.Custom.Places
                }
              axios.patch(Url10, UpdatedCustom).then(() => {
               }).catch(error => {
              console.log(error)
              });
              }
            }


              for( i=0;i<=this.Custom.Places.length-1;i++)
            {
                this.Plan.push(this.Custom.Places[i])
            }
             for( j=0;j<=this.Custom.Activity.length-1;j++)
            {
                this.Plan.push(this.Custom.Activity[j])
            }

    let URL150="http://localhost:8088/user/UserGuides2"
        axios.post(URL150,{country:this.Custom.Places[0].State,Role:'Guide'}).then((res) => {
              this.Guides = res.data
              for(var i = 0; i <=this.Guides.length-1;i++)
          {
            var ageDifMs = Date.now() - Date.parse(this.Guides[i].birthdate);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var Age = Math.abs(ageDate.getUTCFullYear() - 1970);
            this.Guides[i].birthdate = Age
          }

   let apiURL5 = 'http://localhost:3005/api/Facture';
     axios.get(apiURL5).then((res) => {
            this.Facture = res.data;

        })
        }
        )
        this.Places=this.Custom.Places

        })
        }
        )
        .catch(error => {
          console.log(error)
        });




  },

};



</script>
