<template>
    <div>
        <div class="container my-5 pt-2 pb-5">
             <div class="row">
                <img :src="Guide.Image" style="float:left;width: 350px;height: 350px;" >
                <div style="margin-left: 100px;">
                <h1 style="">{{Guide.name}}</h1><br>
                <h3 style=""><small >Age: </small>{{Guide.birthdate}}</h3>
                <h3 style=""><small >State: </small>{{Guide.country}}</h3>
                <h3 style=""><small >Phone number: </small>{{Guide.phonenumber}}</h3>
                <h3 style=""><small >Email: </small>{{Guide.email}}</h3>
                <h3 style=""><small >Price: </small>{{Guide.Price}}DT</h3>
                <div class="col-12">
                <image-rating  :increment="0.25"  :read-only="true" :show-rating="false"   :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="review"></image-rating>
            </div>
                </div>
            </div>

            <div  style="margin-top: 180px;">
                <image-rating  :increment="0.5"  :show-rating="false"   :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="rating"></image-rating>
                <div  class="row mb-5" >
                    <img style="width: 60px;border-radius:50%;height: 60px;"   :src="user.files[0]" >
                    <textarea class="form-control form-control-sm mb-3 col-8"  style="margin-left:5px" placeholder="Leave a review here"  v-model="Comment"></textarea>
                    <b-button pill variant="success" :disabled="Comment==''" class="col-2" style="margin-left:10px;margin-top: 10px;" @click="AddReview">Post</b-button>
                </div>
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
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";


export default {

  name: 'Guide',

  data() {
    return {
        Guide:[],
        GuideId:localStorage.GuideId,
        user: {},
        Comment:"",
        Reviews:[],
         review:null,
    };
  },
  created(){
     let URL150="http://localhost:8088/user/UserGuides2";
      axios.post(URL150,{_id:this.GuideId,Role:'Guide'}).then((res) => {
              this.Guide = res.data[0]
                  var ageDifMs = Date.now() - Date.parse(this.Guide.birthdate);
                  var ageDate = new Date(ageDifMs); // miliseconds from epoch
                  var Age = Math.abs(ageDate.getUTCFullYear() - 1970);
                  this.Guide.birthdate = Age

        let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{GuideId:this.GuideId}).then((res) => {
              this.Reviews = res.data
              let total=0

              for (var i=0;i<=this.Reviews.length-1;i++)
              {
                if (this.Reviews[i].Rating)
                {
                    total += Number(this.Reviews[i].Rating)
                }


              }

              this.review = total/this.Reviews.length


        }
        )

        })
        .catch(error => {
          console.log(error)
        });

        this.getUserDetails();

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
    AddReview(){
        let URL6 = "http://localhost:3005/api/create-review";
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        let Review = {
          UserName:this.user.name,
          UserImage:this.user.files[0],
          Comment:this.Comment,
          Rating:this.rating,
          GuideId:this.Guide._id,
          date:today

        }
        axios.post(URL6,Review).then(() => {
          this.$swal("Good job!", "Review Added!", "success")
          this.Comment=""
          let URL15 = "http://localhost:3005/api/FindReview"

        axios.post(URL15,{GuideId:this.GuideId}).then((res) => {
              this.Reviews = res.data
              this.$set(this.Reviews,res.data)
        }
        )
        })


        .catch(error => {
          console.log(error)
        });

      },
  }
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Yusei+Magic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');

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
</style>
