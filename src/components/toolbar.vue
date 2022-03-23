<template>
  <div>
    <v-card>
      <v-toolbar>
        <!-- HOME PAGE
        <router-link to="/">
          <v-btn
              v-if="this.$route.path === '/information'"
              icon
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>
        -->

        <!-- INFO PAGE
        <router-link to="/information">
          <v-btn
              v-if="this.$route.path === '/'"
              icon
          >
            <v-icon>mdi-account-group</v-icon>
          </v-btn>
        </router-link>
        -->

        <!-- HOW TO PLAY MINESWEEPER DIALOG
        <v-btn
            @click="openDialog"
            icon
        >
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
        -->

        <!-- MENU NAVIGATION DRAWER -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <!-- CHANGE THEME -->
        <v-btn
            @click="changeTheme"
            :color="colorThema"
            icon
        >
          <v-icon v-if="$vuetify.theme.dark">mdi-brightness-3</v-icon>
          <v-icon v-if="$vuetify.theme.dark === false">mdi-brightness-7</v-icon>
        </v-btn>

        <!-- GITHUB REPOSITORY -->
        <a href="https://github.com" target="_blank">
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </a>

        <v-spacer/>

        <!-- LOGO -->
        <router-link to="/">
          <v-toolbar-title>
            <img width="145"
                 src="../../public/logo-minado.png"
            >
          </v-toolbar-title>
        </router-link>
      </v-toolbar>
    </v-card>

    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer
        v-model="drawer"
        fixed temporary
    >
      <div id="logo">
        <img
            src="../../public/logo-minado.png"
            width="145">
      </div>
      <v-divider/>

      <v-list nav dense rounded>
        <v-list-item-group
            v-model="selectedItem"
            active-class="primary--text text--accent-4"
        >
          <!-- PRINCIPAL -->
          <v-list-item
              :value="false"
              v-for="(item, i) in items"
              :key="'I' + i"
              :to="item.url"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title" class="text-left"></v-list-item-title>
          </v-list-item>

          <v-divider id="divisor"/>

          <!-- GAMES -->
          <v-list-item-title>Jogos</v-list-item-title>
          <v-list-item
              :value="false"
              v-for="(jogo, j) in jogos"
              :key="'J' + j"
              :to="jogo.url"
          >
            <v-list-item-icon>
              <v-icon v-text="jogo.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="jogo.title" class="text-left"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
            <strong>2.</strong> Clique com o botão direito do mouse para colocar ou retirar uma bandeira que sinaliza a
            bomba. <br>
            <strong>3.</strong> Se você descobrir uma mina, o jogo acaba. <br>
            <strong>4.</strong> Se descobrir um quadrado vazio, o jogo continua. <br>
            <strong>5.</strong> Se aparecer um número, ele informará quantas minas estão escondidas nos oito quadrados
            que o cercam.
            Você usa essa informação para deduzir em que quadrados próximos é seguro clicar. <br>
            <strong>6.</strong> Caso você perca, o jogo mostrará quais bombas você errou, quais bombas acertou e onde
            estavam as bombas restantes. <br>
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
      drawer: null,
      selectedItem: 0,
      items: [
        {title: 'Início', icon: 'mdi-view-dashboard', url: '/'},
        {title: 'Sobre nós', icon: 'mdi-account-group', url: '/information'},
      ],
      jogos: [
        {title: 'Campo Minado', icon: 'mdi-flag-variant', url: '/campo-minado'},
        {title: 'Damas', icon: 'mdi-chess-pawn', url: '/damas'},
        {title: 'Jogo da Memória', icon: 'mdi-brain', url: '/jogo-da-memoria'},
        {title: 'Jogo da Velha', icon: 'mdi-pound', url: '/jogo-da-velha'},
        {title: 'Jogo do Dino', icon: 'mdi-google-downasaur', url: '/jogo-do-dino'},
        {title: 'Jogo dos 7 erros', icon: 'mdi-close', url: '/jogo-dos-sete-erros'},
        {title: 'Paciência', icon: 'mdi-cards-playing-outline', url: '/paciencia'},
        {title: 'Paint', icon: 'mdi-draw', url: '/paint'},
        {title: 'Xadrez', icon: 'mdi-chess-queen', url: '/xadrez'},
      ],

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

#logo {
  height: 75px;
  display: grid;
  place-items: center;
}

#divisor {
  margin: 12px 0 12px 0;
}
</style>