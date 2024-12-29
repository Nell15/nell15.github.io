<script>
    import { base } from '$app/paths'
</script>

<main>
    <section class="job-section">
        <h1>PPP (Personal Professional Project)</h1>
        
        <div class="job">
            <h2>
                Slides
            </h2>
            <p>
                Coming soon
            </p>
        </div>
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
        margin-bottom: 2rem;
    }

    h2 {
        font-size: clamp(10px, 8vw, 25px);
        font-weight: bold;
        margin: auto;
    }

    section {
        display: block;
        margin: 7em 0;
    }

    .job {
        font-size: 1em;
        background-color: transparent;
        border-radius: 2em;
        border: solid;
        border-color: #dedee1;
        text-align: left;
        width: auto;
        height: auto;
        padding: 1em 1.5em;
        margin: 1.5em 0;
    }

    .languages {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .languages > a, .job > p > a {
        transition: all 0.3s ease-in-out;
    }

    .languages >  a:hover, .job > p > a:hover {
        color: rgb(64, 1, 166);
        font-weight: bold;
    }

    .info {
        display: flex;
        justify-content: center;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }
</style>