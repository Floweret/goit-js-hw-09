import { Notify } from 'notiflix';
var debounce = require('lodash.debounce');
import { fetchCountries } from './js/fetchCountries';
import { createMarkupBigCard, createMarkupLittleCard } from './js/markup';

const searchFormRef = document.querySelector('input#search-box');
const countriesListRef = document.querySelector('.info');
const informBodyRef = document.querySelector('.body');

const searchDebounce = debounce(onSearchFormSubmit, 300);

searchFormRef.addEventListener('input', event => {
  const query = event.target.value.toLowerCase().trim();
  if (!query.length) {
    countriesListRef.innerHTML = '';
    return;
  }
  searchDebounce(query);
});

async function onSearchFormSubmit(query) {
  if (!query) {
    return;
  }

  try {
    const countries = await fetchCountries(query);

    if (!countries.length) {
      Notify.failure('Oops, there is no country with that name');
      countriesListRef.innerHTML = '';
      return;
    }
    if (countries.length > 10) {
      Notify.info(`Too many matches found. Please enter a more specific name.`);
      return;
    }

    if (countries.length >= 2 && countries.length <= 10) {
      countriesListRef.innerHTML = createMarkupLittleCard(countries);
      return;
    }

    countriesListRef.innerHTML = createMarkupBigCard(countries);
  } catch (error) {
    console.log(error.message);
  }
}
