<template>
     <div class=" container col-6 mt-4 ">
            <h2 class="display-4" style="font-family: 'Sacramento', cursive;" >Adding a new Article</h2>
            <form  v-on:submit.prevent="handleUpdateForm" >

                        <label for="title" style="float:left" >Title</label>
                        <input type="text" name="title" class="form-control" id="title"  v-model="post.Title" placeholder="Enter Your Article Title">

                      <br>
                        <label for="Desc" style="float:left">Description</label>
                        <input type="text" name="title" class="form-control" id="title" v-model="post.Description" placeholder="Enter a description">


                <br>
                <br>

                 <div class="col-12" >
                    <label for="title" style="float:left">Picture</label>
                   <input
          v-model="image"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Put an image URL ">
                    </div>


                <br>
                <br>
                    <label for="exampleFormControlTextarea1" style="float:left">Body</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write the article here" v-model="post.Text"></textarea>
                <br>
                <br>

                        <button class="btn btn-lg btn-primary btn-block form-control" type="submit">Submit</button>
            <br>

                    <button type="reset" class="btn btn-lg btn-danger btn-block form-control" >Reset</button>

            </form>
            <br>
            <br>
            <br>



    </div>
</template>
<script>

import axios from 'axios';

export default {

  data: function () {
    return {
        post:{},
        image:"",


    };

  },

  created() {
        let tre = `http://localhost:3005/api/edit-Article/${this.$route.params.id}`;
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

            let apiURL = `http://localhost:3005/api/update-Article/${this.$route.params.id}`;
            let articles = {
            Picture: this.image,
            Title: this.post.Title,
            Description: this.post.Description,
            Text: this.post.Text,
            Date_Created: this.post.Date_Created,
            Writer:this.image.Writer
            };
            axios.patch(apiURL, articles).then((res) => {
                console.log(res)
                this.$router.push('/Admin/addarticle')
            }).catch(error => {
                console.log(error)
            });
        }



},

}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

*{
    font-family: 'Noto Sans JP', sans-serif;

}

</style>
