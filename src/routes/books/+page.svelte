<script>
	export let data;
	const { books } = data;
</script>

<!-- 
{#each books.books as book}
	<h1>{book.bookName}</h1>
{/each} -->
<h1 class="text-5xl font-bold text-center m-3">Book collection</h1>

<section class="px-4 py-8">
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each books.books as book}
			<a
				href="/books/{book.bookSlug}"
				class="bg-white block p-4 rounded-lg shadow-md transition-all hover:shadow-xl"
			>
				<div class="text-lg font-medium text-primary">{book.bookName}</div>
				<div class="text-sm text-secon">{book.writerName}</div>
				<div class="mt-4">
					<div class="text-sm font-medium text-secondary">Stats</div>
					<div class="mt-2 flex items-center text-sm">
						<span class="mr-4"><strong>{book.hadiths_count}</strong> Hadiths</span>
						<span><strong>{book.chapters_count}</strong> Chapters</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
