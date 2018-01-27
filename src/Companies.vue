<template>
  <div>
    <p>Companies nested locally</p>
    <ul>
      <li v-for='company in companies'>{{ company }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        companies: ['Nike', 'Adidas', 'Microsoft']
      }
    }
  }
</script>

<style scoped>
  li{ 
    color:purple;
  }
</style>


