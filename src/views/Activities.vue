<template>
  <div class="container">
      <div class="row align-items-center profile-header">
      <div class="col-md-12">
        
        <div id="mapHolder">
         <Map />

        </div>
      </div>
    </div>


  </div>
</template>
<script>
import Map from "../components/Map";


export default {
  name: "Activities",
  components: {
    Map,
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
