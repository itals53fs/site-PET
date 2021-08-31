<template>
  <nav class="bar">
    <div class="div-nav">
      <router-link to="/" class="icon">
        PET Conexão dos Saberes
        <!--         <img src="../assets/icon.png"> -->
      </router-link>
      <div class="navgation">
        <router-link to="/">Home</router-link>
        <router-link to="construcao">Noticias</router-link>
        <router-link to="/Sobre">O PET</router-link>
      </div>
    </div>
    <v-divider />
    <div class="pesquisa">
      <input type="search" class="input" placeholder="Search.." />
    </div>
  </nav>
</template>
<script>
export default {};
</script>
    
<style scoped>
.div-nav {
  display: flex;
  flex-direction: row;
}
.icon {
  z-index: 1;
  margin: 10px;
  left: 0px;
  text-decoration: none;
  color: white !important;
  font-weight: 500 !important;
  font-size: 30px;
  line-height: 30px;
}
.navgation {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  position: relative;
}
.navgation a {
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
  color: white !important;
}
.bar {
  background-color: #0275d8;
  margin: 0 auto;
  width: 100%;
  height: 120px;
}
.input {
  background-color: aliceblue;
  border-radius: 20px;
  height: 34px;
  outline: none;
  margin: 5px;
  padding-left: 10px;
}
.pesquisa {
  display: none;
}
@media (max-width: 695px) {
  .navgation {
    display: none;
  }
  .icon {
    font-size: 20px;
  }
  .pesquisa {
    display: flex;
  }
}
</style>