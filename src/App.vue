<template>
<div>
   <BootstrapTest />
</div>

<div>
  <h1>Daten aus einer REST - API, via Axion</h1>
  <hr>
  <button v-on:click="loadUser">Load User</button>
  <div v-if="showUser">
    <div class="row">
      <div class="col">
        <p> GET call</p>
      </div>
      <div class="col">
        <p>Vorname: {{ user.firstname }}</p>
        <p>Nachname: {{ user.lastname }}</p>
        <p>Standr: {{ user.city }}</p>
      </div>
    </div>
  </div>
  <hr>
</div>
</template>

<script>
import BootstrapTest from './components/BoostrapTest'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    BootstrapTest
  },
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        city: ''
      },
      showUser: false
    }
  },
  mounted() {
/*    
    axios
      .get('http://localhost:8080/helloWorldBean')
      .then((response) => {
        console.log(response)
        this.user = response.data;
      })
*/      
  },
  methods: {
    loadUser() {
      if(!this.showUser) {
        axios
          .get('http://localhost:8080/helloWorldBean')
          .then((response) => {
            console.log(response)
            this.user = response.data;
          })
          .catch((error) => console.log(error))
      }
      this.showUser = !this.showUser
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
