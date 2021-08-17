<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
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
        require("../assets/interpet.jpeg"),
        require("../assets/interpet2.png"),
        require("../assets/interpet3.png"),
      ],
    };
  },
};
</script>

<style scoped>
.img {
  min-width: 500px;
  z-index: 1;
  overflow: hidden;
  position: relative;
}
.div {
  height: 100%;
  border: solid 1px black;
  display: flex;
}
</style>