<template>
	<header>
		<h1 v-on:click="changeTitle">{{ title }}</h1>
	</header>
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
      	
      }
    },
    methods: {
      changeTitle: function () {
        // the method below sent a changeTitleEvent to the App.vue 
        // this.$emit('changeTitleEvent','New Title');

        this.title = 'New Title';
        // the method below send the changeTitleEvent to Footer.vue via a bus instance
        bus.$emit('changeTitleEvent','New Title');
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
