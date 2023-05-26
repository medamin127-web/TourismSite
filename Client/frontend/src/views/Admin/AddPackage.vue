<template>
    <div class="yes">
        <div class="container ">
             <div class="col-md-auto ">
          <div id="alert" style="visibility: hidden;" class="alert alert-success" role="alert">
            Package Has Been Added!
            </div>
        </div>

        <h2 class="display-4" >Add new Package</h2>
        <hr>
        </div>
        <br>
        <br>
        <br>
            <div class="container">
                <form  v-on:submit.prevent >
                    <div class="form-row">
                        <div class="col-4">
                            <h4>Add name to the package</h4>
                        </div>
                        <div class="col-8">
                            <h4>Choose a state</h4>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-6">
                            <input type="text" class="form-control" id="exampleInputEmail1"  @focus="myFunction" aria-describedby="emailHelp" placeholder="package name" v-model="Package_name" >
                        </div>
                        <div class="col-6">
                            <select id="inputState" class="form-control" v-model="State" @change="specifiedState" >
                                 <option value="" disabled selected>State</option>
                                 <option value="Sousse" >Sousse</option>
                                 <option>Jandouba</option>
                                 <option>Bizerte</option>
                                 <option>Nabeul</option>
                                 <option>Tozeur</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-row ">
                        <div class="col-12" id="btns">
                            <button class="btn btn-info mr-1" @click="getPlacesname" :disabled="!State">Add Place</button>
                            <button class="btn btn-info ml-1" @click="getActivityname" :disabled="!State">Add Activity</button>
                        </div>
                    </div>
                    <div class="form-row " id="form" style="visibility: hidden;" >
                        <div class="col-3">
                            <select id="Category"  class="form-control" v-model="Category" @change="SpecifiedPlace" >
                                <option value="" disabled selected>Category</option>
                                <option>Restaurant</option>
                                <option>Cafe</option>
                                <option>Museum</option>
                                <option>Monument</option>
                                <option>Beach</option>
                                <option>Amusement Park</option>
                                <option>Natural Place</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <select id="Name" class="form-control"  v-model="PlaceName" >
                                <option v-for="Name in Names2" v-bind:key="Name.id">{{Name}}</option>
                            </select>

                        </div>
                        <div class="col-3" >
                            <input type="time" id="appt" class="form-control" name="appt"  v-model="Time1" >
                        </div>
                        <div class="col-2">
                            <button class="btn btn-warning form-control" id="btn1" @click="AddPlacetoPackage">Add To Package</button>
                        </div>
                        <div class="col-1">
                            <button class="btn btn-danger mr-1 form-control" id="btn1" @click="Cancel1">Cancel</button>
                        </div>
                    </div>

                    <div class="form-row " id="form2" style="visibility: hidden;" >
                        <div class="col-5">
                            <select id="Name"  class="form-control" v-model="ActivityName">
                                 <option v-for="Name in Names1" v-bind:key="Name.id">{{Name.name}}</option>
                            </select>
                        </div>
                        <div class="col-4" >
                            <input type="time" id="appt" class="form-control" name="appt" v-model="Time2" >
                        </div>
                        <div class="col-2">
                            <button class="btn btn-warning form-control" id="btn1" @click="AddActivitytoPackage">Add To Package</button>
                        </div>
                        <div class="col-1">
                            <button class="btn btn-danger mr-1 form-control" id="btn1" @click="Cancel2">Cancel</button>
                        </div>
                    </div>
                    <br>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Picture</th>
                                <th scope="col">Type</th>
                                <th scope="col">Name</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody  v-for="(plans,i) in Plan" v-bind:key="plans.id">
                            <tr>
                                <th scope="row">{{i}}</th>
                                <td><img  :src="plans.image" style="width:100px"></td>
                                <td v-if="plans.Category">{{plans.Category}}</td>
                                <td v-else>Activity</td>
                                <td >{{plans.name}}</td>
                                <td>{{plans.Time}}</td>

                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class='form-row'>
                        <div class="col-12">
                            <input v-model="image" type="url" class="form-control"  placeholder="Put an image URL ">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class='form-row'>
                        <div class="col-md-auto" style="margin: auto;">
                                <label>Duration</label>
                                <input v-model="duration" type="number" class="form-control">
                        </div>
                    </div>
                    <div class='form-row '>
                        <div class="col-md-auto" style="margin: auto;">
                            <button type="button" class="btn btn-success" style="margin-top:70px" @click="ConfirmPackage">Validate Package</button>
                        </div>
                    </div>
                </form>


            </div>

    </div>
</template>

<script>


import axios from 'axios';


export default {

name: 'AddPackage',

  data() {
    return {
       Package_name:"",
       State:"",
       Category:"",
       PlaceName:"",
       ActivityName:"",
       Time1:"",
       Time2:"",
       Names:[],
       Names1:[],
       Names2:[],
       image:"",
       duration:1,
       Places:[
       ],
       Activities:[
       ],
       Plan:[
       ],

       i:1,

    };
  },


methods: {

             getActivityname:function(){

                document.getElementById("form2").style.visibility= "visible";
                 document.getElementById("btns").style.visibility= "hidden";
                 /*
                 let apiURL2 = 'http://localhost:3005/api/AddActivity';
                 axios.post(apiURL2,{State:this.State}).then((res) => {
                    this.Names1 = res.data;
                    console.log(this.Names1)
                    }).catch(error => {
                        console.log(error)
                    });*/
                },


            getPlacesname() {

                document.getElementById("form").style.visibility= "visible";
                 document.getElementById("btns").style.visibility= "hidden";

                /*let apiURL = 'http://localhost:3005/api/getPlacesname';

                axios.post(apiURL,{State:this.State}).then((res) => {

                    this.Names = res.data;
                    console.log(this.Names);
                    }).catch(error => {
                        console.log(error)
                    });*/
                },
                /*SortPlan(){
                var j=0
                var l=1

                while (j<=this.Plan.length){
                for (var i=l;i<=this.Plan.length-1;i++)
                {
                     if(Number(this.Plan[i].Time)<Number(this.Plan[j].Time))
                     {
                        this.Plan[j]=this.Plan[i]


                    }
                     this.Plan2.push(this.Plan[j])
                     console.log("Plan2" + this.Plan2)

                }

                    j++;
                    l++
             }

             },*/
            AddPlacetoPackage:function(){

                let apiURL1 = 'http://localhost:3005/api/AddPlace';
                axios.post(apiURL1,{State:this.State,name:this.PlaceName,Category:this.Category}).then((res) => {
                    let Place=[
                        {
                            Time:"",

                         }]

                    Place[0]=res.data[0]
                    Place[0].Time=this.Time1
                    this.Places.push(Place[0])
                    console.log(this.Places);
                    this.Plan.push(Place[0])

                    }).catch(error => {
                        console.log(error)
                    });
                 this.PlaceName=""
                 this.Time=""


                 document.getElementById("form").style.visibility= "hidden";
                 document.getElementById("btns").style.visibility= "visible";

            },

             AddActivitytoPackage:function(){

                let apiURL3 = 'http://localhost:3005/api/AddActivity';
                 axios.post(apiURL3,{State:this.State,name:this.ActivityName}).then((res) => {

                    let Activity=[
                        {
                            Time:"",

                         }]
                    Activity[0]=res.data[0]
                    Activity[0].Time=this.Time2
                    this.Activities.push(Activity[0])
                    this.Plan.push(Activity[0])
                    console.log(this.Activities);
                    }).catch(error => {
                        console.log(error)
                    });

                 document.getElementById("form2").style.visibility= "hidden";
                 document.getElementById("btns").style.visibility= "visible";

            },

            Cancel1:function(){
                this.PlaceName="";
                this.Time="";
                 document.getElementById("form").style.visibility= "hidden";
                 document.getElementById("btns").style.visibility= "visible";

            },
             Cancel2:function(){


                 this.ActivitName="";
                 this.Time="";
                 document.getElementById("form2").style.visibility= "hidden";
                 document.getElementById("btns").style.visibility= "visible";


            },

            clearFiles:function(){
                document.getElementById("this").value= " ";
            },
            addr:function(){
                var x = document.getElementById("Name").value;
                this.PlaceName=x;
            },

             SpecifiedPlace (){

                this.Names2=[]
                for(var i=0 ; i<=this.Names.length-1;i++)
                {
                    if (this.Names[i].Category === this.Category)
                    {

                        this.Names2.push(this.Names[i].name);
                    }

                }

                console.log(this.Names2.length)

             },

             specifiedState(){

                let apiURL = 'http://localhost:3005/api/getPlacesname';

                axios.post(apiURL,{State:this.State}).then((res) => {

                    this.Names = res.data;
                    console.log(this.Names);
                    }).catch(error => {
                        console.log(error)
                    });

                    let apiURL2 = 'http://localhost:3005/api/AddActivity';
                 axios.post(apiURL2,{State:this.State}).then((res) => {
                    this.Names1 = res.data;
                    console.log(this.Names1)
                    }).catch(error => {
                        console.log(error)
                    });
                },
                ConfirmPackage(){

                let apiURL5 = 'http://localhost:3005/api/ValidatePackage';
                let Package = {
                        name:this.Package_name,
                        Places:this.Places,
                        Activity:this.Activities,
                        image:this.image,
                        Duration:this.duration
                    }
                axios.post(apiURL5,Package).then(() => {

                    this.$router.push('/Admin/AddPackage')
                    this.Plan=[]
                    document.getElementById("alert").style.visibility= "visible";
                    this.Package_name=""
                    this.State=""
                    this.Category=""
                    this.PlaceName=""
                    this.ActivityName=""
                    this.Time1=""
                    this.Time2=""
                    this.image=""
                    this.Places=[]
                    this.Activities=[]
                    document.getElementById("form").style.visibility= "hidden";
                    document.getElementById("btns").style.visibility= "visible";
                    document.getElementById("form2").style.visibility= "hidden";

                 }).catch(error => {
                    console.log(error)
                });

                },
                myFunction() {
                    document.getElementById("alert").style.visibility= "hidden";

                }


        },


};



</script>

<style lang="css" scoped>
   h2{
      font-family: 'Permanent Marker', cursive;
    }


.yes{
margin-left: 190px;}

.container{

    background: none;
}
</style>

