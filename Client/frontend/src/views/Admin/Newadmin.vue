<template>
    <div class="container">
      <form  v-on:submit.prevent class="form-group">
        <div class="form-row">
            <div class="col-6">
                <input type="text" name="" placeholder="First name" class="form-control ">
            </div>
            <div class="col-6">
                <input type="text" name="" placeholder="Last name" class="form-control ">
            </div>
        </div>
        <br>

        <div class="form-row">
            <div class="col-6">
                <input type="text" name="" placeholder="@"  class="form-control ">
            </div>
            <div class="col-6">
                <input type="text" placeholder="*********" class="form-control ">
            </div>
        </div>
        <br>
        <div class='form-row'>
            <div class="col-11">
                <b-form-file v-model="file" ref="file-input" class="form-control mb-2"></b-form-file>
            </div>
            <div class="col-1">
                <b-button @click="clearFiles" class="form-control bg-danger">Reset</b-button>
            </div>
        </div>
        <br>
        <div class="form-row">
            <div class="col-6">
                <button type="submit" class="form-control btn btn-success "><i class="fa fa-check" aria-hidden="true"></i>&nbsp;Submit</button>

            </div>
            <div class="col-6">
                 <button type="reset" class="form-control btn btn-danger  ml-3"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;Reset</button>
            </div>
        </div>
        <br>
    </form>

     </div>
</template>

<script>
export default {

  name: 'Newadmin',

  data() {
    return {

    };
  },
  methods: {
      clearFiles() {
        this.$refs['file-input'].reset()
      },

      verify:function(){
        if (this.text.length)
        {
            return this.isButtonDisabled=false;
        }
      }
      },
  };
</script>

<style lang="css" scoped>
</style>
