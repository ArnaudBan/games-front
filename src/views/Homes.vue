<template>
    <div class="home">
        <h1>Games</h1>
        <GamesList></GamesList>
    </div>
</template>

<script>
    import GamesList from '../components/GamesList'
    import LayoutDefault from "../layouts/Layout"

    export default {
        created() {
            this.$emit('update:layout', LayoutDefault);
        },
        components:{
          GamesList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #42b983;
    }
</style>
