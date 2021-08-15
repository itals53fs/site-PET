<template>
  <footer class="footer">
      <div class="content">
          <a href="http://portal.ufvjm.edu.br/" type="blank">
              <img src="../assets/ufvjm.svg"/>
          </a>

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
    .content img{
        width: 50px !important;
    }
    img{
        width: 50px;
    }
</style>