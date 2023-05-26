<template>
    <div>
       <div class=' container col-6 pt-3'>
            <h2 class="display-4" style="border-bottom:white solid 2px">Add New Guide</h2>
             <br>
            <form class="jumbotron" v-on:submit.prevent="createguides" >
            <div class='form-row'>
                <div class='col-md-8'>
                    <label style='float:left;'>Name</label>
                    <input class='form-control' type='text'  style='float:left;' v-model="Name" >
                </div>
                <div class='col-md-4'>
                    <label style='float:left;'>Age</label>
                    <input type='number' class='form-control' v-model="Age" >
                </div>
            </div>
            <br>
            <div class='form-row'>
                    <div class='col-4'>
                            <label style='float:left;'>State</label>
                            <select id='inputState' class='form-control' v-model="State" >
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
                         <input type='text' class='form-control' v-model="PhoneNumber" >
                   </div>
                    <div class='col-4'>
                        <label style='float:left;' >Price</label>
                         <input type='number' class='form-control' placeholder="0.0TND" v-model="Price">
                   </div>
            </div>
            <br>

            <div class='form-row'>
                 <div class='col-6'>
                    <label style='float:left;' >Email</label>
                    <input type='text' class='form-control '  placeholder="@" v-model="Email">
                 </div>


                <div class='col-6'>
                    <label style='float:left;'>Image</label>
                   <input
          v-model="Image"
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
            <div class='col-md-auto '>
                <router-link to='/Admin/Addguide' tag='button' class='mt-10' id='previous'>&laquo; Previous</router-link>
            </div>
            </div>
       </div>


</template>
<script>
import axios from 'axios';

export default {



  data: function () {
    return {
        Name:"",
        Image:"",
        State:"",
        Age:"",
        PhoneNumber:"",
        Email:"",
        Price:"",
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
      createguides() {


      let guides = {
        id:this.identifier,
        Image:this.Image,
        Name: this.Name,
        Age: this.Age,
        State: this.State,
        PhoneNumber: this.PhoneNumber,
        Email: this.Email,
        Price: this.Price,
      };

      let apiURL = 'http://localhost:3005/api/create-Guide';
      axios.post(apiURL, guides).then(() => {
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
