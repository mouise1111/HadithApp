const apiKey = '$2y$10$hsC4l52Fu0eC2IzvlTjluqluiAVvfgVUXHFNNpcuFcfmQiDtT08S';
const baseURL = 'https://hadithapi.com/api';
export function load({ fetch, params }) {
	const fetchHadith = async (chapter_slug, book_slug) => {
		const resp = await fetch(
			`${baseURL}/hadiths?apiKey=${apiKey}&chapter=${chapter_slug}&book=${book_slug}`
		);
		const data = await resp.json();
		return data.hadiths.data;
	};

	return {
		hadiths: fetchHadith(params.chapter_slug, params.book_slug)
		// title: params.chapter_slug
	};
}
