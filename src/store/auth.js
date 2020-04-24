import api from "../services/api"
import router from '../router'

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations:{
    SetToken( state, token ){
      state.token = token
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.token !== null;
    }
  },
  actions: {
    loginUser({commit}, { email, password}) {

      const params = new URLSearchParams();
      params.append('username', email);
      params.append( 'password', password);
      params.append( 'client_id', process.env.VUE_APP_CLIENT_ID);
      params.append( 'client_secret', process.env.VUE_APP_CLIENT_SECRET);
      params.append( 'grant_type', 'password');
      params.append( 'scope', '');
      api.post(`/oauth/token`, params, {
        headers: {
          "Accept": "application/json",
          'content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(function (response) {
        // handle success
        commit('SetToken', response.data.access_token)
        router.push({name:'home'})
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    },
    logout({commit}){
      commit('SetToken', null)
      router.push({name:'login'});
    }
  }
}