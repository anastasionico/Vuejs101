<template>
	<footer>
   <p>{{ copyright }}</p> 
   <small>{{ title }}</small>
  </footer>
</template>


<script>
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
