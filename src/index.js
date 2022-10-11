import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { createShortMarkup } from './createMarkup';
import { createDetailedMarkup } from './createMarkup';
import { fetchCountries } from './fetchCountries';



const DEBOUNCE_DELAY = 300;


export const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector(".country-list"),
    container: document.querySelector(".country-info"),
};
// console.log(refs.input);

let country = "";


const handleInput = (event) => {
    // event.preventDefault();
    country = event.target.value.trim().toLowerCase();
    // console.log(country);

    if (country === "") {
        Notify.failure("Please, enter data to search!!!");
        return clearMarkup();
    };

    fetchCountries(country)
    .then(data => {
        if (data.length === 1) {
            clearMarkup();
            createDetailedMarkup(data);
        } else if (data.length > 10) {
            Notify.info("Too many matches found. Please enter a more specific name.");
            clearMarkup();
        } else {
            createShortMarkup(data)
        }
       
    }).catch(error => {
        Notify.failure("Oops, there is no country with that name");
        clearMarkup();
     
    });
}

function clearMarkup() {
    refs.list.innerHTML = "";
    refs.container.innerHTML = "";
}


refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));



