<script>
	import { favorites } from '../../../../stores/favorites';
	import HadithSingle from '../../../components/HadithSingle.svelte';

	export let data;
	const { hadiths } = data;

	function addToFavorites(hadith) {
		favorites.update((favs) => [...favs, hadith]);
		console.log(hadith_values);
	}

	let hadith_values;
	favorites.subscribe((value) => {
		hadith_values = value;
	});
	console.log(hadith_values);
</script>

<section class="px-2">
	<HadithSingle hadiths={hadiths} addToFavorites={addToFavorites} />
</section>