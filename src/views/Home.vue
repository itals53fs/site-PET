<template>
  <div class="home">
    <div class="txt-content">
      <h3 class="title-pet">Programa Educação Tutorial Conexão dos Saberes</h3>
      <p>
        O Grupo PET Conexão dos Saberes da UFVJM, trata-se de uma ação conjunta
        entre a universidade e outros setores da sociedade, em parceria com a
        gestão pública e Organizações Não Governamentais (ONGs)
      </p>
      <AvatarPetianos />
    </div>
    <div>
      <Card-noticias class="arco" />
    </div>
  </div>
</template>

<script>
import CardNoticias from "../components/CardNoticias.vue";
import AvatarPetianos from "../components/AvatarPetianos.vue";

export default {
  components: { CardNoticias, AvatarPetianos },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: center;
}
.arco {
  width: 400px;
  border-radius: 20px;
  background-color: aqua;
}
.txt-content {
  width: 500px;
  padding: 20px;
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
</style>