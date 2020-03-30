<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
      components: {
        VueContentLoading,
      },
    };
  </script>

  <template>
    <vue-content-loading :width="700" :height="100">
     
     <rect x="0" y="0" rx="4" ry="4" width="300" height="10" />
     <rect x="520" y="0" rx="4" ry="4" width="50" height="10" />

     <rect x="0" y="30" rx="4" ry="4" width="300" height="10" />
     <rect x="520" y="30" rx="4" ry="4" width="50" height="10" />

     <rect x="0" y="60" rx="4" ry="4" width="300" height="10" />
     <rect x="520" y="60" rx="4" ry="4" width="50" height="10" />

    </vue-content-loading>
  </template>