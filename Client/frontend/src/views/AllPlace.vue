<template>
        <div> <h3 class="text-center font-weight-bold mb-4 pb-2" style="padding-top: 70px;
    font-family: 'Poppins';
    font-size: 3em;
    color: azure;
    padding: 10px;
    text-shadow: 0 0 7px black;
    background: #606060;
    margin: auto;">{{Places[0].Category}}</h3>
    <div style=" margin: 20px;" >

        <div class="container" style="background:grey;padding: 10px 50px 20px;">
            <h2 style="text-align: center;text-align: center;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 2.5em;
    border-bottom: 6px solid white;
    width: fit-content;
    margin: auto;">Filter</h2>
            <h3 style="float: left;border-bottom: 5px solid white;font-family: 'Poppins';font-weight: bold;margin-bottom: 15px;font-size: 1.5em;">State</h3>
                <select name="cars" id="cars" class="form-control" v-model="State" @change="SelectbyState">
                    <option value="All">All</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Nabeul">Nabeul</option>
                    <option value="Bizerte">Bizerte</option>
                    <option value="Jandouba">Jandouba</option>
                    <option value="Tozeur">Tozeur</option>
                </select>
                <h3 style="float: left;border-bottom: 5px solid white;font-family: 'Poppins';font-weight: bold;margin-bottom: 15px;font-size: 1.7em;"  :hidden="!State || State=='All'">City</h3>
                     <select id="inputState" class="form-control" v-model="City" :hidden="State!='Sousse'" @change="SelectbyCity">
                        <option value="All">All</option>
                        <option value="Kantaoui">Kantaoui</option>
                        <option value="Sahloul">Sahloul</option>
                        <option value="Hammam Sousse">Hammam Sousse</option>
                        <option value="Khzema">Khzema</option>
                        <option value="Hergla">Hergla</option>
                        <option value="Takrouna">Takrouna</option>
                        <option value="Sousse Centre">Sousse Centre</option>
                        <option value="Sidi Bou Ali">Sidi Bou Ali</option>
                        <option value="Jawhra">Jawhra</option>
                    </select>
                    <select id="inputState" class="form-control" v-model="City" :hidden="State!='Jandouba'" @change="SelectbyCity">
                                 <option>All</option>
                                 <option>Aïn Draham</option>
                                 <option>Tabarka</option>
                                 <option>Bou Salem</option>
                                 <option>Ghardimaou</option>
                                 <option>Fernana</option>
                                 <option>Beni M'Tir</option>
                                 <option>Oued Melliz</option>
                                 <option>Balta-Bou Aouane</option>
                                 <option>Jandouba</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Bizerte'" @change="SelectbyCity">
                                 <option>All</option>
                                 <option>El Alia</option>
                                 <option>Bizerte</option>
                                 <option>Ghar El Melh</option>
                                 <option>Ghezala</option>
                                 <option>Ras Jabel</option>
                                 <option>Mateur</option>
                                 <option>Cap Zebib</option>
                                 <option>Menzel Bourguiba</option>
                                 <option>Raf Raf</option>
                                 <option>Cap Serrat</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Nabeul'" @change="SelectbyCity">
                                 <option>All</option>
                                 <option>Hammamet</option>
                                 <option>Kelibia</option>
                                 <option>Korbous</option>
                                 <option>El Haouaria</option>
                                 <option>Korba</option>
                                 <option>Menzel Temime</option>
                                 <option>Hammam El Guezaz</option>
                                 <option>Soliman</option>
                                <option>Kerkouane</option>
                                <option>Nabeul</option>

                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Tozeur'" @change="SelectbyCity">
                                 <option>All</option>
                                 <option>Degache</option>
                                 <option>Medina</option>
                                 <option>Nefta</option>
                                 <option>Tameghza</option>
                                 <option>Tozeur</option>
                            </select>

                </div>
        <div class="container my-5">
              <section class="magazine-section dark-grey-text">



                <div class=" row"  v-for="place in Places" :key="place._id">
                    <div style="margin-bottom: 40px;margin-top: 40px;">
                        <div id="qr" style="display:inline-block; height:3.8cm; " >
                            <img :src="place.image" style="height:3.8cm;">
                                </div>
                            <div style="float: right; margin-left: 40px;">
                             <h3 class="this" style="cursor:pointer" @click="Addthisname(place.name)" >{{place.name}}</h3>
                            <p class="lead mb-4" ><em>{{place.State}} <br> {{place.City}} <br> {{place.Adress}}</em></p>
                            </div>

                    </div>
                    <hr>
                </div>
                <div>

                </div>
        </section>
        </div>







 </div>


  </div>



</template>

<script>
import axios from "axios";

export default {

  name: 'AllPlace',

  data() {
    return {
        Category:"",
        Places:[],
        State:"Sousse",
        City:""
    };
  },
  created(){
    this.State = localStorage.StateName
    this.City = localStorage.CityName
    let tre = "http://localhost:3005/api/Findplace";
            this.Category=localStorage.Category
             axios.post(tre,{Category:this.Category,State:this.State,City:this.City}).then((res) => {
              this.Places = res.data
              console.log(this.Places)
        })
        .catch(error => {
          console.log(error)
        });
  },
  methods:{
    SelectbyState()
    {
         let url = "http://localhost:3005/api/Findplace";
         if (this.State=="All")
         {
            axios.post(url,{Category:this.Category}).then((res) => {
              this.Places = res.data
              console.log(this.Places)
        })
        .catch(error => {
          console.log(error)
        });
         }
        else
         {
          axios.post(url,{Category:this.Category,State:this.State}).then((res) => {
              this.Places = res.data
              console.log(this.Places)
        })
        .catch(error => {
          console.log(error)
        });
        }
    },
    Addthisname(name) {
      localStorage.setItem('Name', name)
      this.$router.push("/Place");
    },
    SelectbyCity(){
      console.log(this.City)
      let url3 = "http://localhost:3005/api/Findplace";

       if (this.City=="All")
         {
            axios.post(url3,{Category:this.Category,State:this.State}).then((res) => {
              this.Places = res.data
        })
        .catch(error => {
          console.log(error)
        });
         }
         else
         {
          axios.post(url3,{Category:this.Category,State:this.State,City:this.City}).then((res) => {
              this.Places = res.data

        })
        .catch(error => {
          console.log(error)
        });
        }
    }

  }
};
</script>

<style lang="css" scoped>
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

@media only screen and (min-width: 768px)
.srp-main--isLarge .srp-results.srp-list {
    padding: 0 8px;
    margin: 0;
}
@media only screen and (min-width: 768px)
.srp-main--isLarge .srp-list .s-item {
    padding: 10px 0;
}
.srp-list .s-item {
    width: 100%;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}
.s-item {
    position: relative;
    font-weight: 400;
    background: #fff;
    float: left;
    list-style: none;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transition-property: margin,padding,border;
    transition-property: margin,padding,border;
    border-bottom: 1px solid #ddd;
}
*, *:before, *:after {
    box-sizing: inherit;
}
user agent stylesheet
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
@media only screen and (min-width: 960px)
.srp-list .s-item__image-section ~ .s-item__info {
    width: 62%;
    width: -webkit-calc(100% - 227px);
    width: calc(100% - 227px);
}
@media only screen and (min-width: 600px)
.srp-list .s-item__image-section ~ .s-item__info {
    width: 58%;
    width: -webkit-calc(100% - 180px);
    width: calc(100% - 180px);
    padding: 0 0 0 16px;
}
.srp-list .s-item__info {
    float: left;
    padding: 0 10px;
}
select{
    border-radius: inherit;
    font-family: cursive;
}
a:hover {
  color: black;
  text-decoration:none
}
.this:hover{
    color:lightblue;
}
</style>
