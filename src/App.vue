<template>
  <div id='main'>
    <app-header v-bind:title='title'></app-header>
    <ninja v-bind:ninjas='ninjas'></ninja>
    <hr>
    <ninja v-bind:ninjas='ninjas'></ninja>
    <app-footer v-bind:title='title'></app-footer>
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
        // ninjas it is send to Ninja.vue using v-bind and props
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ],
        title: 'First Vuejs'
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
