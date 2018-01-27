<template>
  <div>
    <p>Names nested globally</p>
    <ul>
      <li v-for='name in names'>{{ name }}</li>
    </ul>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        names: ['Nico', 'Mario', 'Luigi']
      }
    }
  }
</script>




