<template>
   <div class="yes"  style="padding:110px " >
    <div class="container mt-3">
        <div class="col-md-auto ">
           <div id="alert" style="visibility: hidden;" class="alert alert-success" role="alert">
         This item has been deleted!
        </div>
            <h2 class="display-4 text-center" style="font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Articles Management</h2>
        </div>

    </div>
    <div class="tab" style="margin:auto">
    <div class="container">
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
              <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Picture</th>
                        <th scope="col" >Title</th>
                        <th scope="col" >Description</th>
                        <th scope="col" >Date-Created</th>
                        <th scope="col" >Writer</th>
                        <th scope="col" >Action</th>
                    </tr>
                </thead>
            <tbody class="table-light">
              <tr  v-for="article in showRepos " :key="article._id">
                <th style="font-family: 'Comfortaa';" scope="row">{{article.identifier}}</th>
                 <td><img v-if="article.Picture" :src="article.Picture" style="    width: 100px;height: 100px;max-width: 150px;border-radius: 15%;"></td>
                 <td style="font-family: 'Comfortaa';">{{article.Title}}</td>
                 <td style="font-family: 'Comfortaa';">{{article.Description}}</td>
                 <td style="font-family: 'Comfortaa';">{{article.Date_Created}}</td>
                 <td style="font-family: 'Comfortaa';">{{article.Writer}}</td>
                <td  style="width: 10px;font-family: 'Comfortaa';"> <router-link :to="{name: 'updateArticle', params: { id: article._id } , query: {length:articles.length , id1:article.id}}"  tag="button" class="btn btn-success pr-4 pl-3" >Edit
                     </router-link>
                          <button @click.prevent="deleteArticle(article._id)" class="btn btn-danger mt-1">Delete</button></td>
              </tr>
            </tbody>

         </table>
          <ul class="pagination pagination-md justify-content-center text-center">
        <li  class="page-item"
            :class="page === 1 ? 'disabled' : ''"
        >
          <a
             class="page-link"
             @click="prevPage"
          >
            Previous
         </a>
        </li>
        <li class="page-link" style="background-color: inherit">
          {{ page }} of {{ lastPage }}
        </li>
        <li  class="page-item"
            :class="page === lastPage ? 'disabled' : ''"
        >
          <a class="page-link"
            @click="nextPage"
          >
            Next
          </a>
        </li>
       </ul>
         </div>
         </div>
      </div>
    </div>
   </div>
    <div class="col-md-auto">
            <br>
            <br>
            <router-link :to="{name: 'newarticle' , query:{length:articles.length}}" tag="button" class="btn btn-danger btn-lg">+ Add More</router-link>

        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
       articles:[],
       ArticlePage: 1,
       page: 1,
       loading: false,
       perPage: 5,
    };
  },
  created(){
    let apiURL = 'http://localhost:3005/api/Article';
    axios.get(apiURL).then(res => {

    for (var i =res.data.length-1;i>=0;i--){
      this.articles.push(res.data[i])
      }
        for (i = 0 ; i<=this.articles.length-1;i++)
        {
          this.articles[i].identifier = i
        }
  }).catch(error => {
                console.log(error)
            });
        },
  methods:{
    prevPage () {
        this.page--
       window.scrollTo({top: 0, behavior: 'smooth'})
      },
    nextPage () {
            this.page++
      window.scrollTo({top: 0, behavior: 'smooth'})
      },
    change:function() {
     return "<router-link to='/'></router-link>";
    },




     deleteArticle(id){
                let apiURL = `http://localhost:3005/api/delete-Article/${id}`;
                let indexOfArrayItem = this.articles.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.articles.splice(indexOfArrayItem, 1);
                        document.getElementById("alert").style.visibility= "visible";
                    }).catch(error => {
                        console.log(error)
                    });
                }
               }

  },
  computed: {
      showRepos () {
        let start = (this.page - 1) * this.perPage
        let end = start + this.perPage

        return this.articles.slice(start, end)
      },
      lastPage () {
      let length = this.articles.length
      let lastpage= length / this.perPage
      if( lastpage == 1 || lastpage % 2 == 0)
        return lastpage
      else
        return Math.floor(lastpage) + 1

      }
      },

};
</script>

<style lang="css" scoped>
a:hover {
 cursor: pointer;
}
@keyframes spinner {
  to { transform: rotate(360deg); }
}
.fa-spinner {
 animation: spinner 1s linear infinite;
}

.tab{
  margin-right: 70px;
  margin-left: 70px;
}

.container{

    background: none;
}
</style>
