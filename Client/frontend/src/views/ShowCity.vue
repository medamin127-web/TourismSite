<template>
    <div >

          <div class="container pt-5">
            <div class="div"><h1 style="font-family: 'Carter One', cursive;font-weight: 700;font-size: 8rem;text-align: center;color: #fcedd8;">{{Name}}</h1></div>
            <lightbox :items="Images" style="" class="pt-3 pb-5"></lightbox>
            <div class="container " style="background:cadetblue">
            <div>
            <h2 class="float:left">About {{Name}}</h2>
            </div>
            <p id="p" style="font-size: 1em;
    font-family: 'Rubik';color: white;">{{Description}}</p>
            </div>
            </div>



    </div>
</template>

<script>
    import lightbox from "../views/lightbox.vue";
    import '@morioh/v-lightbox/dist/lightbox.css';
    import axios from "axios";

export default {

  name: 'ShowCity',

   components: {
   lightbox,
   },
  data() {
     return {
             Images:[],
             Name:"",
             Description:""

            }
  },
  created()
  {
     let URL01 = "http://localhost:3005/api/FindCity";
          this.itemname=localStorage.Name
        axios.post(URL01,{name:localStorage.CityName}).then((res) => {
              this.Images = res.data[0].Pictures
              this.Name = res.data[0].name
              this.Description = res.data[0].Description
              console.log(this.Images)
            })
        .catch(error => {
          console.log(error)
        });


  },
  methods:{
    CityPlaces(name) {
      localStorage.setItem('CityName' , name)
      this.$router.push("/AllPlace");
    }
  }
};


</script>

<style lang="css" scoped >
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
.gallery-container {
  height: 604.8px;
  width: 750px;
}

.gallery-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.div{

      background: #d52e3f;
      height:200px
}

#p {
    text-align: center;
    font-family: "Helvetica";
    font-size:0.8rem;
}
.div h1{
  text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b00, 35px 35px 0px #c11a2b00, 40px 40px 0px #c11a2b00, 45px 45px 0px #c11a2b00
}

</style>
