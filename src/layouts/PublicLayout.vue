<template>
    <div class="LayoutDefault">
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
  import Footer from '../components/Footer'

  export default {
    components: { Footer}
  }

</script>