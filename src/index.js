import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { createShortMarkup } from './createMarkup';
import { createDetailedMarkup } from './createMarkup';
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;


const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector(".country-list"),
    container: document.querySelector(".country-info"),
};
// console.log(refs.input);

let country = "";

function renderShortMarkup(data) {
  const markup = data.map(createShortMarkup).join("");
  refs.list.insertAdjacentHTML("afterbegin", markup);
}

function renderDetailedMarkup(data) {
  const markup = data.map(createDetailedMarkup).join("");
  refs.container.insertAdjacentHTML("afterbegin", markup);
}



const handleInput = (event) => {
    event.preventDefault();
    country = event.target.value.trim().toLowerCase();
    // console.log(country);

    if (country === "") {
        Notify.failure("Please, enter data to search!!!");
        return (refs.list.innerHTML = ""),
            (refs.container.innerHTML = "");
    };

    fetchCountries(country)
    .then(data => {
        if (data.length === 1) {
            renderDetailedMarkup(data);
        } else if (data.length >= 10) {
            Notify.info("Too many matches found. Please enter a more specific name.")
        } else { renderShortMarkup(data) };
       
    })
    .catch(error => {
      return Notify.failure("Oops, there is no country with that name");
     
    });
}


refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

