<template>
    <Game></Game>
</template>

<script>
  import Game from '../components/Game'
  import LayoutDefault from "../layouts/Layout"

  export default {
    created() {
      this.$emit('update:layout', LayoutDefault);
    },
    components:{
      Game
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
