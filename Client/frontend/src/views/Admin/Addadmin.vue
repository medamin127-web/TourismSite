<template>
    <div  style="padding:110px ; height:900px">
        <div class="row">
          <div>
            <div class="row">
              <div class="col-12">
                <h2 class="display-4 text-center " style="padding-top: 20px;font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Admins Management</h2>
              </div>
            </div>
  <!--Section: Content-->
  <section class="dark-grey-text p-5">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-5 mb-4 mb-md-0">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image">
        </div>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-7 mb-lg-0 mb-4">

        <!-- Form -->
        <form  id="form1" style="visibility: hidden;" v-on:submit.prevent="AddAdmin" class="form-group">
        <br>
        <div class="form-row">
            <div class="col-12">
                <input type="text" name="" placeholder="Enter @ To Add New Admin"  v-model="email" class="form-control ">
            </div>
        </div>

        <div class="form-row">
           <h5 id="alert" class="ml-3 mt-1" style="visibility: hidden; color:red" role="alert">
               Error!
          </h5>
        </div>

        <div class="form-row">
            <div class="col-6">
                <button type="submit" class="form-control btn btn-success "><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Submit</button>

            </div>
            <div class="col-6">
                 <button type="reset" class="form-control btn btn-danger  ml-3"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Reset</button>
            </div>
        </div>
        <br>
    </form>

        <!-- Form -->

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->


</div>
                <div class="col-12">
          <div id="alert1" style="visibility: hidden;" class="alert alert-success" role="alert">
         Added New Admin !
        </div>
      </div>
      <div class="col-md-auto " v-if="user.Role=='SuperAdmin'">
                <h3>Add Admin here</h3>

        <div class="d-flex flex-row-reverse">
            <div class="p-2">
                <button class="btn btn-primary" id="btn1" v-on:click="Add" >+ Add Admin</button>
            </div>
        </div>
            </div>
        </div>


        <form  id="form1" style="visibility: hidden;" v-on:submit.prevent="AddAdmin" class="form-group">

        <div class="form-row">
            <div class="col-12">
                <input type="text" name="" placeholder="Enter @ To Add New Admin"  v-model="email" class="form-control ">
            </div>
        </div>

        <div class="form-row">
           <h5 id="alert" class="ml-3 mt-1" style="visibility: hidden; color:red" role="alert">
               Error!
          </h5>
        </div>

        <div class="form-row">
            <div class="col-6">
                <button type="submit" class="form-control btn btn-success "><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Submit</button>

            </div>
            <div class="col-1">
                 <button type="reset" class="form-control btn btn-danger  ml-3"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Reset</button>
            </div>
        </div>
        <br>
    </form>
        <div class="row" style="padding-left: 280px;">
          <div class="col-6" v-for="superad in Superadmin" v-bind:key="superad.id">
            <div class="card"  style="max-width: 300px;     max-height: 500px;" >
              <img class="card-img-top " style="max-width: 350px;max-height: 250px;" alt="..." :src="superad.files[0]">
               <div class="card-body">
                        <h5 class="card-title" style="font-family: 'Comfortaa';">{{superad.name}}</h5>
                        <p style="    font-family: Sriracha, cursive;
    font-size: 1.2em;
    color: black;">Super Admin</p>
                        <p class="card-text" style="font-family: 'Sriracha';font-size: 1em;">{{superad.email}}</p>
                        <p class="card-text" style="font-family: 'Sriracha';">{{superad.phonenumber}}</p>
                        <p class="card-text" style="font-family: 'Sriracha';font-size: 1em;">{{superad.country}}</p>
               </div>
            </div>
          </div>
        </div>
        <div class="row" style="max-width: 900px;" >
            <div class="col-4 mb-3" style="margin: auto;" v-for="admins in admin" v-bind:key="admins.id">
                <div class="card"  style="max-width: 300px;     max-height: 500px;right: -350px;" >
                    <img class="card-img-top " v-if="admins.files[0]" style="max-width: 350px;max-height: 250px;" alt="..." :src="admins.files[0]">
                    <img class="card-img-top " v-else style="    max-width: 350px;max-height: 250px;" alt="..." :src="pic">
                    <div class="card-body" style="display: contents;">

                        <h5 class="card-title" style="font-family: 'Comfortaa';">{{admins.name}}</h5>
                         <p style="    font-family: Sriracha, cursive;
    font-size: 1.2em;
    color: black;">Admin</p>
                        <p class="card-text" style="font-family: 'Sriracha';font-size: 1em;">{{admins.email}}</p>
                        <p class="card-text" style="font-family: 'Sriracha';">{{admins.phonenumber}}</p>
                        <p class="card-text" style="font-family: 'Sriracha';font-size: 1em;">{{admins.country}}</p>
                        <button  v-if="user.Role=='SuperAdmin'" class="btn btn-danger" @click="DeleteAdmin(admins._id)">Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <img :src="image">





    </div>
</template>
<script>

import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

export default {

  name: 'Addadmin',

  data() {
    return {
    user:{},
    email:"",
    admin:[],
    Superadmin:[],
    pic:"https://e7.pngegg.com/pngimages/691/253/png-clipart-jpeg-gif-computer-icons-end-user-rectangle-black.png"
    };
  },
   created(){
    this.getUserDetails();
    let url = 'http://localhost:8088/user/ShowAdmin';
    axios.get(url).then((res) => {
            this.admin = res.data;
            console.log(this.admin)
        }).catch(error => {
                        console.log(error)
                    });
        let url20 = 'http://localhost:8088/user/ShowSuperAdmin';
        axios.get(url20).then((res) => {
            this.Superadmin = res.data;
            console.log(this.Superadmin)
        }).catch(error => {
                        console.log(error)
                    });
      },

   methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
      DeleteAdmin(id)
      {
      let url50 = `http://localhost:8088/user/UpdateAdmin/${id}`;
      if (window.confirm("Do you really want to delete?")) {
    axios.patch(url50,{Role:'Client'}).then((res) => {
      console.log(res.data)
       for (var i=0;i<=this.admin.length-1;i++)
     {
      if (this.admin[i]._id == id )
      {
       this.admin.splice(i,1)
      }
      }
        }).catch(error => {
           console.log(error)
           });
      }
      },

      verify:function(){
        if (this.text.length)
        {
            return this.isButtonDisabled=false;
        }
      },
      Add:function(){
        document.getElementById("form1").style.visibility= "visible";
        document.getElementById("btn1").style.visibility= "hidden";

      },
    AddAdmin() {


     let apiURL2 = 'http://localhost:8088/user/AddAdmin';

       axios.patch(apiURL2,{email:this.email}).then((res) => {
                console.log(res)
                if(res.data===null)
                {
                  document.getElementById("alert").style.visibility= "visible";

                  this.email="";

                }
                else{

                  document.getElementById("alert1").style.visibility= "visible";
                  document.getElementById("form1").style.visibility= "hidden";
                    document.getElementById("btn1").style.visibility= "visible";
                     this.email="";
                     document.getElementById("alert").style.visibility= "hidden";
                }
                this.$router.push('/Admin/Addadmin')


                 }).catch(error => {
                    alert("Error");
                    console.log(error)
                });
            },


      }
}
</script>


<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

*{
    font-family: 'Anton', sans-serif
}
.container{

    background: none;
}

h1{
    color: aliceblue;
}


</style>
