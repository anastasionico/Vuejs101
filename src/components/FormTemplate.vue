<template>
	<div id='main'>
		<form>
			<div id='form-header'>	
				<slot name='form-header'></slot>
			</div>  
			<div id='form-fields'>	
				<slot name='form-fields'></slot>
			</div>  
			<div id='form-controls'>	
				<slot name='form-controls'></slot>
			</div>  
		</form>
	</div>	
</template>

<script>
  export default {
    data () {
      return {

      }
    }
    
  }
</script>

<style scoped>
	#main{
		width: 50%;
		margin: 0 auto;
	    background-color: lightgrey;
	    text-align: center;
  	}
	#form-header h1{
		margin:1rem auto;
		padding-top: 1rem;
		color: navy;
	}
	#form-fields input{
		display: block;
		margin:1rem auto;
		padding: 1rem;
	}
	#form-controls button{
		margin:1rem auto;
		padding: 1rem;	
		background-color: navy;
		color:lightgrey;
		text-transform: uppercase;
	}
</style>
