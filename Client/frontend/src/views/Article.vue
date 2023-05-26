<template>
    <div>
        <div class="container  my-5">
            <div class="row">
                <div class="col-12">
                    <img style="max-width: 100%;width: 100%;height: 450px;" :src="post.Picture">
                </div>
                <div class="col-12 mt-4" >
                    <h2 style="text-align: center;font-size: 4em;">{{post.Title}}</h2>
                </div>
                <div class="col-12 mt-1" >
                    <h5 style="text-align: center;color:grey">{{post.Description}}</h5>
                </div>
                <div class="col-12 mt-5" >
                    <h2 style="text-align: center;font-size:1.2rem;font-family:'Josefin Sans';">{{post.Text}}</h2>
                </div>
                 <div class="col-12">
                    <image-rating  :increment="0.25"  :read-only="true" :show-rating="false"   style="padding-top: 40px;float: right;" :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="review"></image-rating>
                </div>
                <div class="mt-5" style="padding: 10px;">
                    <h4 class="col-6 mb-3" style="border-bottom: 2px solid lightgrey;">Written By:</h4>
                    <img width="50px" src="https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg" class="mr-2 mb-3">
                    <div  style="float: right;margin-top: 10px;font-family: 'Yusei Magic';"><h5 class="ml-6">{{post.Writer}}</h5>
                        <h7 style="float:left;margin-top: -8px;color: steelblue;font-size: 16px;font-family: cursive;">Admin</h7></div>
                    </div>
                    <div class="col align-self-end mt-4" style="float: right;font-size: larger;padding: 10px;">
                        <h5 class="font-weight-bold" style="float: right;font-family: 'Yusei Magic';"><i class="far fa-clock "></i>Date Created :{{post.Date_Created}}</h5>
                    </div>
                </div>
                <div  style="margin-top: 180px;">
                    <image-rating  :increment="0.5"  :show-rating="false"  :item-size="40" class="ml-5 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" v-model="rating"></image-rating>
                        <div  class="row mb-5" >
                            <img style="width: 60px;border-radius:50%;height: 60px;" :src="user.files[0]" >
                            <textarea class="form-control form-control-sm mb-3 col-8"  style="margin-left:5px" placeholder="Leave a review here"  v-model="Comment"></textarea>
                            <b-button pill variant="success" :disabled="Comment==''" class="col-2" style="margin-left:10px;margin-top: 10px;" @click="AddReview">Post</b-button></div>
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

</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
export default {

  name: 'Article',

  data() {
    return {
        post:[],
        review:null,
        Reviews:[],
        rating: 0,
        user:{},
        Comment:"",
        Stars:"",
    };
  },
  methods:{
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    AddReview(){
        console.log("hey")
        let URL6 = "http://localhost:3005/api/create-review";
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        let Review = {
          UserName:this.user.name,
          UserImage:this.user.files[0],
          ArticleId:this.post._id,
          Comment:this.Comment,
          Rating:this.rating,
          date:today

        }
        axios.post(URL6,Review).then(() => {
          this.$swal("Good job!", "Review Added!", "success")
          this.Comment=""
           let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{ArticleId:this.post._id}).then((res) => {
              this.Reviews = res.data
              this.$set(this.Reviews,res.data)
              let total=0
              for (var i=0;i<=this.Reviews.length-1;i++)
              {
                total += Number(this.Reviews[i].Rating)
              }
              this.review = total/this.Reviews.length
              let URL50 = `http://localhost:3005/api/update-Article/${localStorage.Articleid}`
              axios.patch(URL50,{TotalStars:this.review}).then(() => {
              })
        }
        )

        })


        .catch(error => {
          console.log(error)
        });

      },
  },
    created() {
         if (localStorage.jwt)
        {
            this.getUserDetails();
        }
        let tre = `http://localhost:3005/api/edit-Article/${localStorage.Articleid}`;
        axios.get(tre).then((res) => {
            this.post = res.data;
             let URL15 = "http://localhost:3005/api/FindReview"
        axios.post(URL15,{ArticleId:this.post._id}).then((res) => {
              this.Reviews = res.data
              let total=0
              for (var i=0;i<=this.Reviews.length-1;i++)
              {
                total += Number(this.Reviews[i].Rating)
              }
              this.review = total/this.Reviews.length
              let Count = Number(this.post.ReadCount) + 1
              console.log(Count)
              let URL50 = `http://localhost:3005/api/update-Article/${localStorage.Articleid}`

              axios.patch(URL50,{TotalStars:this.review,ReadCount:Count}).then((res) => {
                console.log(res.data)
              })
        }
        )

        })
        .catch(error => {
                        console.log(error)
                    });
      },
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
</style>
