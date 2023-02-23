<script>
	import BookList from '../components/BookList.svelte';

	export let data;
	const { books } = data;
</script>

<section class="px-4 py-8">
	<BookList {books} />
</section>
