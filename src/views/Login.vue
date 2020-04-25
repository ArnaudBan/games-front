<template>
    <v-sheet class="mx-auto pa-12" max-width="600" elevation="2">
        <h1 class="title">Se connecter</h1>
        <v-form id="app" @submit="loginForm" method="post">
            <v-text-field
                id="email"
                v-model="email"
                type="email"
                name="email"
                label="Email">
            </v-text-field>
            <v-text-field
                id="password"
                v-model="password"
                type="password"
                name="password"
                label="Mot de passe"
            ></v-text-field>
            <v-btn type="submit" color="primary">Se connecter</v-btn>
        </v-form>
    </v-sheet>
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
