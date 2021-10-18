<script lang="ts">
  import logo from "@/assets/svelte.png";
</script>

<header class="general-header">
  <div class="logo">
    <img src={logo} alt="app logo" class="logo-img" />
    <div class="title">My Note App</div>
  </div>
</header>

<style lang="scss">
  .general-header {
    background-color:rgb(214, 152, 162);
    height: 56px;
    color: white;
    padding: 15px;
    box-sizing: border-box;
  }
  .logo{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .logo-img{
    height: 100%;
    margin-right: 15px;
  }
  .title{
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    .general-header{
      width: 100%;
      top: 0;
      position: sticky;
    }
  }
</style>
