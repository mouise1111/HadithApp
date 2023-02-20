<!-- <script>
	import { get } from 'svelte/store';
	import { favorites } from '../../stores/favorites';

	let hadiths = get(favorites);
	console.log(hadiths);
	function removeFromFavorites(hadith) {
		favorites.update((favs) => favs.filter((fav) => fav.hadithNumber !== hadith.hadithNumber));
	}
</script>

<section>
	{#if hadiths.length > 0}
		{#each hadiths as hadith}
			<div>
				<h2>{hadith.hadithNumber}</h2>
				<p>{hadith.hadithEnglish}</p>
				<button on:click={() => removeFromFavorites(hadith)}>Remove from favorites</button>
			</div>
		{/each}
	{:else}
		<p>No hadiths added to favorites yet.</p>
	{/if}
</section> -->
