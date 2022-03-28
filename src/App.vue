<template>
  <v-app id="app">
    <!-- TOOLBAR -->
    <toolbar></toolbar>

    <v-main>
      <!-- VIEW -->
      <router-view/>
    </v-main>

    <!-- FOOTER -->
    <rodape></rodape>

  </v-app>
</template>


<script>
import Toolbar from "@/components/toolbar";
import Rodape from "@/components/rodape";

export default {
  name: 'App',

  // NOME DA GUIA DO NAVEGADOR
  watch: {
    $route: {
      immediate: true,
      handler(to,) {
        document.title = to.meta.title || 'Arcade Brasil';
      }
    },
  },

  components: {
    Rodape,
    Toolbar
  },

  data: () => ({}),
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
