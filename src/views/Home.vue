<template>
<div>

    <Slide/>
  <div class="home">
    <div class="txt-content">
      <h3 class="title-pet">Programa Educação Tutorial Conexão dos Saberes</h3>
      <p>
        O Grupo PET Conexão dos Saberes da UFVJM, trata-se de uma ação conjunta
        entre a universidade e outros setores da sociedade, em parceria com a
        gestão pública e Organizações Não Governamentais (ONGs)
      </p>
      <div for="" class="label-input">
        <!--   <v-icon class="icon-input">mdi-magnify</v-icon> -->
        <input type="search" class="input" />
        <v-btn color="primary" class="btn">Search</v-btn>
      </div>
    </div>
    <div class="ini">
      <Card-noticias class="arco" />
    </div>
    <div>
    <AvatarPetianos class="petianos" />
    </div>
  </div>
</div>
</template>

<script>
import CardNoticias from "../components/CardNoticias.vue";
import AvatarPetianos from "../components/AvatarPetianos.vue";
import Slide from "../components/Slide.vue";

export default {
  components: { CardNoticias, AvatarPetianos, Slide },
};
</script>

<style>
.home {
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 0;
  justify-content: space-around;
}
.arco {
  width: 400px;
  border-radius: 20px;
  background-color: aqua;
}
.txt-content {
  padding: 20px 0px 20px 0px;
  width: 500px;
}
.txt-content p {
  text-align: left;
}
.title-pet {
  font-size: 40px;
}
.noticias-link {
  padding: 20px;
  width: 200px;
  margin: 0 auto;
  background-color: rgb(211, 153, 211);

  border-radius: 20px;
}
.petianos {
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 90%;
}
.input {
  background-color: aliceblue;
  border-radius: 20px 0 0 20px;
  height: 44px;
  outline: none;
  padding: 20px;
}
.icon-input {
  position: absolute;
  left: 32px;
}
.label-input {
  margin: 60px 0px;
  position: relative;
}
.label-input .btn {
  border-radius: 0 20px 20px 0;
  height: 45px !important;
  width: 30px;
  font-size: 12px !important;
  margin-top: -2px;
}

@media (max-width: 756px) {
  .petianos {
    position: relative;
    top: auto;
    margin: 30px;
  }
}
</style>