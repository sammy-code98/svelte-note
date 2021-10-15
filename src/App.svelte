<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
</script>

<Header />
<Home />

<style lang="scss">
  :root {
    font-family: "Indie Flower", cursive;
    height: 100%;
  }
  :global(body) {
    // this applies to the html body
    margin: 0;
    height: 100%;
    background-color: #fbfbfb;
  }
</style>
