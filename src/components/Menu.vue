<template>
  <div class="mx-auto menu-con" width="256" tile>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" class="menu">
          <router-link :to="item.to" class="route">

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content >
              <v-list-item-title class="lista" v-text="item.text"></v-list-item-title>
            </v-list-item-content>

          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { text: "Home", icon: "mdi-home", to: "/" },
      { text: "Noticias", icon: "mdi-newspaper-variant-multiple", to: "construcao" },
      { text: "O PET", icon: "mdi-card-account-details", to: "/sobre" },
      ],
  }),
};
</script>
<style scoped>
.menu .route {
  text-decoration: none;
  display: flex;
  width: 100%;
  padding: 15px;
}
.lista{
  font-size: 17px !important;
  font-weight: 600;
}
.sair{
  position:fixed;
  bottom:0;
  right: 0 !important;
  margin-right:30px;
  border-bottom: solid 1px cadetblue;
  padding: 10px;
}
.avatar{
  text-decoration: none !important;
}
</style>