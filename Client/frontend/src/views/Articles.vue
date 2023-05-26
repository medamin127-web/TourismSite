<template>
<div >
<div class="container my-5">


  <!--Section: Content-->
  <section class="magazine-section dark-grey-text" >

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold mb-4 pb-2">Check Out Our Articles</h3>
    <!-- Section description -->
    <p class="text-center w-responsive mx-auto mb-5">To further discover Tunisia and it's rich and long history , try to read the articles that we offer. We want to best introduce you to our great country and let you know that you're in treat .</p>

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-lg-6 col-md-12 mb-4">

        <!-- Featured news -->
        <div class="single-news">

          <!-- Image -->
          <div class="view overlay rounded z-depth-1-half mb-4">
            <img class="img-fluid" :src="articles[0].Picture"  alt="Sample image">
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Data -->


          <!-- Excerpt -->
          <button class="btn btn-flat text-primary p-0 mx-0" @click="ReadMore(articles[0]._id)" ><h3 class="font-weight-bold dark-grey-text ">{{articles[0].Title}}</h3></button>
          <image-rating  :increment="0.25"  :read-only="true" :show-rating="false" :item-size="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="articles[0].TotalStars"></image-rating>
          <p class="dark-grey-text">{{articles[0].Text}}</p>
          <div class="news-data d-flex justify-content-between" >
            <p class="font-weight-bold dark-grey-text" ><i class="far fa-clock"></i>{{articles[0].Date_Created}}</p>
          </div>
           <button class="btn btn-flat text-primary p-0 mx-0" style="float:right" @click="ReadMore(articles[0]._id)">Read more<i class="fa fa-angle-right ml-2"></i></button>
        </div>
        <!-- Featured news -->

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-lg-6 col-md-12 mb-4">

        <!-- Small news -->
        <div class="single-news mb-4">

          <!-- Grid row -->
          <div class="row "  v-for="old in OldestArticles" :key="old._id" >

            <!-- Grid column -->
            <div class="col-md-3" >

              <!--Image-->
              <div class="view overlay rounded z-depth-1 mb-4" style="margin-bottom:20px" >
                <img class="img-fluid" style="margin-bottom:20px;height:80px" :src="old.Picture" alt="Sample image">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-9" >

              <!-- Excerpt -->

              <div class="d-flex justify-content-between "  >
                <div class="col-11 text-truncate ">
                   <h5 class="font-weight-bold dark-grey-text"><button class="btn btn-flat text-primary p-0 mx-0" style="text-decoration:none" @click="ReadMore(old._id)">{{old.Title}}</button></h5>
                   <image-rating  :increment="0.25"  :read-only="true" :show-rating="false" :item-size="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="articles[0].TotalStars"></image-rating>
                   <p>{{old.Description}}</p>
                   <p class="font-weight-bold dark-grey-text" style="float:right"><i class="far fa-clock"></i>{{old.Date_Created}}</p>
                </div>

                <div class="that"  style="color: #0cb7ea;font-size: 20px;margin: 20px;" @click="ReadMore(old._id)"><i class="fas fa-angle-double-right "></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="text-center">
      <router-link to="/AllArticles" class="tags__link" style="text-decoration:none;" >See All Articles</router-link>
    </div>
    </section>

  </div>
<div class="container mt-5">


  <!--Section: Content-->
  <section class="">

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold mb-5">Latest Articles</h3>

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div  v-for="Article in LatestArticles" :key="Article._id" class="col-lg-4 col-md-12 mb-lg-0 mb-4">

        <!-- Card -->
        <div class="card hoverable">

          <!-- Card image -->
          <img class="card-img-top" style="height:220px;" :src="Article.Picture" alt="Card image cap">

          <!-- Card content -->
          <div class="card-body">

            <!-- Title -->
            <button class="btn btn-flat text-primary p-0 mx-0 font-weight-bold " @click="ReadMore(Article._id)" >{{Article.Title}}</button>
            <image-rating  :increment="0.25"  :read-only="true" :show-rating="false" :item-size="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="Article.TotalStars"></image-rating>
            <!-- Text -->
            <p class="card-title text-muted font-small mt-3 mb-2">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
             <button class="btn btn-flat text-primary p-0 mx-0" @click="ReadMore(Article._id)">Read more<i class="fa fa-angle-right ml-2"></i></button>

          </div>

        </div>
        <!-- Card -->

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->
  </section>
  <!--Section: Content-->
  </div>

<div class="container mt-5">


  <!--Section: Content-->
  <section class="">

    <!-- Section heading -->
    <h3 class="text-center font-weight-bold mb-5">Most Read Articles</h3>

    <!-- Grid row -->
     <div class="row">

      <!-- Grid column -->
      <div  v-for="Article in ThreeSortedArticles" :key="Article._id" class="col-lg-4 col-md-12 mb-lg-0 mb-4">

        <!-- Card -->
        <div class="card hoverable">

          <!-- Card image -->
          <img class="card-img-top" style="height:220px;" :src="Article.Picture" alt="Card image cap">

          <!-- Card content -->
          <div class="card-body">

            <!-- Title -->
            <button class="btn btn-flat text-primary p-0 mx-0 font-weight-bold " @click="ReadMore(Article._id)" >{{Article.Title}}</button>
            <image-rating  :increment="0.25"  :read-only="true" :show-rating="false" :item-size="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="Article.TotalStars"></image-rating>
            <!-- Text -->
            <p class="card-title text-muted font-small mt-3 mb-2">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.</p>
             <button class="btn btn-flat text-primary p-0 mx-0" @click="ReadMore(Article._id)">Read more<i class="fa fa-angle-right ml-2"></i></button>

          </div>

        </div>
        <!-- Card -->

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->
  </section>
  <!--Section: Content-->
  </div>
</div>
</template>

<script>

import axios from "axios";
export default {

  name: 'Articles',

  data() {
    return {
      articles:[],
      LatestArticles:[],
      review:null,
      OldestArticles:[],
      Reviews:[],
      SortedArticles:[]
    };
  },
   created(){
    let apiURL = 'http://localhost:3005/api/Article';
    axios.get(apiURL).then(res => {
      this.articles = res.data;
      this.SortedArticles.push(...this.articles);
       this.SortedArticles.sort((a, b) => parseFloat(b.ReadCount) - parseFloat(a.ReadCount))
      console.log(this.SortedArticles)
      for (var i=this.articles.length-1; i>=this.articles.length-3;i--)
      {
        this.LatestArticles.push(this.articles[i])
      }
      for (var j=1;j<=4;j++)
      {
          this.OldestArticles.push(this.articles[j])
      }

      let URL20 = "http://localhost:3005/api/FindReview";
      axios.post(URL20).then(res => {
        this.Reviews = res.data
      })

  }).catch(error => {
                console.log(error)
            });


        },
         computed: {
          ThreeSortedArticles(){
            let Three=[]
            for (var i = 0; i <= 2; i++) {
            Three.push(this.SortedArticles[i])

          };

            return Three
          }
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
.tags__link {
    display: inline-block;
    border: 1px solid #0097a7;
    border-radius: 30px;
    margin: 5px;
    padding: 9.5px 20px;
    font-size: 14px;
    font-weight: 700;
    font-family: Lato,sans-serif;
    transition: all .1s linear;
    color:#0097a7
}
.tags__link:hover {
    background-color: #0097a7;
    color: #fff;
    }

  .that:hover{
    cursor: pointer;

}

</style>
