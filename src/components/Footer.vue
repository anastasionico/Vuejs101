<template>
	<footer>
   <p>{{ copyright }}</p> 
   <small>{{ title }}</small>
  </footer>
</template>


<script>
  import { bus } from '../main';
  export default {
    props:{
      title:{
        type: String
      }
    },
    data () {
      return {
      	copyright: 'Nico Anastasio 2018'
      }
    },
    created () {
      bus.$on('changeTitleEvent', (data) => {
        this.title = data;
      });
    }
  }
</script>


<style scoped>
	footer{
		background: #42b983 ; 
		text-align: center;
		padding: 1rem;
	}
  	h1{
  		color: #2c3e50;
  	}
  
  
</style>
