<script lang="ts">
  import Meta from "$components/meta.svelte";
  import type { PageData } from "./$types";

  import BBS from "bbs";
  const base = BBS.i1.none("");

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title}</title>
  <Meta
    title={data.post.title}
    description={data.post.desc}
    image={data.post?.image || "/icons/barabari.png"}
  />
</svelte:head>

<div class="w-100 f j-ct">
  <article class="blur-fff8 rx10 p10 mx-a flow-h">
    <header class="f" style="margin: 3rem 0 2rem 0;">
      <div class="f j-ct al-ct">
        <img
          height="60px"
          width="60px"
          class="icon"
          src={`${base}${data.post.icon}`}
          alt=""
        />
      </div>
      <div>
        <h3 class="m0">{data.post.title}</h3>
        <p style="margin: 5px 0 0 0;">{data.post.desc}</p>
      </div>
    </header>
    <hr />

    {#if data.post.image}
      {@const img = data.post.image}
      <img class="hero" src="/images/set/{img}" alt={data.post.caption} />
    {/if}

    <!-- render the post -->
    <svelte:component this={data.component} />
  </article>
</div>

<style>
  article {
    max-width: 991px;
    word-wrap: break-word;
    width: calc(min(70ch, 100%) - 40px);
  }
  header img {
    object-fit: contain;
    filter: invert(1);
    margin-right: 10px;
    height: auto;
  }
  @media (max-width: 600px) {
    article {
      width: calc(100% - 10px);
      padding: 5px;
      margin: 0;
    }
  }
</style>
