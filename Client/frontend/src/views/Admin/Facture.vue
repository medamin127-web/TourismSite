<template>
   <div class="yes">
    <div class="container mt-3">
        <div class="col-md-auto ">
            <h2 class="display-4 text-center" style="margin-top: 50px;font-family: 'Comfortaa';color: #d7f4fa;border-radius: 60%;text-shadow: 0px 1px 4px black;">Bills Management</h2>
        </div>
        <div class="col-md-auto">
            <br>
            <br>

        </div>
    </div>


<div id="notification-area">
</div>
    <div class="container ">
        <div class="container">
        <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
              <table class="table table-striped table-dark tbody-primary table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >Id</th>
                        <th scope="col" >UserId</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >GuideId</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Package</th>
                        <th scope="col" >Date</th>

                    </tr>
                 </thead>
            <tbody class="table-dark">
              <tr  v-for="(Facture) in showRepos " :key="Facture._id">
                <td style="font-family: 'Comfortaa';">{{Facture.id}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.UserId}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.Name}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.GuideId}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.GuideName}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.Plan}}</td>
                 <td style="font-family: 'Comfortaa';">{{Facture.Date}}</td>
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
  name: "Facture",

  data() {
    return {
      Factures:[],
       PlacePage: 1,
       Namearray:[],
       page: 1,
       loading: false,
       perPage: 5,
       id:0,
       count:0,
       User:[],
       Guides:[]
    };
  },
   created(){

    let url = 'http://localhost:3005/api/Facture';
   axios.get(url).then(res => {

      for (var a =res.data.length-1;a>=0;a--){
          this.Factures.push(res.data[a])

        }

      for (var k = 0 ; k<=this.Factures.length-1;k++)
        {
          this.Factures[k].id = k
        }

      //let Arr = []
      for (var j=0;j<=this.Factures.length-1;j++){
        var word=""

      for (var i = 0;i<=this.Factures[j].Package[0].Places.length-1;i++)
      {
         word+=this.Factures[j].Package[0].Places[i].Time + "-" + this.Factures[j].Package[0].Places[i].name
          word+='\n'
      }
       for (var m = 0;m<=this.Factures[j].Package[0].Activity.length-1;m++)
      {
         word+=this.Factures[j].Package[0].Activity[m].Time + "-" + this.Factures[j].Package[0].Activity[m].name
          word+='\n'
      }

      //Arr.push(word)
      this.Factures[j].Plan = word
      this.Namearray.push(word)
    }
    let url80 = 'http://localhost:8088/user/FindUser';
   axios.post(url80).then(res => {
      this.User = res.data;


      for (var i = 0; i<=this.Factures.length-1;i++)
      {
        for (var j=0;j<=this.User.length-1;j++)
      {
        if (this.User[j]._id == this.Factures[i].UserId)
        {
          this.Factures[i].Name = this.User[j].name
          this.Factures[i].Email = this.User[j].email
        }
      }
      }

    })

    let url90 = 'http://localhost:8088/user/UserGuides';
   axios.post(url90).then(res => {
      this.Guides = res.data;

      for (var l=0; l<=this.Factures.length-1;l++)
      {
        for (var t=0;t<=this.Guides.length-1;t++)
      {
        if (this.Guides[t]._id == this.Factures[l].GuideId)
        {
          this.Factures[l].GuideName = this.Guides[t].name
        }
      }
      }


    })
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
      for (var i = 0 ; i <= this.Facture.length - 1; i++) {
        if(this.Facture[i].GuideId === this.Facturesearch){
          this.Facture = this.Facture[i];
          break;
        }
      };
    },

    search(){
       let url2 = 'http://localhost:3005/api/FindFacture';
        axios.post(url2,{name:this.Facturesearch}).then((res) => {
          console.log(res.data);
          this.Facture = res.data;

        }).catch(error => {
          console.log(error)
        });
      },
  },
  computed: {
      showRepos () {
        let start = (this.page - 1) * this.perPage
        let end = start + this.perPage

        return this.Factures.slice(start, end)
      },
      lastPage () {
      let length = this.Factures.length
      let lastpage= length / this.perPage
      if( lastpage == 1 || lastpage % 2 == 0)
        return lastpage
      else
        return Math.floor(lastpage) + 1

      }
      },

};


</script>
<style>
.container{

    background: none;
}
tbody{
  width:1000px
}
</style>
