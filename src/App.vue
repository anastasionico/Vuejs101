<template>
  <div id='main'>
    <app-header></app-header>
    <ninja v-bind:ninjas='ninjas'></ninja>
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
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ]
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
