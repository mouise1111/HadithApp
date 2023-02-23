<script>
	import { writable } from 'svelte/store';
	import { favorites } from '../stores/favorites';

	// function handleKeyDown(event) {
	// 	if ((event.key === 'Enter')) {
	// 		console.log('enter key pressed ');
	// 		addFruit(name)
	// 	}
	// }
	// let name = '';

	let hadith_values;
	favorites.subscribe((value) => {
		hadith_values = value;
	});

	function removeFromFavorites(hadith) {
		// remove hadith from favorites
	}
</script>

<h1 class="text-5xl font-bold text-center m-3 mb-5">Hadith.com</h1>
{#if hadith_values != null}
	<h2 class="text-xl font-bold m-3 text-primary">Your favorite hadiths</h2>
	{#each hadith_values as hadith}
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
			<button class="btn btn-secondary" on:click={() => removeFromFavorites(hadith)}
				>Remove from Favorites</button
			>
		</div>
	{/each}
{/if}

{#if hadith_values === null}
	<h2 class="text-xl font-bold m-3 text-primary">You don't have any favorite hadiths yet...</h2>
{/if}
<!-- <HadithSingle hadith={hadith_values} addToFavorites={'a'} /> -->

<!-- <input type="text" placeholder="Type fruit here" class="input w-full max-w-xs" bind:value={name} on:keydown={handleKeyDown}> -->

<!-- <button class="btn btn-primary" on:click={addFruit(name)}>add to basket</button> -->
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
