<template>
    <div class="yes">
        <br>
        <br>
        <br>
        <div class="container">
        <h2 class="display-4" >Add new place</h2>
        <hr>
        </div>
        <br>
        <br>
        <br>

            <div class="container">
                <form  v-on:submit.prevent="createplaces" >
                    <div class="form-row">
                        <div class="col-8">
                            <input type="text" v-model="name" class="form-control " placeholder="Name">
                        </div>
                        <div class="form-group col-md-4">
                            <select id="inputState" class="form-control" v-model="Category">
                            <option selected disabled="">Category</option>
                            <option>Restaurant</option>
                            <option>Cafe</option>
                            <option>Museum</option>
                            <option>Monument</option>
                            <option>Beach</option>
                            <option>Amusement park</option>
                            <option>Photography location</option>
                            <option>Others</option>

                            </select>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="col-3">
                            <select id="inputState" class="form-control" v-model="State">
                                 <option value="" disabled selected>State</option>
                                 <option value="Sousse" >Sousse</option>
                                 <option>Jandouba</option>
                                 <option>Bizerte</option>
                                 <option>Nabeul</option>
                                 <option>Tozeur</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Sousse'">
                                 <option value="" disabled selected>City</option>
                                 <option>Kantaoui</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Sidi Bou Ali</option>
                                 <option>Jawhra</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Jandouba'">
                                 <option value="" disabled selected>City</option>
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
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Bizerte'">
                                 <option value="" disabled selected>City</option>
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
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Nabeul'">
                                 <option value="" disabled selected>City</option>
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
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Tozeur'">
                                 <option value="" disabled selected>City</option>
                                 <option>Degache</option>
                                 <option>Medina</option>
                                 <option>Nefta</option>
                                 <option>Tameghza</option>
                                 <option>Tozeur</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Address" v-model="Adress">
                        </div>
                    </div>
                    <br>
                    <br>

                    <div class='form-row'>
                        <div class="col-11">

                            <input
          v-model="image"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Put an image URL ">
                        </div>
                            <div class="col-1">
                                <b-button @click="clearFiles" class="bg-danger">Reset</b-button>
                            </div>

                    </div>

                       <div class='col-md-auto'>
                            <button type="submit" class="btn btn-success mt-5" :disabled="!name.length || !Category.length || !City.length || !State.length || !Adress.length" ><i class="fa fa-check" aria-hidden="true"></i>Submit</button>
                            <button type="reset" class="btn btn-danger mt-5 ml-3"><i class="fa fa-times" aria-hidden="true"></i>Reset</button>

                        </div>
                        <br>

                </form>

            </div>

    </div>
</template>

<script>

import axios from 'axios';

export default {

  name: 'Addnew',

  data: function () {
    return {
        name:"",
        Category:"",
        City:"",
        State:"",
        Adress:"",
        image:"",
        identifier:Number(this.$route.query.length) + 1,

    };

  },
   methods: {



      verify:function(){
        if (this.text.length)
        {
            return this.isButtonDisabled=false;
        }
      },
      createplaces() {


      let places = {
        id:this.identifier,
        name: this.name,
        Category: this.Category,
        State: this.State,
        City: this.City,
        Adress: this.Adress,
        image:this.image
      };

      let apiURL = 'http://localhost:3005/api/create-place';
      axios.post(apiURL, places).then(() => {
                  this.$router.push('/Admin/Addplaces')
                 }).catch(error => {
                    console.log(error)
                });
            }


},

}
</script>

<style lang="css" scoped>
   h2{
      font-family: 'Permanent Marker', cursive;
    }


.yes{
margin-left: 170px;}

.container{
    background: none;
}
body{
}
</style>
