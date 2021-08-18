<template>
  <v-carousel cycle height="auto" class="carousel" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2 div">
            <img v-bind:src="slide" class="img" alt="" />
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: ["indigo", "warning", "deep-purple accent-4"],
      slides: [
        require("../assets/1.jpg"),
        require("../assets/conexao.png"),
      ],
    };
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;
}
.div {
  height: 100%;
  border: solid 1px black;
  display: flex;
}
.carousel{
  max-height: 400px;
}
</style>