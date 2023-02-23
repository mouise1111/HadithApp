<script>
	import BookList from "../components/BookList.svelte";

	export let data;
	const { books } = data;
</script>

<<<<<<< HEAD
<!-- 
{#each books.books as book}
	<h1>{book.bookName}</h1>
{/each} -->
=======
>>>>>>> 0bb0900c7bd48c54dee3fcf14c92f8b0cdec97bd
<section class="px-4 py-8">
	<BookList books={books}/>
</section>
