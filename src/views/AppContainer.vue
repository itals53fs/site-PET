<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="b-na" temporary>
      <Menu />
    </v-navigation-drawer>
    <div class="div-nav">
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="b-nav"
    ></v-app-bar-nav-icon>
    <Nav class="nav" />
    </div>
    <v-main class="main1">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";
import Nav from "../components/Nav.vue";
export default {
  components: { Nav, Footer, Menu },
  data: () => ({ drawer: null }),
};
</script>

<style scoped>
.bar {
  
}
.b-nav {
  display: none;
  background-color: beige;
  margin: 7px;
}
.div-nav{
  display: flex;
  background-color: #0275d8;
}
@media (max-width: 695px) {
  .b-nav {
    display: flex;
  }
}
</style>
