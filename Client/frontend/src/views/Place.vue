<template>
  <div>
<div v-if="Place">
  <div v-if="thing" class="alert alert-success" style="text-align: center;
    width: fit-content;
    margin: auto;" role="alert">
    <i class="fas fa-check"></i> <span><strong>Place Added to your custom package</strong></span>
  </div>
  <div class="container my-5" style=" width: fit-content;">
    <img :src="Place.image" style="width: 400px;">
    <div class="float-right">
    <h3  style="margin-left: 50px;margin-bottom: auto;">{{Place.name}}</h3>
    <h7 style=" margin-left: 70px;">{{Place.Category}} , {{Place.State}}</h7>
    <hr>
    <div class="row" style="margin-left: auto;">
    <h5 class="col-6">Address</h5>
    <h6 class="col-6">{{Place.Adress}},{{Place.City}}</h6>

    </div>
     <div class="col-12">
      <image-rating  :increment="0.25"  :read-only="true" :show-rating="false"   :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="review"></image-rating>
    </div>
    <div class="mt-5">

    <button style="float: right;margin-top: 50px;" class="btn btn-primary accept mr-2" @click="AddtoCart"><i class="fas fa-cart-plus"></i> Add To Cart</button>
    </div>
    </div>



    <div  style="margin-top: 180px;">
      <image-rating  :increment="0.5"  :show-rating="false"  v-if="user._id" :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="rating"></image-rating>
        <div  class="row mb-5" v-if="user._id">
        <img style="width: 60px;border-radius:50%;height: 60px;"   :src="user.files[0]" >
        <textarea class="form-control form-control-sm mb-3 col-8"  style="margin-left:5px" placeholder="Leave a review here"  v-model="Comment"></textarea>
        <b-button pill variant="success" :disabled="Comment==''" class="col-2" style="margin-left:10px;margin-top: 10px;" @click="AddReview">Post</b-button>

        </div>
        <h4 style="margin-bottom:50px;">Reviews {{Reviews.length}}</h4>
      <div class="row pt-3 mb-2"  v-for="Review in Reviews" :key="Review._id" >
        <image-rating  :increment="0.5"  :read-only="true" :show-rating="false"   :item-size="20" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="Review.Rating"></image-rating>
        <div class="container">
        <img :src="Review.UserImage" style="width: 60px;border-radius:50%;height: 60px;"  >
        <p style="float: right;">{{Review.date}}</p>
        <div>
        <h5>{{Review.UserName}}</h5>
        <h6><em>{{Review.Comment}}</em></h6>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
 <div v-else class=" container p-5" >

   <h2 style="font-family: 'Roboto';">Sorry,There's 0 Matching results</h2>
    <router-link to="/" tag="button" style="width: 250px;    margin-top: 20px;
    margin-left: 40%;" class="btn btn-green accept"  >Return to Homepage</router-link>

 </div>
</div>
</template>

<script>
import axios from "axios";
 import VueJwtDecode from "vue-jwt-decode";
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
export default {

  name: 'Place',

  data() {
    return {
       itemname:"",
       Place:[],
       user: {},
       thing:false,
       Client:[],
       Places:[],
       Time2:"",
       Comment:"",
       Stars:"",
       Reviews:[],
        rating: 0,
        review:null,
        false:false
    };
  },


  methods:{

    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    showAlert() {
      // Use sweetalert2

    },
    AddtoCart(){
         if (!localStorage.jwt)
         {
          this.$router.push('/Signin')
         }
         else{
        localStorage.setItem('StateName',this.Place.State)
        let url2= "http://localhost:3005/api/Create_Custom";
        this.Places.push(this.Place)

        console.log(this.Places)
        if (!this.Client.length)
        {
           let newPackage= {
          UserId:this.user._id,
          Places:this.Places,
          Activity:[],
          Duration:'1'
            }
          axios.post(url2,newPackage).then(() => {
          this.$swal("Good job!", "Item Added!", "success")
          this.$router.push('/AllPlace')


        })
        .catch(error => {
          console.log(error)
        });
        }

        else{
          let url3 = `http://localhost:3005/api/UpdateCustomPackage/${this.Client[0]._id}`;
           this.Client[0].Places.push(this.Place)

          let UpdatedClient = {
            Places:this.Client[0].Places
          }
          axios.patch(url3,UpdatedClient).then((res) => {
                console.log(res)
                this.$swal("Item Added!", "Place Successfully Added to your cart", "success")
                this.$router.push('/AllPlace')
            }).catch(error => {
              swal("Error", "Something Went Wrong", "error");
                console.log(error)
            });
        }
        }
      },


      AddReview(){
        let URL6 = "http://localhost:3005/api/create-review";
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        console.log(today)
        let Review = {
          UserName:this.user.name,
          UserImage:this.user.files[0],
          PlaceId:this.Place._id,
          Comment:this.Comment,
          Rating:this.rating,
          date:today

        }
        axios.post(URL6,Review).then(() => {
          this.$swal("Good job!", "Review Added!", "success")
          this.Comment=""
           let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{PlaceId:this.Place._id}).then((res) => {
              this.Reviews = res.data
              this.$set(this.Reviews,res.data)
        }
        )

        })


        .catch(error => {
          console.log(error)
        });

      },
      change(){
       document.getElementById("this").innerHtml = "url('https://img.favpng.com/11/17/20/yellow-star-color-clip-art-png-favpng-Ec3BDr3EkfR4YvNiTCcqY64pK.jpg')"
      }
    },

  created(){
    if (localStorage.jwt)
    {
      this.getUserDetails();
    }


    let tre = "http://localhost:3005/api/Findplace";
            this.itemname=localStorage.getItem("Name")
             axios.post(tre,{name:this.itemname}).then((res) => {
              this.Place = res.data[0]
               let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{PlaceId:this.Place._id}).then((res) => {
              this.Reviews = res.data
              let total=0
              for (var i=0;i<=this.Reviews.length-1;i++)
              {
                total += Number(this.Reviews[i].Rating)
              }
              console.log(total);
              this.review = total/this.Reviews.length
              console.log(this.review)

        }
        )


        })
        .catch(error => {
          console.log(error)
        });
        let url= "http://localhost:3005/api/FindCustom";
        axios.post(url,{UserId:this.user._id}).then((res) => {
              this.Client = res.data

        }
        )
        .catch(error => {
          console.log(error)
        });




  }
};
</script>

<style lang="css" scoped>
.btn_wrapper {
  left: 50%;
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.btn {

  border: 0;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-weight: 900;
  height: 50px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  transition: .3s;
  width: 200px;
}

.btn-green {
   border: 2px solid lightb;
}

.btn-green:hover {
  background-color: lightblue;
  color:white;
}



.popup {
  align-items: center;
  background-color: #252a34;
  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%), 0 3px 3px -2px rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  height: 100px;
  justify-content: center;
  margin: 25px;
  position: fixed;
  right: -400px;
  text-align: center;
  width: 300px;
}

.popup:hover {
  right: 0;
}

.popup-green {
  background-color: #35513e;
  border: 2px solid #47cf73;
}

.popup-red {
  background-color: #633d3d;
  border: 2px solid #ff3c41;
}

.bottom {
  bottom: 0;
}

.top {
  top: 0;
}

.slide-in {
  -webkit-animation: slide-in 0.5s forwards;
  animation: slide-in 0.5s forwards;
}

@-webkit-keyframes slide-in {
    100% { right: 0; }
}

@keyframes slide-in {
    100% { right: 0; }
}
input, textarea{
  width: 500px;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 10px;
  font-family: 'Sniglet', cursive;
  font-size: 1em;
  color: #676767;
  transition: border 0.5s;
  -webkit-transition: border 0.5s;
  -moz-transition: border 0.5s;
  -o-transition: border 0.5s;
  border: solid 3px #98d4f3;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;

}
input:focus, textarea:focus{
  border: solid 3px #77bde0;
}
.btn_wrapper {
  left: 50%;
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.btn {

  border: 0;
  border-radius: 25px;
  color: lightblue;
  cursor: pointer;
  font-weight: 900;
  height: 50px;
  overflow: hidden;
  padding: 10px;
  text-transform: uppercase;
  transition: .3s;
  width: 200px;
}

.btn-green {
   border: 2px solid lightblue;
}

.btn-green:hover {
  background-color:lightblue;
  color:white;
}

.btn-red {
  border: 2px solid #ff3c41;
}

.btn-red:hover {
  background-color: #633d3d;
}

.popup {
  align-items: center;
  background-color: #252a34;
  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%), 0 3px 3px -2px rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  height: 100px;
  justify-content: center;
  margin: 25px;
  position: fixed;
  right: -400px;
  text-align: center;
  width: 300px;
}

.popup:hover {
  right: 0;
}

.popup-green {
  background-color: #35513e;
  border: 2px solid #47cf73;
}

.popup-red {
  background-color: #633d3d;
  border: 2px solid #ff3c41;
}

</style>
