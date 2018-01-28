<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>


<script>
  export default {
    data () {
      return {
      	title: 'First Vuejs',
      }
    }
  }
</script>


<style scoped>
	header{
		background:#2c3e50; 
		text-align: center;
		padding: 1rem;
	}
  	h1{
  		color: #42b983;
  	}
</style>
