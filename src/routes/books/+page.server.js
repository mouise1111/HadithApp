// let APIKEY = import.meta.env.VITE_APIKEY;
const apiKey = '$2y$10$hsC4l52Fu0eC2IzvlTjluqluiAVvfgVUXHFNNpcuFcfmQiDtT08S';
const baseURL = 'https://hadithapi.com/api';
export function load({ fetch }) {
	const fetchBooks = async () => {
		const resp = await fetch(`${baseURL}/books?apiKey=${apiKey}`);
		const data = await resp.json();
		return data;
	};

	return {
		books: fetchBooks()
	};
}
