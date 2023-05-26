<template>
<div style="padding:110px ">
 <div  style="display: inline;">


  <!-- Section: Block Content -->
  <section class="yes">
    <div class="container mt-3 ">
        <div class="col-md-auto ">
          <div id="alert" style="visibility: hidden;" class="alert alert-success" role="alert">
         This item has been deleted!
        </div>
            <h2 class="display-4 text-center" style="font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Places Management</h2>
        </div>

    </div>
    <div class="container " style="display: table;">
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">

              <table class="table table-striped table-dark tbody-primary table-hover ">
                <thead class="thead-dark">
                   <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Category</th>
                        <th scope="col" >State</th>
                        <th scope="col" >City</th>
                        <th scope="col" >Address</th>
                        <th scope="col" colspan="2" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(place) in showRepos" :key="place._id">
                        <td style="font-family: 'Comfortaa';" scope="row">{{place.id}}</td>
                        <td><img v-if="place.image" :src="place.image" style="width: 100px;height: 100px;max-width: 150px;border-radius: 15%;"></td>
                        <td style="font-family: 'Comfortaa';">{{place.name}}</td>
                        <td style="font-family: 'Comfortaa';">{{place.Category}}</td>
                        <td style="font-family: 'Comfortaa';">{{place.State}}</td>
                        <td style="font-family: 'Comfortaa';">{{place.City}}</td>
                        <td style="font-family: 'Comfortaa';">{{place.Adress}}</td>
                        <td  style="width: 10px;font-family: 'Comfortaa';"> <router-link :to="{name: 'updatePlace', params: { id: place._id } , query: {length:places.length , id1:place.id}}"  tag="button" class="btn btn-success pr-4 pl-3" >Edit
                          </router-link>
                          <button @click.prevent="deletePlace(place._id)" class="btn btn-danger mt-1">Delete</button></td>

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
      <div class="col-md-auto">
            <br>
            <br>
            <router-link :to="{name: 'Addnew' , query:{length:places.length}}" tag="button" class="btn btn-danger btn-lg">+ Add More</router-link>

        </div>
  </section>


    </div>

</div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
       places:[],
       PlacePage: 1,
       page: 1,
       loading: false,
       perPage: 5,
       i:0,
       m:0,

    };
  },
  created(){
    let apiURL = 'http://localhost:3005/api/place';
    axios.get(apiURL).then(res => {
    for (var i =res.data.length-1;i>=0;i--){
        this.places.push(res.data[i])
        }
        for (i = 0 ; i<=this.places.length-1;i++)
        {
          this.places[i].id = i
        }


}).catch(error => {
    console.log(error)
   });
  },
  methods:{
    prevPage () {
        this.page--
        this.i=this.i-5
       window.scrollTo({top: 0, behavior: 'smooth'})

      },
    nextPage () {
            this.page++
            this.i=this.i+5
      window.scrollTo({top: 0, behavior: 'smooth'})

      },
    change:function() {
     return "<router-link to='/'></router-link>";
    },


     deletePlace(id){
                let apiURL = `http://localhost:3005/api/delete-place/${id}`;
                let indexOfArrayItem = this.places.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.places.splice(indexOfArrayItem, 1);
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

        return this.places.slice(start, end)
      },
      lastPage () {
      let length = this.places.length
      let lastpage= length / this.perPage
      if(lastpage == 1 || lastpage % 2 == 0)
        return lastpage
      else
        return Math.floor(lastpage) + 1

      }
      },

};

</script>

<style type="text/css">

@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');


    @media (min-width: 768px) {
    .container-small {
        width: 300px;
    }
    .container-large {
        width: 970px;
    }
}
@media (min-width: 992px) {
    .container-small {
        width: 500px;
    }
    .container-large {
        width: 1170px;
    }
}
@media (min-width: 1200px) {
    .container-small {
        width: 700px;
    }
    .container-large {
        width: 1500px;
    }
}

.container-small, .container-large {
    max-width: 100%;
}

a#firstlink:link {
  color: #0099ff;
  background-color: transparent;
  text-decoration: none;
}

a#firstlink:visited {
  color: #0099ff;
  background-color: transparent;
  text-decoration: none;
}
a#secondlink:link {
  color: #ff0000;
  background-color: transparent;
  text-decoration: none;
}

a#secondlink:visited {
  color: #ff0000;
  background-color: transparent;
  text-decoration: none;
}
    #previous {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
   background-color: #f1f1f1;
  color: black;
  font-family: 'Righteous', cursive;
}

#previous:hover {
  background-color: #ddd;
  color: black;
}
a:hover {
 cursor: pointer;
}
@keyframes spinner {
  to { transform: rotate(360deg); }
}
.fa-spinner {
 animation: spinner 1s linear infinite;
}

body{
  padding:0;
}

.yes{
  margin-left: 100px;
}
.container{

    background: none;
}
</style>
