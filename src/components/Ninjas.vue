<template>
  <ul>
    <li v-for='(ninja, index) in ninjas' v-on:click='ninja.show = !ninja.show'>
      <b>{{ninja.name}}</b>
      <p v-show='ninja.show'>
        {{ninja.speciality}}
      </p>
      <br>
      <button v-on:click='deleteNinja(index)'>Delete</button>
    </li>
  </ul>

</template>


<script>
  export default {
    // The data is arriving from the parent App.vue and to get is we use props
    props: {
      ninjas: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        
      }
    },
    methods:{
      deleteNinja: function (i) {
        this.ninjas.splice(i, 1);
      }
    }
  }
</script>


<style scoped>
  #ninjas{
      width: 100%;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      box-sizing: border-box;
  }
  ul{
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
  }
  li{
      flex-grow: 1;
      flex-basis: 300px;
      text-align: center;
      padding: 30px;
      border: 1px solid #2c3e50; 
      margin: 10px;
      min-height: 70px;
  }
</style>
