<template>
    <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title><router-link to="/">Games</router-link></v-toolbar-title>

        <v-spacer></v-spacer>


        <v-btn icon @click="logout">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>


    </v-toolbar>
</template>

<script>
  export default {
    name: 'AppBar',
    methods: {
      logout: function() {
        this.$store.dispatch('auth/logout')
      }
    }
  }
</script>