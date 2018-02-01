<template>
  <formTemplate>
    
      <div slot='form-header'>
        <h1>Hello form</h1>
      </div>
      <div slot='form-fields'>
        <input type="text" name="username" placeholder="username">
        <input type="password" name="password" placeholder="password">
      </div>
      <div slot='form-controls'>
        <button v-on:click='submit'>Submit</button>
      </div>    
    
  </formTemplate>
</template>


<script>
  import FormTemplate from './components/FormTemplate'
  
  export default {
    components: {
      'formTemplate' : FormTemplate
    },
    data () {
      return {

      }
    },
    methods:{
      submit:function () {
        console.log('hello');
      }
    }

    
  }
</script>

<style scoped>
  
</style>
