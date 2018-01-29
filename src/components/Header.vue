<template>
	<header>
		<h1 v-on:click="changeTitle">{{ title }}</h1>
	</header>
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
      	
      }
    },
    methods: {
      changeTitle: function () {
        this.$emit('changeTitleEvent','New Title');
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
