<template>
    <div class="LayoutDefault">
        <AppBar></AppBar>
        <v-content>
            <v-container fluid>
                <main class="LayoutDefault__main">
                    <slot/>
                </main>
            </v-container>
        </v-content>
        <Footer></Footer>
    </div>
</template>

<script>
    import AppBar from '../components/AppBar'
    import Footer from '../components/Footer'

    export default {
      components: { AppBar, Footer},
    }

</script>