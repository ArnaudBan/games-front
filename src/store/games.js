import api from '../services/api'

export default {
  namespaced: true,
  state: {
    loading: false,
    games: []
  },
  getters: {
    // ...
    getGameById: (state) => (id) => {
      return state.games.find(game => game.id === id)
    }
  },
  mutations:{
    SetLoading( state, loading ){
      state.loading = loading
    },
    SetGames( state, games ){
      state.games = games
    }
  },
  actions:{
    fetchGames( {rootState, commit} ){
      commit( 'SetLoading', true )
      api.get(`/games`,{
        headers: {
          "Authorization": `Bearer ${rootState.auth.token}`,
          "Accept": "application/json"

        }
      })

        .then(function (response) {
          // handle success
          commit( 'SetGames', response.data.data )
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          commit( 'SetLoading', false )
        });

    }
  }
}