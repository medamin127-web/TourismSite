<template>
   <div class="yes" style="padding:110px ">
    <div class="container mt-3">
        <div class="col-md-auto ">
            <h2 class="display-4 text-center" style="margin-top: 2px;font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">User Management</h2>
        </div>
        <div class="col-md-auto">
        </div>
    </div>
    <div class="container ">
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0" v-on:submit.prevent="search" style="padding: 20px;">
            <i class="fas fa-search" aria-hidden="true" style="font-size: 35px;
    color: #4a7274;"></i>
            <input style="height: 50px;
    font-family: 'Comfortaa';" class="form-control form-control-sm ml-3 w-75" type="text" v-model="usersearch" placeholder="Search name" aria-label="Search">
            <button style="padding: 10px;
    border-radius: 10%;
    font-family: 'Comfortaa';" class="btn btn-primary ml-3" >Search</button>
        </form>
        <div class="container">
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
              <table class="table table-striped table-dark tbody-primary table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Image</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Phone-number</th>
                        <th scope="col" >Country</th>
                        <th scope="col" >Birthdate</th>

                    </tr>
                </thead>
            <tbody>
              <tr v-for="(Client) in showRepos" :key="Client.id">
                <th scope="row" style="font-family: 'Comfortaa';">{{Client.id}}</th>
                <td><img  alt="..." style="width: 90px;height: 90px;max-width: 150px;border-radius: 50%;" :src="Client.files[0]"></td>
                <td style="font-family: 'Comfortaa';">{{Client.name}}</td>
                <td style="font-family: 'Comfortaa';">{{Client.email}}</td>
                <td style="font-family: 'Comfortaa';" >{{Client.phonenumber}}</td>
                <td style="font-family: 'Comfortaa';">{{Client.country}}</td>
                <td style="font-family: 'Comfortaa';">{{Client.birthdate}}</td>
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
</div>

</template>


    <script>

    import axios from "axios";
export default {

  data() {
    return {
      Client:[],
       PlacePage: 1,
       page: 1,
       loading: false,
       perPage: 7,
      i:0,
      usersearch:"",
    };
  },
   created(){

    let url = 'http://localhost:8088/user/Users';
    axios.get(url).then((res) => {
            this.Client = res.data;
            for (var k = 0 ; k<=this.Client.length-1;k++)
        {
          this.Client[k].id = k
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
    add:function(){
      return this.i+1;
    },

    find:function(){
      for (var i = 0 ; i <= this.Client.length - 1; i++) {
        if(this.Client[i].name === this.usersearch){
          this.Client = this.Client[i];
          break;
        }
      };
    },
    search(){
       let url2 = 'http://localhost:8088/user/Search';
        axios.post(url2,{name:this.usersearch}).then((res) => {
          console.log(res.data);
          this.Client = res.data;

        }).catch(error => {
          console.log(error)
        });
      },

  },
  computed: {
      showRepos () {
        let start = (this.page - 1) * this.perPage
        let end = start + this.perPage

        return this.Client.slice(start, end)
      },
      lastPage () {
      let length = this.Client.length
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
    @media (max-width:700px){
        .container {
            width:500px;
        }

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
.yes{
margin-left: 190px;}

</style>
