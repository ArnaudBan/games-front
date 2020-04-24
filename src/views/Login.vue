<template>
    <div class="game">
        <h1>Login</h1>
        <form id="app" @submit="loginForm" method="post">
            <label for="email">Email</label>
            <input
                id="email"
                v-model="email"
                type="email"
                name="email"
            >
            <label for="password">Mot de passe</label>
            <input
                id="password"
                v-model="password"
                type="password"
                name="password"
            >
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
  import PublicLayout from '../layouts/PublicLayout'

  export default {
    name: 'Login',
    data() {
      return {
        errors: [],
        email: '',
        password: '',
      }
    },
    computed: {
      game(){ return this.$store.getters['games/getGameById']( this.$route.params.id) }
    },
    methods: {
      loginForm:function(e){
        this.$store.dispatch('auth/loginUser', { email: this.email, password: this.password})
        e.preventDefault();
      }
    },
    created() {
      this.$emit('update:layout', PublicLayout);
    }
  }
</script>
