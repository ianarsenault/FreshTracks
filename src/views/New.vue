<template>
  <div class="container">
      <div class="row align-items-center profile-header">
      <div class="col-md-12">
        hello
          <Upload />
          <dropzone></dropzone>
         
      </div>
    </div>


  </div>
</template>

<script>
import Upload from "../components/Upload";
import Dropzone from '../components/Dropzone'


export default {
  name: "New",
  components: {
    Upload,
    Dropzone
  }
};
</script>




<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
</style>
