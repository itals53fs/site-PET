<template>
  <v-card class="mx-auto card" max-width="200" height="100px">
    <v-avatar color="blue avatar" size="36">1</v-avatar>
    <v-avatar color="red avatar" size="56" style="z-index:1;">2</v-avatar>
    <v-avatar color="green avatar" size="36" style="font-size:10px;"> ++10</v-avatar>
<!--     <v-avatar color="primary avatar" size="56">4</v-avatar>
    <v-avatar color="grey avatar" size="56">5</v-avatar>
    <v-avatar color="pink avatar" size="56">6</v-avatar>
    <v-avatar color="white avatar" size="56">...</v-avatar> -->
    <router-link to="/construcao" type="text" class="link">Todos membos</router-link>
  </v-card>
</template>
<style scoped>
.card {
  background-color: #f3e5f3;
  border-radius: 20px;
  padding: 10px;
  margin-top: 70px;
}
.avatar {
  margin-right: -7px;
}
.link{
  font-size:10px;
  display: block;
}
</style>