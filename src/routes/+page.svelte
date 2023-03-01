<script>
	import { favorites } from '../stores/favorites';
	import { slide } from 'svelte/transition';

	let hadith_values;
	favorites.subscribe((value) => {
		hadith_values = value;
	});

	function removeFromFavorites(hadith) {
		favorites.update(fav => fav.filter(h => h !== hadith));
	}

	console.log(hadith_values);
</script>

<h1 class="text-5xl font-bold text-center m-3 mb-5">Welcome to Hadith.com</h1>
<p class="txt text-primary text-center">
	The Hadith of the Prophet Muhammad (صلى الله عليه و سلم) at your fingertips
</p>
{#if hadith_values.length != 0}
	<h2 class="text-xl font-bold m-3 text-primary mx-5">Your favorite hadiths</h2>
	{#each hadith_values as hadith}
		<div class="px-4 py-6 space-y-4 my-2 bg-white rounded-lg" transition:slide|local>
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
			<button class="btn btn-secondary" on:click={() => removeFromFavorites(hadith)}
				>Remove from Favorites</button
			>
		</div>
	{/each}
{/if}

{#if hadith_values.length === 0}
<div class="m-8">
	<h2 class="text-xl font-bold text-secondary">You don't have any favorite hadiths yet...</h2>
	<p class="py-5">
		To add hadith to favorites, go <a href="/books" class="link">here</a>
	</p>
</div>
{/if}
<!-- <HadithSingle hadith={hadith_values} addToFavorites={'a'} /> -->


<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
