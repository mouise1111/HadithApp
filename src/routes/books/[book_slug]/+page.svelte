<script>
	export let data;
	const { chapters, title } = data;
</script>

<h1 class="text-5xl font-bold text-center m-3 pb-3">{title}</h1>
<section class="px-4 py-8">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
		{#each chapters as chapter}
			<a href="/books/{title}/{chapter.chapterNumber}">
				<div class="bg-white block p-4 rounded-lg shadow-md transition-all hover:shadow-xl">
					<h2 class="text-lg font-semibold mb-2">
						{chapter.chapterNumber}. {chapter.chapterEnglish}
					</h2>
					<p class="text-sm mb-2">{chapter.chapterUrdu}</p>
					<p class="text-sm mb-2">{chapter.chapterArabic}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
