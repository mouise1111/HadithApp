<script>
	import { writable } from "svelte/store";
	import { favorites } from "../stores/favorites";

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
<h1 class="text-5xl font-bold text-center m-3">Hadith.com</h1>
<!-- {#each hadith_values as hadith }
<div class="px-4 py-6 space-y-4 my-2 bg-white rounded-lg">
    <div class="flex space-x-2 items-center">
        <span class="font-bold">{hadith.hadithNumber}</span>
        <span class="font-bold">Narrator:</span>
        <span>{hadith.englishNarrator}</span>
    </div>
    <button class="btn btn-secondary" on:click={() => removeFromFavorites(hadith)}>Remove from Favorites</button>
</div>
{/each} -->
<!-- <HadithSingle hadith={hadith_values} addToFavorites={null}/> -->

<!-- <div class="mockup-window border border-base-300 w-3/4 p-3 px-5">
	<div class="flex justify-center px-4 py-16 border-t border-base-300">
	<ul class="list-disc">
		{#each hadith_values as hadith }
			<li class="list-item">
				{hadith.hadithNumber}
			</li>
		{/each}
	</ul>
</div>
</div> -->

<!-- <input type="text" placeholder="Type fruit here" class="input w-full max-w-xs" bind:value={name} on:keydown={handleKeyDown}> -->
<!-- <button class="btn btn-primary" on:click={addFruit(name)}>add to basket</button> -->

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>

