<script>
    import { base } from '$app/paths'
</script>

<main>
    <section class="job-section">
        <h1>Career management</h1>
        
        <p>
            Learn about my career and the work I did for my career management course:
        </p>
        <div class="job">
            <h2>
                ePortfolio
            </h2>
            <p>
                This is the website you're currently on !
                I developped an ePortfolio as part of my Soft and Human skills class, and as a matter of fact, it is the website you're currently on.
            </p>
            <div class="languages">
                <a href="https://svelte.dev/" target="_blank">Svelte</a>
            </div>
        </div>
    </section>

    <section class="job-section">
        <div class="job">
            <h2>
                Elevator Pitch:
            </h2>
            <iframe width="" height="" src="https://www.youtube.com/embed/15x2CxwQgDs?si=691I7nOteVrY-b_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>

    <section class="job-section">   
        <div class="job">
            <h2>Infographic : civic engagement project</h2>
            <p>
              This infographic is the result of a group project in a team of 8 people where we had to create an infographic
              describing our plans and ideas regarding our civic engagement. I personally want to make computer science and 
              surrounding subjects accessible to everyone, which is why I want to work on actions similar to our "Inform" section. 
              As a matter of fact, I was part of the staff during the Capitole du Libre in November 2023.
            </p>
            <div class="info">
                <img src="{base}/img/digital7.png" id="digital7">
            </div>
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