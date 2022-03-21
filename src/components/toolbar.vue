<template>
  <div>
    <v-card>
      <v-toolbar>
        <!-- LOGO -->
        <router-link to="/">
          <v-toolbar-title>
            <img width="145"
                src="../../public/logo-minado.png"
            >
          </v-toolbar-title>
        </router-link>

        <v-spacer/>

        <!-- HOME PAGE -->
        <router-link to="/">
          <v-btn
              v-if="this.$route.path === '/information'"
              icon
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>

        <!-- INFO PAGE -->
        <router-link to="/information">
          <v-btn
              v-if="this.$route.path === '/'"
              icon
          >
            <v-icon>mdi-account-group</v-icon>
          </v-btn>
        </router-link>

        <!-- HOW TO PLAY DIALOG -->
        <v-btn
            @click="openDialog"
            icon
        >
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>

        <!-- GITHUB REPOSITORY -->
        <a href="https://github.com" target="_blank">
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </a>

        <!-- CHANGE THEME -->
        <v-btn
            @click="changeTheme"
            :color="colorThema"
            icon
        >
          <v-icon v-if="$vuetify.theme.dark">mdi-moon-waxing-crescent</v-icon>
          <v-icon v-if="$vuetify.theme.dark === false">mdi-weather-sunny</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <!-- DIALOG HOW TO PLAY -->
    <v-dialog
        v-model="dialog"
        width="650"
    >
      <v-card class="rounded-lg">
        <!-- Dialog Title -->
        <v-card dark color="primary" class="rounded-b-0">
          <v-card-title>
            <v-spacer/>
            Como jogar campo minado?
            <v-spacer/>
          </v-card-title>
        </v-card>

        <!-- Dialog Rules -->
        <v-card class="rounded-t-0">
          <v-card-text class="text-left">
            As regras do Campo Minado são simples: <br>
            <strong>1.</strong> Clique com o botão esquerdo do mouse para abrir um quadrado. <br>
            <strong>2.</strong> Clique com o botão direito do mouse para colocar ou retirar uma bandeira que sinaliza a bomba. <br>
            <strong>3.</strong> Se você descobrir uma mina, o jogo acaba. <br>
            <strong>4.</strong> Se descobrir um quadrado vazio, o jogo continua. <br>
            <strong>5.</strong> Se aparecer um número, ele informará quantas minas estão escondidas nos oito quadrados que o cercam.
              Você usa essa informação para deduzir em que quadrados próximos é seguro clicar. <br>
            <strong>6.</strong> Caso você perca, o jogo mostrará quais bombas você errou, quais bombas acertou e onde estavam as bombas restantes. <br>
          </v-card-text>

          <v-divider></v-divider>

          <!-- Dialog Actions -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="success"
                text rounded
                @click="dialog = false"
            >
              Vamos jogar!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  name: "toolbar",

  data() {
    return {
      thema: false,
      dialog: false,
      colorThema: '',
    }
  },

  methods: {
    changeTheme() {
      if (this.thema === false) {
        this.thema = true
        this.colorThema = 'primary'
      } else {
        this.thema = false
        this.colorThema = ''
      }

      this.$vuetify.theme.dark = this.thema
    },

    openDialog() {
      this.dialog = true
    }
  }
}
</script>


<style scoped>
a {
  text-decoration: none;
}
</style>