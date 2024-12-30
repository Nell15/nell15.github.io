<script>
    import { base } from '$app/paths'
</script>

<main>
    <section class="job-section">
        <h1>PPP (Personal Professional Project)</h1>
        
        {#each {length: 8} as _, i}
                <!-- svelte-ignore a11y-missing-attribute -->
                {#if i != 0}
                <img src="{base}/img/PPP/{i}.png" class="slide">
                {/if}
        {/each}
    </section>

</main>

<style>
    main {
        font-weight: 500;
        font-size: 14px;
        color: #020409;
        padding: 0px 5rem;
        display: block;
        background-color: #fafbfe;
    }

    h1 {
        font-size: clamp(25px, 8vw, 45px);
        font-weight: bold;
        margin: auto;
        margin-bottom: 1rem;
    }

    section {
        display: block;
        margin-top: 4em;
        margin-bottom: 10em;
        display: grid;
        place-items: center;
        gap: 2em;
    }

    .slide {
        width: 80%;
        border-color: #595959;
        border-radius: 1.5em;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }

        section {
            margin: 5em 0;
        }

        .slide {
            width: 100%;
        }
    }
</style>