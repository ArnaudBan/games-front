<template>
    <div class="LayoutDefault">
        <nav class="LayoutDefault__nav">
            <router-link to="/">Home</router-link> |
            <button @click="logout">Lougout</button>
        </nav>
        <main class="LayoutDefault__main">
            <slot/>
        </main>
        <footer class="LayoutDefault__footer">
            &copy; Bionnats
        </footer>
    </div>
</template>

<script>

    export default {
      methods: {
        logout: function() {
          this.$store.dispatch('auth/logout')
        }
      }
    }

</script>