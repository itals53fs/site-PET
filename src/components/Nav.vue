<template>
     <nav class="bar">
      <div class="div-nav">
        <router-link to="/" class="icon">
        <img src="../assets/icon.png">
        </router-link>
        <div class="navgation">
          <router-link to="/">Home</router-link>
          <router-link to="construcao">Noticias</router-link>
          <router-link to="/Sobre">O PET</router-link>
        </div>
      </div>  
    </nav>
</template>
<script>
export default {};
</script>
    
<style>
.div-nav{
  display: flex;
  flex-direction: row;

}
.icon{
  width: 50px;
  height: 50px;
  margin: 20px;
  z-index: 1;
}
.navgation{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  position: absolute;
}
.navgation a{
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
}
@media(max-width: 600px){
  .navgation{
    display: none;
  }
  .icon{
    margin: -10px auto;
  }
}
</style>