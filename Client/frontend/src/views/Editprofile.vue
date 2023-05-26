<template>


<div class="container my-5 z-depth-1">


  <!--Section: Content-->
  <section class="dark-grey-text p-5">

          <div class="card">
            <div class="header">
              <h2><strong>Profile</strong> Settings</h2>
            </div>

          </div>
    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-5 mb-4 mb-md-0">

        <div class="view">
          <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image">
        </div>

      </div>

      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-7 mb-lg-0 mb-4">
          <h3 class="font-weight-bold my-3">Change password</h3>

        <!-- Form -->
        <form  method="POST"   @submit.prevent="update">

          <form >
              <div class="body">
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div class="form-group">
                      <input type="text"  name="email" placeholder="email"  v-model="email">
                    </div>
                  </div>
                  <br>
                  <div class="col-lg-5 col-md-12">
                    <div class="form-group">
                      <input type="password"  name="current_Password"
                        placeholder="Current Password"  v-model="current_Password">
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="col-lg- col-md-12">
                    <div class="form-group">
                      <input type="password"  name="new_Password"
                        placeholder="New Password" v-model="new_Password">
                    </div>
                  </div>
                                <br>
                  <br>    <br>
                  <br>
                  <div class="col-12">
                    <button class="btn btn-info" >Save Changes</button>
                  </div>
                </div>

              </div>
            </form>

        </form>
        <!-- Form -->

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </section>
  <!--Section: Content-->



</div>

</template>

<script>
export default {
  name: 'Editprofile',
 data() {
    return {

        email: "",
        current_Password: "",
         new_password: "",


    };
  },
  methods: {
    async update() {

         const obj = {
        email: this.value,
        current_password: this.update.get('current_password').value,
        new_password: this.update.get('new_password').value
    };



    console.log(obj)
    this.update.$http.post = ("/user/update");
    this.update
      .update(obj)
      .subscribe(res => {
        console.log(res);

        this.$router.refresh(res.token)
      });
   }
    }

};


</script>
<style scoped>

</style>
