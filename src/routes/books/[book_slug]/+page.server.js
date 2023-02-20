const apiKey = '$2y$10$hsC4l52Fu0eC2IzvlTjluqluiAVvfgVUXHFNNpcuFcfmQiDtT08S';
const baseURL = 'https://hadithapi.com/api';
export function load({ fetch, params }) {
	const fetchChapters = async (slug) => {
		const resp = await fetch(`${baseURL}/${slug}/chapters?apiKey=${apiKey}`);
		const data = await resp.json();
		return data.chapters;
	};

	return {
		chapters: fetchChapters(params.book_slug),
		title: params.book_slug
	};
}
