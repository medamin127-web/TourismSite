<template>
     <div  style="padding:120px ; height:900px">
            <h2 class="display-4" style="font-family: 'Sacramento', cursive;" >Adding a new Article</h2>
            <form  v-on:submit.prevent="createarticles" >


                        <input type="text" name="title" class="form-control" id="title" v-model="Title" placeholder="Enter Your Article Title">

                      <br>

                        <input type="text" name="title" class="form-control" id="title" v-model="Description" placeholder="Enter a description">

                <br>
                <br>

                 <div >

                    <input
          v-model="Picture"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Put an image URL ">
                    </div>


                <br>
                <br>

                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write the article here" v-model="Body"></textarea>
                <br>
                <br>


                            <select id="inputState" class="form-control" v-model="State">
                                 <option value="Sousse" selected>Sousse</option>
                                 <option value="Jandouba">Jandouba</option>
                                 <option value="Bizerte">Bizerte</option>
                                 <option value="Nabeul" >Nabeul</option>
                                 <option value="Tozeur" >Tozeur</option>
                            </select>
                        <br>
                        <br>
                        <button class="btn btn-lg btn-primary btn-block form-control" type="submit">Submit</button>
            <br>

                    <button type="reset" class="btn btn-lg btn-danger btn-block form-control" >Reset</button>

            </form>
            <br>
            <br>
            <br>
            <div class="col-md-auto ">
                <router-link to="/Admin/addarticle" tag="button" class="mt-10" id="previous">&laquo; Previous</router-link>
            </div>



    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from 'axios';




export default {

  name: 'Addnew',

  data: function () {
    return {
        Title:"",
        Description:"",
        Picture:"",
        Body:"",
        Writer:"",
        identifier:Number(this.$route.query.length) + 1,
        user:{},
        State:"None"
    };

  },
   methods: {

    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },

      verify:function(){
        if (this.text.length)
        {
            return this.isButtonDisabled=false;
        }
      },
      createarticles() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;



      let articles = {
        id:this.identifier,
        Picture: this.Picture,
        Title: this.Title,
        Description: this.Description,
        Text: this.Body,
        Date_Created:today,
        Writer: this.user.name,
        State:this.State
      };

      let apiURL = 'http://localhost:3005/api/create-Article';
      axios.post(apiURL, articles).then(() => {
                  this.$router.push('/Admin/addarticle')
                 }).catch(error => {
                    console.log(error)
                });
            }
    },

    created() {
    this.getUserDetails();
    console.log(this.user.name)
  }



}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

*{
    font-family: 'Noto Sans JP', sans-serif;

}


</style>
