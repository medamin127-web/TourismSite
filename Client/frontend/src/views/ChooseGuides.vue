<template>
    <div class="main">
        <div class="container my-5 " >
             <section class="magazine-section dark-grey-text " >
                <h2 class="text-center font-weight-bold mb-4 pb-2">Choose a guide</h2>
                <div class="row">
                    <div class="col-3 mt-5 " v-for="guide in guides" :key="guide._id" style="text-align:center">
                        <img style="border-radius:50%;width:200px;height:200px;" :src="guide.files[0]">
                        <div>
                        <h3 style="width: max-content;margin: auto; margin-top: 15px;">{{guide.name}}</h3>
                        <h5 style="margin-top: 15px;">{{guide.birthdate}}</h5>
                        <h5 style="margin-bottom: 15px;">{{guide.country}}</h5>
                        <h5>{{guide.Price}} DT</h5>
                        </div>
                        <input style="margin-top: 30px;height: 25px;" type="radio" id="male" name="gender" :value="guide._id"  v-model="guideid" >
                    </div>

                </div>
                 <div class="row">
                    <div class="col-12" style="text-align: center;margin-top: 20px;margin-bottom: 30px;">
                        <div class="btn_wrapper">
                            <router-link :to="{name:'Confirm',params:{package:Package,guide:guideid}}" tag="button" class="btn btn btn-rounded btn-amber accept mr-2" >Confirm</router-link>
                            <router-link to="/" tag="button"  class="btn btn-red "  >Cancel</router-link>
                        </div>
                    </div>
                    </div>

             </section>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {


  name: 'ChooseGuides',

  data() {
    return {
        guides:[],
        State:this.$route.query.State,
        Package:[],
        guideid:""
    };
  },
  created(){

    let check = {
        country:this.State,
        Role:'Guide'
    }


    let tre = `http://localhost:3005/api/edit-Package/${this.$route.params.id}`;
    axios.get(tre).then((res) => {
            this.Package = res.data;
            console.log(this.Package)
        })
        .catch(error => {
          console.log(error)
        });

    let URL150="http://localhost:8088/user/UserGuides2"
     axios.post(URL150,check).then(res => {
      this.guides = res.data;
       for(var i = 0; i <=this.guides.length-1;i++)
          {
            var ageDifMs = Date.now() - Date.parse(this.guides[i].birthdate);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var Age = Math.abs(ageDate.getUTCFullYear() - 1970);
            this.guides[i].birthdate = Age
          }
      console.log(this.guides)
  }).catch(error => {
                console.log(error)
            });
  }
};

</script>

<style lang="css" scoped>
.main{
  padding:250PX;
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
</style>
