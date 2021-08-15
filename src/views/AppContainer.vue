<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="b-na" temporary>
      <Menu />
    </v-navigation-drawer>

    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="b-nav"
    ></v-app-bar-nav-icon>
    <Nav class="nav" />
    <v-main>
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
}
@media (max-width: 600px) {
  .b-nav {
    display: flex;
  }
}
#inspire {
  /*  background-image: linear-gradient(to bottom, white, purple); */
  background-image: linear-gradient(to bottom, white, rgb(199, 97, 199));
}
</style>
