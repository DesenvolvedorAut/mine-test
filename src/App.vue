<template>
  <v-app id="app">
    <!-- TOOLBAR -->
    <toolbar></toolbar>

    <v-main>
      <!-- VIEW -->
      <router-view/>


      <!-- IMAGE TEST -->
      <template v-if="this.$route.path === '/'">
        <div class="container">
          <h3>Uma tecnologia que vai fazer a <span>sua empresa crescer</span></h3>
          <div v-for="(servico, s) of servicos" class="col-md-3" :key="'S' + s">
            <div class="painel">
              <router-link to="/sistema">
                <div class="head">
                  <slot>
                    <v-img v-bind:src="require('@/assets/'+ servico.img)" :alt="servico.titulo"></v-img>
                  </slot>
                </div>
              </router-link>
              <div class="content">
                <h4>{{ servico.titulo }}</h4>
                <div class="resumo">{{ servico.resumo }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
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

  data() {
    return {
      servicos: [
        {
          img: "hawk.png",
          titulo: 'Loja Varejo',
          resumo: 'Controle total de todas as vendas/oss realizadas e processadas para serem recebidas no controle de caixa'
        },
        {
          img: 'lion.png',
          titulo: 'Padarias',
          resumo: 'Controle total de todas as vendas/oss realizadas e processadas para serem recebidas no controle de caixa'
        },
        {
          img: 'panter.png',
          titulo: 'Supermercados',
          resumo: 'Controle total de todas as vendas/oss realizadas e processadas para serem recebidas no controle de caixa'
        },
        {
          img: 'tiger.png',
          titulo: 'Bares & Restaurantes',
          resumo: 'Controle total de todas as vendas/oss realizadas e processadas para serem recebidas no controle de caixa'
        }
      ]
    }
  },

  components: {
    Rodape,
    Toolbar
  },
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
