<template>
<div>
    <div class="container my-5" >
        <div class="row">

            <div class="this col-3" v-for="State in States" @click="AddthisState(State.name)" :key="State._id">
                <img style="height: 170px;width: 254px;" :src="State.Pictures[0]">

               <h3 style="text-align: center;">{{State.name}}</h3>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'States',

  data() {
    return {
        States:[]
    };
  },

  created(){
    let url= 'http://localhost:3005/api/States';
     axios.get(url).then(res => {
      this.States = res.data;
       console.log(this.States)
  }).catch(error => {
                console.log(error)
            });
        },

        methods:{
            AddthisState(name){
            localStorage.setItem('Name', name)
            this.$router.push("/City");
            }
        }
};
</script>

<style lang="css" scoped>

.this:hover{
    transform: scale(1.1);
   cursor: pointer;
}
</style>
