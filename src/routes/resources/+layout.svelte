<script>
  import "./resources.css";
  import { onMount } from "svelte";

  async function getStats(file) {
    const res = await fetch(`/data/${file}.json`).then((r) => r.json());
    return res;
  }

  function initer() {
    document.querySelector("details").open = true;

    return [...document.querySelectorAll("details li [process]")];
  }

  onMount(async () => {
    let file = new URL(window.location.href).pathname;
    file = file.split("/").pop();
    if (file === "resources") return 0;

    const stats = await getStats(file);
    const process = initer();

    for (let i = 0; i < process.length; i++) {
      const el = process[i];
      try {
        const url = new URL(el.innerHTML);
        const value = stats[url];
        if (value) el.outerHTML = value;
      } catch (e) {
        continue;
      }
    }
  });
</script>

<slot />

<style lang="scss">
  :global {
    body {
      background: #222;
      color: #fff;
    }
  }
</style>
