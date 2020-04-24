<template>
    <div class="game">
        <h1>{{ game.title }}</h1>
    </div>
</template>

<script>
  export default {
    name: 'Game',
    computed: {
        game(){ return this.$store.getters['games/getGameById']( this.$route.params.id) }
    }
  }
</script>
