<style>
    .gallery-teas {
        padding: 1em;
        border-top: 1px solid #ccc;
    }
    .gallery {
        display: grid;
        grid-template-columns: 260px 260px 260px 260px;
    }
    img {
        padding: 0;
        width: 200px;
        opacity: 70%;
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }
    img:hover {
        opacity: 100%;
    }
    .ideogram {
        font-weight: normal;
        font-size: 1em;
    }
    .pinyin {
        display: block;
        font-size: 0.7em;
        color: #999;
    }
    .item {
        padding: 1em;
        margin: 1em 0;
        text-align: center;
        background: white;
        width: 230px;
        -webkit-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        -moz-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
    }
    .voice {
        cursor: pointer;
    }
</style>

<script context="module">
    export function preload(page) {
        return { typeParam: page.params.type }
    }
</script>

<script>
    import { onMount } from 'svelte'
    import IconTeaType from '../components/IconTeaType.svelte'

    export let typeParam

    let teas = []
    let types = []
    let i18n = []

    onMount(async () => {
        const res = await fetch('https://api-tea.brutdethé.fr/api/v1/teas')

        if (res.ok) {
            teas = (await res.json()).api
        } else {
            throw new Error(text)
        }

        const res1 = await fetch('https://api-tea.brutdethé.fr/api/v1/type')

        if (res1.ok) {
            types = (await res1.json()).api.map(type => type.ideogram)
        } else {
            throw new Error(text)
        }

        const res2 = await fetch(`https://api-tea.brutdethé.fr/api/v1/pinyin`)

        if (res2.ok) {
            i18n = (await res2.json()).api
        } else {
            // 404
            throw new Error(text)
        }
    })

    const typeToDisplay = () =>
        types.includes(typeParam) ? [typeParam] : types
    const getTeasByType = (type, teas) => teas.filter(tea => tea.type === type)

    function getPinyin(text, i18n) {
        const term = i18n.filter(term => term.ideogram === text)[0] || {}
        return 'pinyin' in term ? term.pinyin : '-'
    }

    function playAudio(ideogram) {
        document.querySelector(`#${ideogram}`).play()
    }
</script>

<svelte:head>
    <title>Liste des thés</title>
</svelte:head>
<h1>Liste des thés par type</h1>
<p>
    Cette liste regroupe une sélection de thés que l'on imagine assez faciles à
    trouver. Pour voir le détail d'un thé suivez le lien en cliquant sur sa
    photo.
</p>

{#each typeToDisplay(typeParam, types) as type}
    <section class="gallery-teas {type}">
        <IconTeaType ideogram="{type}" pinyin="{getPinyin(type, i18n)}" />
        <div class="gallery">
            {#each getTeasByType(type, teas) as tea}
                <figure class="item">
                    <a href="fiche-{tea.ideogram}">
                        <img
                            src="../assets/thes/thumbs/{tea.ideogram}.jpg"
                            alt="{tea.pinyin}"
                        />
                    </a>
                    <figcaption class="ideogram">
                        <audio id="{tea.ideogram}">
                            <source
                                src="assets/audio/{tea.ideogram}.mp3"
                                type="audio/mpeg"
                            />
                        </audio>
                        <span
                            class="voice"
                            title="voix"
                            on:click="{playAudio(tea.ideogram)}"
                        >
                            {tea.ideogram}
                        </span>
                        <span
                            class="pinyin voice"
                            title="voix"
                            on:click="{playAudio(tea.ideogram)}"
                        >
                            {getPinyin(tea.ideogram, i18n)}
                        </span>
                    </figcaption>

                </figure>
            {:else}
                <!-- this block renders when teas.length === 0 -->
                <p>chargement des thés...</p>
            {/each}
        </div>
    </section>
{:else}
    <!-- this block renders when teas.length =黄山毛峰 HuángShān== 0 -->
    <p>chargement des types thés...</p>
{/each}
