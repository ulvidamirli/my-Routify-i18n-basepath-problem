<script>
    import { _, isLoading, locale, locales } from 'svelte-i18n'
    
    const handleChange = () => {
        $goto($page.path);
    };
</script>

{#if $isLoading}

    <p>Loading</p>

{:else}

    <select bind:value={$locale} on:change={handleChange}>
        {#each $locales as locale}
            <option class="text-xs" value={locale}>{locale}</option>
        {/each}
    </select>

    <h1 class="text-xl">{$_('about.heading')}</h1>
    <p>{$_('about.paragraph')}</p>

    <br><br><hr><br><br>

    <a class="px-4 py-2 border rounded-lg" href="/">{$_('home.heading')}</a>
    <a class="px-4 py-2 border rounded-lg" href="/about-us/">{$_('about.heading')}</a>
    
{/if}
