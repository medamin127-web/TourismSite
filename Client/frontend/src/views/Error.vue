<template>
<div>
    <div class="container p-5">
        <div style="padding: 20px;">
        <h2 style="font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 3em;
    text-align: center;" >Something Went Wrong!</h2>
    <p style="text-align: center;
    font-size: 1.2em;
    font-style: italic;font-family: 'Roboto';">We Apologize for this issue </p>
        <i class="fas fa-times" style="color: red;font-size: 350px;
    margin-left: 39%;"></i>
        </div>
        <router-link to="/" tag="button" style="width: 250px;    margin-top: 20px;
    margin-left: 40%;" class="btn btn-green accept"  >Return to Homepage</router-link>
    </div>

</div>
</template>

<script>
export default {

  name: 'Error',

  data() {
    return {

    };
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
