<script>
    import Meta from "../../components/meta.svelte";
    import Layout from "$layout/primary.svelte";
</script>

<svelte:head>
    <Meta title="Support Us" />
</svelte:head>

<Layout title="Support Us!">
    <div slot="desc">
        We are expanding our programme to make tech education more accessible.
        We need your support
    </div>

    <main slot="max">
        <div class="hero f fw">
            <div class="f-col fw j-ct al-ct" style="flex:1;">
                <img id="QR" src="/icons/qr.png" alt="UPI QR Code" />
                <h2 class="w-100 m5 tc">Scan & Pay with UPI!</h2>
                <div class="tc" style="width:min(400px, 100%)">
                    Donations to this Organisation are tax exempt <br />under
                    80G & 12A
                </div>
            </div>
            <div class="f-col j-ct al-ct fw" style="flex:1;font-size:1.2em;">
                <div style="width:min(500px, 100%)">
                    <div class="w-100" style="margin:0 0 10px 10px;">
                        By December 2023 we hope to have
                    </div>
                    <ul>
                        <li>
                            <b>Tablets & Internet Service</b> for our
                            <a href="/#about">Tech Empowerment Program </a> (Andheri,
                            Thane & Hanging Gardens) batches
                        </li>
                        <li>
                            <b>Server space</b> to help us scale our Tech Capabilities
                        </li>
                        <li>
                            Two Tech <b>Interns</b> for our Tech For Good
                            Projects
                            <a
                                href="https://github.com/orgs/Barabari-Project/repositories"
                            >
                                Barabari-Project
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</Layout>
<div class="w-100 f j-ar fw p20 bg-222">
    <h1 class="f-col j-ct">See all our Financial Reports here</h1>
    <div class="f j-ct">
        <a
            href="https://drive.google.com/drive/folders/1A6zH9SNqTomQ-cNNB05XrfnbaK51RR9O"
            target="_blank"
            rel="noreferrer"
            class="blur-16 fw4 CTA tc rpm-20 p-rel f j-ar"
        >
            <div class="align-self:center;">Financials</div>
            <svg viewBox="0 0 32 32" height="48">
                <path d="M11 29 24 16 11 3" />
            </svg>
        </a>
    </div>
</div>

<style lang="scss">
    .CTA {
        font-size: 2.25rem;
        line-height: 0.8em;
    }
    @media (max-width: 768px) {
        .CTA {
            width: 75%;
        }
    }
    a {
        left: 10%;
        max-width: 100%;
        text-decoration: none;
        color: #000;
        transition: 0.2s box-shadow ease-in-out;
        &:hover {
            // light soft white box shadow
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
        }
    }
    @media (max-width: 768px) {
        a {
            left: 2px;
        }
    }
    #QR {
        height: 250px;
        width: 250px;
        max-width: 100%;
        max-height: 100%;
    }
    ul li {
        line-height: 1.15em;
        padding: 5px;
    }
    .hero .f-col {
        min-width: 384px;
    }

    .hero {
        height: 50vh;
    }
    @media (max-width: 768px) {
        .hero {
            height: 75vh;
        }
    }
    svg {
        width: 32px;
        height: 32px;
        fill: none;
        stroke: currentcolor;
    }
</style>
