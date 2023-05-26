<template >
   <div style="padding:110px ; height:900px">
    <div class="container mt-3" >
        <div class="col-md-auto ">
          <div id="alert" style="visibility: hidden;" class="alert alert-success" role="alert">
         This item has been deleted!
        </div>
            <h2 class="display-4 text-center" style="font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Guides Management</h2>
        </div>
    </div>
    <div class="container">
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
              <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Age</th>
                        <th scope="col" >State</th>
                        <th scope="col" >Phone Number</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
            <tbody class="table-light">
              <tr>
                 <tr v-for="(guide) in showRepos " :key="guide._id">
                        <td style="font-family: 'Comfortaa';" scope="row">{{guide.id}}</td>
                        <td><img v-if="guide.files[0]" :src="guide.files[0]"  style="width: 100px;height: 100px;max-width: 150px;border-radius: 50%;"></td>
                        <td style="font-family: 'Comfortaa';">{{guide.name}}</td>
                        <td style="font-family: 'Comfortaa';">{{guide.birthdate}}</td>
                        <td style="font-family: 'Comfortaa';">{{guide.country}}</td>
                        <td style="font-family: 'Comfortaa';">{{guide.phonenumber}}</td>
                        <td style="font-family: 'Comfortaa';">{{guide.email}}</td>
                        <td style="font-family: 'Comfortaa';">{{guide.Price}}</td>
                        <td style="width: 10px;font-family: 'Comfortaa';"><button @click.prevent="deleteGuide(guide._id)" class="btn btn-danger mt-1 ">Delete</button></td>
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
       guides:[],
       ArticlePage: 1,
       page: 1,
       loading: false,
       perPage: 5,

    };
  },
  created(){
   let URL150="http://localhost:8088/user/UserGuides";
         axios.get(URL150).then((res) => {
          this.guides = res.data
          for (var k = 0 ; k<=this.guides.length-1;k++)
        {
          this.guides[k].id = k
        }

           for(var i = 0; i <=this.guides.length-1;i++)
          {
            var ageDifMs = Date.now() - Date.parse(this.guides[i].birthdate);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var Age = Math.abs(ageDate.getUTCFullYear() - 1970);
            this.guides[i].birthdate = Age
          }
            })
        .catch(error => {
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
     deleteGuide(id){
                let apiURL = `http://localhost:8088/user/delete-Guide/${id}`;
                let indexOfArrayItem = this.guides.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.guides.splice(indexOfArrayItem, 1);
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

        return this.guides.slice(start, end)
      },
      lastPage () {
      let length = this.guides.length
      let lastpage= length / this.perPage
      if( lastpage == 1 || lastpage % 2 == 0)
        return lastpage
      else
        return Math.floor(lastpage) + 1

      }
      },
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

a:hover {
 cursor: pointer;
}
@keyframes spinner {
  to { transform: rotate(360deg); }
}
.fa-spinner {
 animation: spinner 1s linear infinite;
}
.container{

    background: none;
}
</style>
