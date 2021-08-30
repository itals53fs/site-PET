<template>
  <v-card class="mx-auto card" max-width="300px">
   
    <v-img src="../assets/Cafe-com-pet.png" max-width="400px" style="margin: 0 auto;">
    </v-img>

    <v-card-title> Destaques </v-card-title>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>
      <v-spacer></v-spacer>
      <steparklines/>         
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          CAFÉ COM PET: Um Bate Papo Sobre Diversidade, Racismo, População
          Negra, Branquitude e Literatura, tem como objetivo estimular a leitura
          e discussão de textos entre os petianos do PET Conexão dos Saberes
          juntamente com a comunidade interna da UFVJM e externa. O tema central
          é literatura sobre a população negra, obras literárias que aborda
          conceitos de cunho racial, afro-brasileira, etnocentrismo, população
          negra e quilombola, no qual, sobretudo o sujeito da escrita é o
          próprio negro.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import Steparklines from './Steparklines.vue';
export default {
  components: { Steparklines },
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
.card {
  border-radius: 20px !important;
  text-align: left;
}
</style>