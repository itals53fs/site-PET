<template>
  <v-card class="mx-auto card" max-width="344">
    <v-card-text>
      <div>Petianos</div>
    </v-card-text>
    <v-avatar color="blue avatar" size="56">1</v-avatar>
    <v-avatar color="red avatar" size="56">2</v-avatar>
    <v-avatar color="green avatar" size="56">3</v-avatar>
    <v-avatar color="primary avatar" size="56">4</v-avatar>
    <v-avatar color="grey avatar" size="56">5</v-avatar>
    <v-avatar color="pink avatar" size="56">6</v-avatar>
    <v-avatar color="white avatar" size="56">...</v-avatar>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
    </v-card-actions>
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
  margin-right: -10px;
}
</style>