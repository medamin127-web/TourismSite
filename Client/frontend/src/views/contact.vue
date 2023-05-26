<template>
    <div>


   <div class="container z-depth-1 my-5 px-0">

  <!--Section: Content-->
  <section class="my-md-5"
    style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(97).jpg'); background-size: cover; background-position: center center;">

    <div class="rgba-black-strong rounded p-5">

      <!-- Section heading -->
      <h3 class="text-center font-weight-bold text-white mt-3 mb-5">Contact Us</h3>

      <form class="mx-md-5" action="">

        <div class="row">
          <div class="col-md-6 mb-4">

            <div class="card">
              <div class="card-body px-4">

                <!-- Name -->
                <div class="md-form md-outline mt-0">Your Name
                  <input type="text" id="name" class="form-control" aria-placeholder="Your Name">
                  <label for="name"  ></label>
                </div>
                <br>
                <!-- Email -->
                <div class="md-form md-outline">
                  Email
                  <input type="text" id="email" class="form-control" aria-placeholder="Your Email Address">
                  <label for="email" ></label>
                </div>
                <br>
                <!-- Message -->
                <div class="md-form md-outline">Your Message
                  <textarea id="message" class="md-textarea form-control" rows="3" aria-placeholder="Your Message"></textarea>
                  <label for="message" ></label>
                </div>

                <button type="submit" class="btn btn-primary btn-md btn-block ml-0 mb-0">Submit inquiry</button>

              </div>
            </div>

          </div>
          <div class="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

            <h5 class="font-weight-bold">Address</h5>
            <p class="mb-0">1632 Main Street</p>
            <p class="mb-0">Sousse, 94126</p>
            <p class="mb-4 pb-2">Tunisia</p>

            <h5 class="font-weight-bold">Phone</h5>
            <p class="mb-4 pb-2">+ 01 234 567 89</p>

            <h5 class="font-weight-bold">Email</h5>
            <p>info@gmail.com</p>

          </div>
        </div>

      </form>

    </div>

  </section>
  <!--Section: Content-->


</div>

<div class="container-fluid mt-3 mb-5">

  <!-- Section: Block Content -->
  <section class="mb-4">



    <div class="card">

      <div class="row">
        <div class="col-md-6">

          <!-- Google Maps -->
          <div id="map-within-card-2" class="map-container rounded-left" style="height: 400px">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.9214998419147!2d10.612159914472441!3d35.80186043095573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8aaf32a4647f%3A0x7ae14f2d2c358385!2sInstitut%20Sup%C3%A9rieur%20des%20Etudes%20Technologiques%20de%20Sousse!5e0!3m2!1sfr!2stn!4v1607447200468!5m2!1sfr!2stn" frameborder="0"
              style="border:0" allowfullscreen></iframe>
          </div>
          <!-- Google Maps -->

        </div>

        <div class="col-10 col-md-4 mx-auto align-self-center py-4">

          <h6 class="font-weight-bold grey-text text-uppercase small">Head Office</h6>
          <h5 class="font-weight-normal mb-4">Tunisia, Sousse</h5>
          <p class="text-muted font-weight-light">2651 Main Street, Suit 124<br>Tunisia, Sousse, 98101</p>
          <p class="text-muted font-weight-light mb-0">Phone: +1 987 123 6548<br>Email: hello@thetheme.io</p>

        </div>
      </div>

    </div>

  </section>
  <!-- Section: Block Content -->

</div>
</div>
</template>

<script>
export default {

  name: 'contact',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>

      .map-container {
        overflow: hidden;
        position: relative;
        height: 0;
      }

      .map-container iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }

</style>
