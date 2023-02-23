<script>
	import BookList from '../components/BookList.svelte';

	export let data;
	const { books } = data;
</script>

<h1 class="text-5xl font-bold text-center m-3">Book collection</h1>

<section class="px-4 py-8">
	<BookList {books} />
</section>
