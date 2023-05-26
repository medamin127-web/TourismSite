<template>
    <div>
      <div class="container" style="background: silver;">
          <h3 style="text-align:center">Filtre</h3>
          <div class="row">
                <select name="cars" id="cars" v-model="State" @change="SelectbyState">
                        <option value="" disabled selected >States</option>
                        <option value="All" selected="selected">All</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Jandouba">Jandouba</option>
                        <option value="Tozeur">Tozeur</option>
                    </select>
            </div>
      </div>
        <div class="container my-5 mt-2 " >
            <div class="row" style="padding-bottom: 100px;padding-top: 40px;">
                <div class="col-6 p-3 " id="row" v-for="Guide in Guides" :key="Guide._id" >
                    <div class="row" @click="Clickon(Guide._id)">
                    <img :src="Guide.files[0]" style="width:100px;float:left;width: 220px;height:200px;border-radius: 50%;" class="col-4">
                    <div style="font-size: 20px;" class="col-8">
                        <div class="row">
                     <div class="col-12"><p style="display: inline; font-size: inherit; margin-right: 5px;"><em>Name:</em></p><h4 style=" sans-serif;display: inline;">{{Guide.name}}</h4></div>
                     <div class="col-12"><p style="display: inline; font-size: inherit; margin-right: 5px;"><em>State:</em></p><h4 style=" sans-serif;display: inline;">{{Guide.country}}</h4></div>
                     <div class="col-12"><p style="display: inline; font-size: inherit; margin-right: 5px;"><em>Phone number:</em></p><h4 style=" sans-serif;display: inline;">{{Guide.phonenumber}}</h4></div>
                     <div class="col-12"><p style="display: inline; font-size: inherit; margin-right: 5px;"><em>Email:</em></p><h4 style=" sans-serif;display: inline;">{{Guide.email}}</h4></div>
                     <div class="col-12"><p style="display: inline; font-size: inherit; margin-right: 5px;"><em>Price:</em></p><h4 style=" sans-serif;display: inline;">{{Guide.Price}} DT</h4></div>
                     </div>
                     </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {

  name: 'Guides',

  data() {
    return {
        Guides:[],
        State:""
    };
  },
  created(){
    let URL150="http://localhost:8088/user/UserGuides";
         axios.get(URL150).then((res) => {
          this.Guides = res.data
          for(var i = 0; i <=this.Guides.length-1;i++)
          {
            var ageDifMs = Date.now() - Date.parse(this.Guides[i].birthdate);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var Age = Math.abs(ageDate.getUTCFullYear() - 1970);
            this.Guides[i].birthdate = Age
          }

            })
        .catch(error => {
          console.log(error)
        });
  },
  methods:{
    SelectbyState()
            {
         let URL150="http://localhost:8088/user/UserGuides2";
         if (this.State=="All")
         {
            axios.post(URL150,{Role:'Guide'}).then((res) => {
              this.Guides = res.data
        })
        .catch(error => {
          console.log(error)
        });
         }
        else
         {
          axios.post(URL150,{country:this.State,Role:'Guide'}).then((res) => {
              this.Guides = res.data
        })
        .catch(error => {
          console.log(error)
        });
        }
    },
    Clickon(id){
        localStorage.setItem('GuideId', id)
        this.$router.push("/Guide");
    }
    }
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');


h4{
    font-size: 22px;

}
#row:hover{
    background: burlywood;
    cursor: pointer;
}
.row select{

    width:100px;
    height: 30px;
    border-radius: inherit;
    font-family: cursive;
}
</style>
