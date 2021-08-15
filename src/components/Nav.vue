<template>
     <nav class="bar">

      <div class="div-nav">
        <div class="name-pet">PET Conexão dos Saberes</div>
        <div class="navgation">
          <router-link to="#">Home</router-link>
          <router-link to="#">Noticias</router-link>
          <a href="https://petconexaoufvjm.weebly.com/">O PET</a>
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
.name-pet{
  padding: 20px;
}
.navgation{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
}
.navgation a{
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
}
</style>