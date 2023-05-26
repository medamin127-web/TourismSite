<template>
    <div>
       <div class=' container col-6 pt-3'>
            <h2 class="display-4" style="border-bottom:white solid 2px">Update Guide Information</h2>
             <br>
            <form class="jumbotron" v-on:submit.prevent="handleUpdateForm" >
            <div class='form-row'>
                <div class='col-md-8'>
                    <label style='float:left;'>Name</label>
                    <input class='form-control' type='text'  style='float:left;' v-model="post.Name" >
                </div>
                <div class='col-md-4'>
                    <label style='float:left;'>Age</label>
                    <input type='number' class='form-control' v-model="post.Age" >
                </div>
            </div>
            <br>
            <div class='form-row'>
                    <div class='col-4'>
                            <label style='float:left;'>State</label>
                            <select id='inputState' class='form-control' v-model="post.State" >
                                 <option value='' disabled selected></option>
                                 <option>Sousse</option>
                                 <option>Jandouba</option>
                                 <option>Bizerte</option>
                                 <option>Nabeul</option>
                                 <option>Tozeur</option>
                            </select>
                    </div>
                    <div class='col-4'>
                        <label style='float:left;' >Phone Number</label>
                         <input type='text' class='form-control' v-model="post.PhoneNumber" >
                   </div>
                    <div class='col-4'>
                        <label style='float:left;' >Price</label>
                         <input type='number' class='form-control' placeholder="0.0TND" v-model="post.Price">
                   </div>
            </div>
            <br>

            <div class='form-row'>
                 <div class='col-6'>
                    <label style='float:left;' >Email</label>
                    <input type='text' class='form-control '  placeholder="@" v-model="post.Email">
                 </div>


                <div class='col-6'>
                    <label style='float:left;'>Image</label>
                    <input
          v-model="image"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Put an image URL ">
                </div>

            </div>

            <br>
            <br>
            <br>
            <div class='col-md-auto ' style='top:40px'>
                <button type='submit' class='btn btn-success mr-3' ><i class='fa fa-check' aria-hidden='true'></i>Submit</button>
                <button type='reset' class='btn btn-danger mr-3'><i class='fa fa-retweet' aria-hidden='true'></i>Reset</button>

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
        let tre = `http://localhost:3005/api/edit-Guide/${this.$route.params.id}`;
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

            let apiURL = `http://localhost:3005/api/update-Guide/${this.$route.params.id}`;
            let guides = {

            Image: this.image,
            Name: this.post.Name,
            Age: this.post.Age,
            State: this.post.State,
            PhoneNumber: this.post.PhoneNumber,
            Email:this.post.Email,
            Price:this.post.Price,
            };
            axios.patch(apiURL, guides).then((res) => {
                console.log(res)
                this.$router.push('/Admin/Addguide')
            }).catch(error => {
                console.log(error)
            });
        }



},

}
</script>

<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
*{
  font-family: 'Permanent Marker', cursive;
}



</style>
