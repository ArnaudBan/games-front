<template>
  <div class="games-list">
    <div v-if="loading">Loading</div>
    <ul v-else>
      <li v-for="game in games" v-bind:key="game.id">
        <router-link :to="{name:'game', params: { id: game.id}}">{{ game.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'GamesList',
    computed: mapState({
      loading: state => state.games.loading,
      games: state => state.games.games
    }),
    mounted: function () {
      this.$store.dispatch('games/fetchGames')
    },
    props: {
      msg: String
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  a {
    color: #42b983;
  }
</style>
