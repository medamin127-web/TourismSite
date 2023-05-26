<template>
    <div>
        <div class="container my-5" style="background-color: #00000045;">
            <section class="magazine-section dark-grey-text" >
               <div class="_4c3b6e4e88112fc8ef88512cbe7521ed-scss da51a6e223c7200d373a2fd0614d7c33-scss" style="padding: 20px;">
                    <div class="_1066d722d4c5fe45076daa358de0a969-scss" style="background-color: rgb(144, 32, 64);">
                    </div>
                    <div class="_1066d722d4c5fe45076daa358de0a969-scss _898a0ac18270b333d95d8402650e2c46-scss">
                    </div>
                    <div>
                    </div>
                    <div class="e606f708ec76d36e4cf363817b6b2ffd-scss" draggable="true">
                        <img  style="width: 320px" aria-hidden="false" draggable="false" loading="lazy" :src="Package.image" alt="Ten" class="_64acb0e26fe0d9dff68a0e9725b2a920-scss _4c838ef3d2b6da1a61669046bbfae3d1-scss">
                    </div>
                    <div class="faffb409617fd7cf35017fde898cf860-scss" style="margin-left: 20px;">
                        <h2 class="bab4e7e0003c98b59e58b925d59840f8-scss d043401fc6c1247d9bab1d03fb554b48-scss b4b36569a9650c59003ec88a4551c3ea-scss _7fccf2efe6726e6281233b60b6d78f1b-scss">Package</h2>
                        <span dir="auto" class="dc48565bba15548872ea84c715a5fee2-scss">
                            <h1 class="a12b67e576d73f97c44f1f37026223c4-scss" as="h1" style="padding: 0.08em 0px; font-size: 96px; line-height: 96px; visibility: visible;color:black">{{Package.name}}</h1>
                        </span>
                    <div class="aa7a8f31f242c15e7de49ff9c08edebb-scss" style="color:black">
                        <h5 class="mr-2" style="float: left;">{{Package.Duration}} Day(s) , </h5>
                        <h5>{{Package.State}}</h5>
                        <div class="button_cont" align="center" style="text-decoration=none;">
                        <router-link :to="{name:'ChooseGuides', params:{ Package_id: Package._id }, query:{State:Package.State}}" tag="button" class="example_a"  style="margin-top: 10px;float: left;"><span>Book now</span></router-link>
                        </div>
                    </div>

                </div>
                </div>
                <div class="row mt-3 mb-3" style="text-align:center" >
                    <div class="col-3">
                        <h3>#</h3>
                    </div>
                    <div class="col-3">
                    <img width="30px" src="https://www.flaticon.com/svg/static/icons/svg/2088/2088617.svg">
                    </div>
                    <div class="col-3">
                        <h3>Title</h3>
                    </div>
                    <div class="col-3">
                        <h3>Picture</h3>
                    </div>

            </div>
             <div class="row" style="padding-top: 50px;padding-bottom: 50px;text-align: center;background: mintcream;" v-for="(Plane,i) in Plan" :key="Plane._id" >
                    <div class="col-3">
                        <h5>{{i}}</h5>
                    </div>
                    <div class="col-3">
                    <h5>{{Plane.Time}}</h5>
                    </div>
                    <div class="col-3">
                        <h5>{{Plane.Category}} {{Plane.name}}</h5>
                    </div>
                    <div class="col-3">
                        <img width="auto" :src="Plane.image">
                    </div>

            </div>





        </section>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {

  name: 'ShowPackage',

  data() {
    return {
        Package:[],
        i:0,
        j:0,
        Plan:[],

    };
  },
  created() {

        let tre = `http://localhost:3005/api/edit-Package/${localStorage.id}`;
        axios.get(tre).then((res) => {
            this.Package = res.data;

            console.log(this.Package)
            for(var i=0;i<=this.Package.Places.length-1;i++)
            {
                this.Plan.push(this.Package.Places[i])
            }
             for(var j=0;j<=this.Package.Activity.length-1;j++)
            {
                this.Plan.push(this.Package.Activity[j])
            }

            console.log(this.Plan)
        })
        .catch(error => {
                        console.log(error)
                    });
      },
      methods: {
         Addj (){
              this.j++
         }
      }
};
</script>

<style lang="css" scoped>
.col-3{
    margin:auto;
}
._4c3b6e4e88112fc8ef88512cbe7521ed-scss.da51a6e223c7200d373a2fd0614d7c33-scss {
    max-height: 500px;
    min-height: 340px;
    height: 30vh;
}

._4c3b6e4e88112fc8ef88512cbe7521ed-scss {
    color: #fff;
    position: relative;
    padding: 0 32px 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    }
</style>
