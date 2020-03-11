<template>
  <div class="container">
    <div class="row align-items-center profile-header">
      <div class="col-md-2 mb-3">
        <img
          :src="$auth.user.picture"
          alt="User's profile picture"
          class="rounded-circle img-fluid profile-picture"
        />
        </div>
        <div class="col-md-6 mb-7">
        <h2>{{ $auth.user.name }}</h2>
        <p class="lead text-muted">{{ $auth.user.email }}</p>
      </div>
      </div>
      <div class="row align-items-center profile-header">
      <div class="col-md-12">
        <div id="mapHolder">
         <Map />
        </div>
          <pre v-highlightjs="JSON.stringify($auth.user, null, 2)" class="rounded w-100"><code class="json"></code></pre>
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
