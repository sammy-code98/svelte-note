<script lang="ts">
  import Notes from "./Notes.svelte";
</script>

<Notes
  id={123}
  title={"some notes"}
  content={"hello world"}
  tags={["test", "text"]}
  date={"20210806120000"}
  isFav={false}
/>
