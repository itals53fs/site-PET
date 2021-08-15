<template>
  <footer class="footer">
      <div class="content">
          <router-link to="#">
              Exemple
          </router-link>
          <router-link to="#">Exemple 1</router-link>
          <router-link to="#">Exemple 1</router-link>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        height: 120px;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        flex-direction: column;
         background-color: rgb(196, 120, 196)
    }

    .content a{
        padding: 20px;
    }
    img{
        width: 50px;
    }
</style>