<template>
  <div id="contact" class="hello">
      <h3>Activities</h3>
            <table id="activities">
              <thead>
                <tr>
                  <td>Date</td><td>Creator</td><td>ID</td>
                </tr>
               </thead> 
                <tr v-for="item in activities" :key="item.ID">
                  <td>
                    {{ JSON.parse(item.metadata.S).gpxMeta.time }}
                  </td>
                  <td>
                    <a v-bind:href="'/activities?ID='+ item.ID.S ">{{ JSON.parse(item.metadata.S).gpxMeta.creator }} </a>
                  </td>
                  <td>
                    {{ item.ID.S}}  
                  </td>
                </tr>
            </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'List',
  props: {
    msg: String
  },
  data() {
    return {
      activities:'',
      message: '',
      response: '',
      success: '',
 
    }
  },
  methods: {
    getActivities() {
      axios({
        method: "Get",
        url: process.env.VUE_APP_APIGW_URL+'/activities',
        params:{"email": this.$auth.user.email},
      }).then(response => {
       
        this.success = 'Data retrieved successfully';
        //this.response = JSON.stringify(response, null, 2)
        this.activities= response.data.Items

      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response.status
      })

    },
  },
  mounted(){
     let act =  this.getActivities()
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app {
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}
form {
  width: 500px;
  padding: 10px 40px;
  margin: 0 auto;
  text-align: left;
}
  label {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: bold;
    margin-top:10px;
    margin-bottom:10px;
    
  }
  input, textarea {
    border: 1px solid #ccc;
    color: #333;
    width: calc(100% - 30px);
    font-size:20px;
    padding:10px;
    margin-bottom:20px;
  }
  input, textarea, button {
    border-radius: 4px;
    padding: 8px 15px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
  }
button {
  color:#000;
  border: none;
  width: calc(100% - 30px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #eee;
  cursor: pointer;
  font-size:20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  margin-top:20px;
  width: 100%;
  padding:10px;
}
#response{
   margin: 0 auto;
font-size: 14px;
text-align: left;
background: #eee;
padding: 20px;
width: auto;
overflow: scroll;
max-width: 400px;
border:solid;
  }

  table{
  border: solid 3px #eee !important;
  width:100%;
  margin-bottom:10px
}

table thead tr td{
  background-color: #eee;
  font-weight:100;
  font-style: italic;
}

table tr td{
  padding:10px; 
}
h3{font-style: italic; font-weight: 100;;}

</style>