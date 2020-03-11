<template>
  <div class="container">
      <div class="row align-items-center profile-header">
      <div class="col-md-12">
          <Upload />
         
      </div>
    </div>


  </div>
</template>

<script>
import Upload from "../components/Upload";


export default {
  name: "New",
  components: {
    Upload,
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
