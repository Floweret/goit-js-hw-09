//https://restcountries.com/v3.1/name/name
const BASE_URL = 'https://restcountries.com/v3.1';
const filters = 'name,capital,population,flags,languages';

export async function fetchCountries(query) {
  try {
    const result = await fetch(`${BASE_URL}/name/${query}?fields=${filters}`);

    if (!result.ok || result.status == 404) {
      throw new Error(error);
    }
    return result.json();
  } catch (error) {
    console.log(error.message);
    return {};
  }
}
