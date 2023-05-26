<template>
   <div class="yes" style="padding:110px " >
    <div class="container mt-3 ">
        <div class="col-md-auto ">
          <div id="alert" style="visibility: hidden;" class="alert alert-success" role="alert">
         This item has been deleted!
        </div>
            <h2 class="display-4 text-center" style="font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Packages Management</h2>
        </div>
        <h3>{{name3}}</h3>


    </div>
    <div class="tab" style="    margin: auto;">
    <div class="container yes  "  >
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">

              <table class="table table-striped table-dark tbody-primary table-hover ">
                <thead class="thead-dark">
                   <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col">Duration(Days)</th>
                        <th scope="col">Plan</th>
                        <th scope="col" colspan="2" >Action</th>
                    </tr>
                </thead>
               <tbody style="font-weight: bold; font-weight:bold;white-space:pre-wrap;">
                    <tr v-for="(Package,i) in showRepos" :key="Package._id">
                        <td scope="row">{{i}}</td>
                        <td><img  :src="Package.image" style="width: 100px;height: 100px;max-width: 150px;border-radius: 15%;"></td>
                        <td style="padding: 40px;font-family: 'Comfortaa';">{{Package.name}}</td>
                        <td style="padding: 40px;font-family: 'Comfortaa';" >{{Package.Duration}}</td>
                        <td style="padding: 40px;font-family: 'Comfortaa';">{{Namearray[i]}}</td>
                        <td style="width: 10px;padding: 30px;font-family: 'Comfortaa';"><button @click.prevent="deletePlace(Package._id)" class="btn btn-danger mt-1">Delete</button></td>

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
     <div class="col-md-auto" style="margin-bottom: 20px;">

            <router-link to="/Admin/AddPackage" tag="button" class="btn btn-danger btn-lg">+ Add More</router-link>

        </div>

    </div>


</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
       Packages:[],
       Namearray:[],
       Activity:[],
       PlacePage: 1,
       page: 1,
       loading: false,
       perPage: 5,

    };
  },
  created(){
    let apiURL = 'http://localhost:3005/api/Packages';
    axios.get(apiURL).then(res => {

        for (var i =res.data.length-1;i>0;i--){
          this.Packages.push(res.data[i])
        }


      for (var j=0;j<=this.Packages.length-1;j++){
          var word=""
          for(var l=0;l<=this.Packages[j].Places.length-1;l++)
          {
           word+=this.Packages[j].Places[l].Time + "-" + this.Packages[j].Places[l].name
           word+='\n'
          }
          for(var m=0;m<=this.Packages[j].Activity.length-1;m++){
            word+=this.Packages[j].Activity[m].Time + "-" + this.Packages[j].Activity[m].name
            word+='\n'
          }

          this.Namearray.push(word)

      }
      console.log(this.Namearray)
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


     deletePlace(id){
                let apiURL = `http://localhost:3005/api/delete-package/${id}`;
                let indexOfArrayItem = this.Packages.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Packages.splice(indexOfArrayItem, 1);
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

        return this.Packages.slice(start, end)
      },
      lastPage () {
      let length = this.Packages.length
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

    h2{
       font-family: 'Goldman', cursive;
    }
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
margin-left: 200px;}


.tab{
  margin-right: 70px;
  margin-left: 70px;
}
</style>
