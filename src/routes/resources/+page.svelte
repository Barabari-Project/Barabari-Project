<script>
  import Layout from "$layout/primary.svelte";
  import BBS from "bbs";

  const base = BBS.i1.none("");
  export let data;
</script>

<Layout title="Find out more!">
  <section class="mx-a w-100" slot="max">
    {#each data.posts as p}
      <a class="d-b p20 m10 rx20" href="/resources/{p.slug}">
        <div class="f">
          <div class="f j-ct al-ct">
            <img
              height="60px"
              width="60px"
              class="icon"
              src={`${base}${p.icon}`}
              alt=""
            />
          </div>
          <div>
            <h3>{p.title}</h3>
            <p style="margin: 5px 0 0 0;">{p.desc}</p>
          </div>
        </div>
      </a>
    {/each}
  </section>
</Layout>

<style>
  .icon {
    object-fit: contain;
    filter: invert(1);
    margin-right: 10px;
    height: auto;
  }
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
  a {
    color: #fff;
    border: 1px solid #8888;
    text-decoration: none;
    transition: background 0.2s ease-in-out;
  }
  a:hover {
    background: #fff1;
  }
  h3 {
    padding: 0;
    margin: 0 0 7px 0;
  }
</style>
