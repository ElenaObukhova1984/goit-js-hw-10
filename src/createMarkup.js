export function createShortMarkup({flags, name}) {
return  `<li class="country-list__item">
            <img class="country-list__img" 
            src="${flags.svg}" width="40" height="20" alt="flag of country">
            
            <p class="country-list__name">${name.official}</p>
        </li>`
};

export function createDetailedMarkup({flags, name, capital, population, languages}) {
    const languagesToString = Object.values(languages).join(", ");
    // console.log(languagesToString);
    return  `<div class="country-list__detail">
            <img class="country-list__img"
            src="${flags.svg}" width="200" height="80" alt="flag of country">
            
            <p class="country-list__name--big">${name.official}</p>
         </div>
         <div class="detail">
            <p class="detail__name">Capital:
                <span class="detail__info">${capital}</span>
            </p>
            <p class="detail__name">Population:
                <span class="detail__info">${population}</span>
            </p>
            <p class="detail__name">Languages:
                <span class="detail__info">${languagesToString}</span>
            </p>
         </div>`
};
