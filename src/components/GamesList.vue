<template>
  <div class="games-list">
    <v-progress-linear indeterminate v-if="loading"></v-progress-linear>
    <v-list v-else>
      <v-subheader>Games</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="game in games"
          :key="game.id"
          :to="{name:'game', params: { id: game.id}}"
          link
        >
          <v-list-item-content>
            <v-list-item-title v-text="game.title" ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

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
