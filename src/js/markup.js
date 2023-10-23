export function createMarkupBigCard(countries) {
  return countries
    .map(
      ({
        name,
        capital,
        population,
        flags,
        languages,
      }) => `<li class="countriesItem">
    <h2 class="title"><img src="${flags.svg}" alt="${
        name.official
      }" class="image"  style="height: 15px; width: 20px"> ${name.official}</h2>
    <p class="capital">Capital: ${capital}</p>
    <p class="population">Population: ${population}</p>
    <p class="languages">Languages: ${Object.values(languages)}</p>
  </li>`
    )
    .join('');
}

export function createMarkupLittleCard(countries) {
  return countries
    .map(
      ({ name, flags }) => `<li class="productsItem">
      <h2 class="title"><img src="${flags.svg}" alt="${name.official}" class="image" style="height: 15px; width: 20px"> ${name.official}</h2>
      
    </li>`
    )
    .join('');
  //<img src="${flags.svg}" alt="${name.official}" class="image" style="height: 100px; width: 100px">
}
