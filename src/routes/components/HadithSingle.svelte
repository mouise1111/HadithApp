<script>
    export let hadiths, addToFavorites;
</script>

{#each hadiths as hadith}
<div class="px-4 py-6 space-y-4 my-2 bg-white rounded-lg">
    <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="font-bold">{hadith.hadithNumber}</span>
          <span class="font-bold">Narrator:</span>
          <span>{hadith.englishNarrator}</span>
        </div>
        {#if addToFavorites != null}
        <button class="btn btn-primary" on:click={() => addToFavorites(hadith)}>Add to Favorites ❤️</button>
        {/if}
      </div>   
    <div class="flex flex-col space-y-2">
        <div class="flex space-x-2 items-center">
            <span class="font-bold">Arabic:</span>
            <span>{hadith.hadithArabic}</span>
        </div>
        <div class="flex space-x-2 items-center">
            <span class="font-bold">English:</span>
            <span>{hadith.hadithEnglish}</span>
        </div>
    </div>
    <!-- <button class="btn btn-primary" on:click={() => addToFavorites(hadith)}>Add to Favorites ❤️</button> -->
</div>
{/each}