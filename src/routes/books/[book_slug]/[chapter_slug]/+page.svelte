<script>
	import { favorites } from '../../../../stores/favorites';
	import { get } from 'svelte/store';

	export let data;
	const { hadiths } = data;

	function addToFavorites(hadith) {
		favorites.update((favs) => [...favs, hadith]);
	}

	let hadithsfav = get(favorites);
	console.log(hadithsfav);
</script>

<section class="px-2">
	{#each hadiths.data as hadith}
		<div class="px-4 py-6 space-y-4 my-2 bg-white rounded-lg">
			<div class="flex space-x-2 items-center">
				<span class="font-bold">{hadith.hadithNumber}</span>
				<span class="font-bold">Narrator:</span>
				<span>{hadith.englishNarrator}</span>
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
			<button class="btn px-2" on:click={() => addToFavorites(hadith)}>Add to Favorites ❤️</button>
		</div>
	{/each}
</section>
