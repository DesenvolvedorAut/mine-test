<template>
  <v-footer>
    <v-col
        class="text-center"
        cols="12"
    >
      &copy; {{ new Date().getFullYear() }} — Created by:

      <strong>
        <a href="https://github.com/GustavoYoshimiYamashita" target="_blank">
          Gustavo Yoshimi Yamashita
        </a>
      </strong>

      and

      <strong>
        <a href="https://github.com/fslaurafs" target="_blank">
          Laura Fernandes Sorato
        </a>
      </strong>
    </v-col>
  </v-footer>
</template>


<script>
export default {
  name: "rodape"
}
</script>


<style scoped>
a {
  text-decoration: none;
  color: #1E88E5;
}
</style>