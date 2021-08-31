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
      
    </div>
    <div class="ini">
      <Card-noticias class="arco" />
    </div>
  </div>
  <div>

  </div>
  <div class="div">
    <Slide2 v-for="i in 3" :key="i"/>
  </div>
  <h3 class="petianos-h1">Petianos</h3>
<div class="petianos">
  <Avatar-petianos v-for="i in 13" :key="i"/>
</div>
</div>

</template>

<script>
import AvatarPetianos from '../components/AvatarPetianos.vue';
import CardNoticias from "../components/CardNoticias.vue";
import Slide from "../components/Slide.vue";
import Slide2 from "../components/Slide2.vue";

export default {
  components: { CardNoticias, Slide, Slide2, AvatarPetianos },
  data(){
    return{
  i:0
    }
  }
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
  text-align: left;
}
.noticias-link {
  padding: 20px;
  width: 200px;
  margin: 0 auto;
  background-color: rgb(211, 153, 211);

  border-radius: 20px;
}
.link-galeria{
  font-size: 26px;
  margin: 20px;
  padding: 20px;
}
.link-galeria a, i{
  text-decoration: none !important;
  color: #0275d8 !important;

}
.div{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}
.petianos{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
}
.petianos-h1{

  margin: 40px 0;
  font-size: 24px;
}
</style>