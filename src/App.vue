<template>
  <div id='main'>
    <app-header></app-header>
    <ninja></ninja>
    <app-footer></app-footer>
  </div>
</template>


<script>
  import Header from './components/Header.vue';
  import Ninja from './components/Ninjas.vue';
  import Footer from './components/Footer.vue';

  export default {
    components:{
      'app-header': Header,
      'ninja': Ninja,
      'app-footer': Footer
    },
    data () {
      return {

      }
    }
  }
</script>






<style>
  #main{
    padding: 0;
    margin: 0;
  }
  
  
</style>
