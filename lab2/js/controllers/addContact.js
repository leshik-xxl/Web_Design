import { Contact } from '../model/contactStoroge.js';
import FormReader from '../utils/formReader.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = FormReader.getData(form);

    if (/\d|\s/.test(data.name) || data.name.length < 3) {
        alert('Wrong first name');
    } else {
        new Contact({ ...data }).save();
        form.reset();
        document.location.href = '/';
    }
});