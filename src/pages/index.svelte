<script>
    import { _, isLoading } from 'svelte-i18n';
</script>

{#if $isLoading}

    <p>Loading</p>

{:else}

    <h1 class="text-xl">{$_('home.heading')}</h1>
    <p>{$_('home.paragraph')}</p>

    <br><br><hr><br><br>

    <a class="px-4 py-2 border rounded-lg" href="/">{$_('home.heading')}</a>
    <a class="px-4 py-2 border rounded-lg" href="/about-us/">{$_('about.heading')}</a>
    
{/if}