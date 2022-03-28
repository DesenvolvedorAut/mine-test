<template>
  <v-container id="center">
    <!-- TITLE -->
    <v-card
        elevation="0"
        color="transparent"
    >
      <h2>Quem nós somos?</h2>
      <p>Apenas dois amigos com uma ideia!</p>
    </v-card>

    <v-row justify="center" class="my-1">
      <!-- GUSTAVO YOSHIMI YAMASHITA -->
      <v-col cols="auto">
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              class="white--text align-end"
              height="300px"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
            <v-card-title class="name-card">Gustavo Yoshimi Yamashita</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0 text-left">
            Desenvolvedor Backend
          </v-card-subtitle>

          <v-card-text class="text--primary text-left">
            <div>Texto qualquer, frase de efeito, sei lá...</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer/>
            <a href="https://github.com/GustavoYoshimiYamashita" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </a>

            <a href="https://www.instagram.com/gusss_y/" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </a>

            <a href="https://www.linkedin.com/in/gustavo-yamashita/" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </a>
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- LAURA FERNANDES SORATO -->
      <v-col cols="auto">
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              class="white--text align-end"
              height="300px"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
            <v-card-title class="name-card">Laura Fernandes Sorato</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0 text-left">
            Desenvolvedora Frontend
          </v-card-subtitle>

          <v-card-text class="text--primary text-left">
            <div>Texto qualquer, frase de efeito, sei lá...</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer/>
            <a href="https://github.com/fslaurafs" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </a>

            <a href="https://www.instagram.com/fslaurafs/" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </a>

            <a href="https://www.linkedin.com/in/laurafernandessorato/" target="_blank">
              <v-btn
                  color="primary"
                  icon
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </a>
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- FRIENDS -->
    <v-row justify="center">
      <v-card width="1000" elevation="0" color="transparent">
        <v-slide-group
            class="pa-4"
            show-arrows
        >
          <v-slide-item v-for="(image, i) in images" :key="i">
            <v-card class="ma-2">
              <v-img
                  v-bind:src="require('@/assets/'+ image.src)"
                  height="200"
                  width="200"></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "info",

  data: () => ({
    images: [
      {src: 'hawk.png',},
      {src: 'lion.png',},
      {src: 'panter.png',},
      {src: 'tiger.png',},
      {src: 'hawk.jpg',},
      {src: 'lion.jpg',},
      {src: 'panter.jpg',},
      {src: 'tiger.jpg',},
      //{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',},
      //{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',},
      //{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',},
      //{src: 'https://picsum.photos/500/300?image=15',},
      //{src: 'https://picsum.photos/500/300?image=20',},
      //{src: 'https://picsum.photos/500/300?image=25',},
      //{src: 'https://picsum.photos/500/300?image=30',},
      //{src: 'https://picsum.photos/500/300?image=35',},
      //{src: 'https://picsum.photos/500/300?image=40',},
    ]
  }),
}
</script>


<style scoped>
a {
  text-decoration: none;
}

#center {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.name-card {
  background-image: linear-gradient(0deg, rgba(30, 136, 229, 1) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>