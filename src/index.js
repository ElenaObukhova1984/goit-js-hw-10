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

const handleInput = (event) => {
    event.preventDefault();
    country = event.target.value.trim().toLowerCase();
    console.log(country);

    if (country === "") {
        Notify.failure("Please, enter data to search!!!");
        return (refs.list.innerHTML = ""),
            (refs.container.innerHTML = "");
    };

    // console.log('get');
};

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

