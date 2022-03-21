<template>
  <div>
    <v-card>
      <v-toolbar>
        <!-- LOGO -->
        <router-link to="/">
          <v-toolbar-title>
            <v-img
                width="150px"
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
            ></v-img>
          </v-toolbar-title>
        </router-link>
        <v-spacer/>

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

    <!-- DIALOG -->
    <v-dialog
        v-model="dialog"
        width="650"
    >
      <v-card class="rounded-lg">
        <!-- Dialog Title -->
        <v-card dark color="primary">
          <v-card-title>
            <v-spacer/>
            How to play Minesweeper
            <v-spacer/>
          </v-card-title>
        </v-card>

        <!-- Dialog Rules -->
        <v-card class="rounded-t-0">
          <v-card-text>
            Rules here
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
              Let's play!
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