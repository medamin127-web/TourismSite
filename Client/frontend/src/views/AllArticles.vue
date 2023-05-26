<template>
    <div>
        <div class="container my-5">
             <section class="magazine-section dark-grey-text">
            <h3 class="text-center font-weight-bold mb-4 pb-2">Browse through all of our articles</h3>
            <div class="row" >
                <div class="col-6  mb-4  " v-for="article in articles" :key="article._id">
                    <div class="container">
                     <div class="single-news ">
          <!-- Image -->
          <div class="view overlay rounded z-depth-1-half mb-4">
            <img class="img-fluid" :src="article.Picture" style="height: 291px;width: fit-content;" alt="Sample image">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Data -->


          <!-- Excerpt -->
          <button class="btn btn-flat text-primary p-0 mx-0" @click="ReadMore(article._id)"><h3 class="font-weight-bold dark-grey-text mb-3">{{article.Title}}</h3></button>
          <image-rating  :increment="0.25"  :read-only="true" :show-rating="false" :item-size="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="article.TotalStars"></image-rating>
          <p class="dark-grey-text" style="margin-top: 20px;">{{article.Description}}</p>
          <div class="news-data d-flex justify-content-between" >

            <div class="mb-3 mt-3">

                <div float="right">
                <img width="50px" src="https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg" class="mr-2 mb-3">
                <h7>{{article.Writer}}</h7>
                </div>
                <p class="font-weight-bold dark-grey-text " ><i class="far fa-clock"></i>{{article.Date_Created}}</p>
                </div>
             <button class="btn btn-flat text-primary p-0 mx-0" @click="ReadMore(article._id)">Read more<i class="fa fa-angle-right ml-2"></i></button>
          </div>
        </div>
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

  name: 'AllArticles',

  data() {
    return {
        articles:[],
    };
    },
    created(){
    let apiURL = 'http://localhost:3005/api/Article';
    axios.get(apiURL).then(res => {
      this.articles = res.data;
  }).catch(error => {
                console.log(error)
            });
        },
         methods:{
      ReadMore(id){
        localStorage.setItem('Articleid',id)
        this.$router.push('/Article')
      }
     }
    };


</script>

<style lang="css" scoped>

.this :hover{
    cursor: pointer;
}
</style>
