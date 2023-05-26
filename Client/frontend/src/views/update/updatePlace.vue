<template>
    <div>
        <br>
        <br>
        <br>
        <div class="container ">
        <h2 class="display-4" >Update Place</h2>
        <hr>
        </div>
        <br>
        <br>
        <br>
           <div class="container">
                <form  v-on:submit.prevent="handleUpdateForm" >
                    <div class="form-row">
                        <div class="col-8">
                            <input type="text"  class="form-control " placeholder="Name" v-model="post.name">
                        </div>
                        <div class="form-group col-md-4">
                            <select id="inputState" class="form-control" v-model="post.Category">
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
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Sousse'">
                                 <option value="" disabled selected>City</option>
                                 <option>Kantaoui</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Jawhra</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Jandouba'">
                                 <option value="" disabled selected>City</option>
                                 <option>Hammamet</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Jawhra</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Bizerte'">
                                 <option value="" disabled selected>City</option>
                                 <option>Hammamet</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Jawhra</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Nabeul'">
                                 <option value="" disabled selected>City</option>
                                 <option>Hammamet</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Jawhra</option>
                            </select>
                            <select id="inputState" class="form-control" v-model="City" :hidden="State!='Tozeur'">
                                 <option value="" disabled selected>City</option>
                                 <option>Hammamet</option>
                                 <option>Sahloul</option>
                                 <option>Hammam Sousse</option>
                                 <option>Khzema</option>
                                 <option>Hergla</option>
                                 <option>Takrouna</option>
                                 <option>Sousse Centre</option>
                                 <option>Jawhra</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Address" v-model="post.Adress" >
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
                            <button type="submit" class="btn btn-success mt-5" ><i class="fa fa-check" aria-hidden="true"></i>Submit</button>
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
        post:{},
        image:"",


    };

  },

  created() {
        let tre = `http://localhost:3005/api/edit-place/${this.$route.params.id}`;
        axios.get(tre).then((res) => {
            this.post = res.data;
        })
        .catch(error => {
                        console.log(error)
                    });
      },

   methods: {


      verify:function(){
        if (this.text.length)
        {
            return this.isButtonDisabled=false;
        }
      },

           handleUpdateForm() {

            let apiURL = `http://localhost:3005/api/update-place/${this.$route.params.id}`;
            let places = {

            name: this.post.name,
            Category: this.post.Category,
            State: this.post.State,
            City: this.post.City,
            Adress: this.post.Adress,
            image:this.image
            };
            axios.patch(apiURL, places).then((res) => {
                console.log(res)
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




</style>
