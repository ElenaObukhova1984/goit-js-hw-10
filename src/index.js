import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const DEBOUNCE_DELAY = 300;
const debounce = require("lodash.debounce");

const refs = {
    input: document.querySelector("#search-box"),
    list: document.querySelector(".country-list"),
    container: document.querySelector(".country-info"),
};
// console.log(refs.input);

const handleInput = (event) => {
    event.preventDefault();
    const country = event.target.value.trim().toLowerCase();
    console.log(country);

    if (country === "") {
        Notify.failure("Please, enter data to search!!!");
        return (refs.list.innerHTML = ""),
            (refs.container.innerHTML = "");
    };

    // console.log('get');
};

refs.input.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

