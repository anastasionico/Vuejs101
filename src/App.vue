<template>
  <div id="mainDiv">
    <h1>{{ title }}</h1>
    <h2>{{ greeting() }}</h2>
    <names></names>
    <companies></companies>
  </div> 
</template>


<script>
  import Companies from './Companies.vue'
  
  export default {
    components:{
      'companies': Companies
    },
    data () {
      return {
        title: 'This is my first Vue page',
      }
    },
    methods: {
      greeting: function () {
        return 'Hello World';
      }
    }
  }
</script>






<style>
  #mainDiv {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a,p {
    color: #42b983;
  }
</style>
