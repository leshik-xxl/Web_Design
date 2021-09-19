import { Name, Profile } from '../views/profileView.js';

new Profile({ ...JSON.parse(localStorage.getItem('sessionUser')) }).render(document.querySelector('#profile'));

new Name({ ...JSON.parse(localStorage.getItem('sessionUser')) }).render(document.querySelector('#name'));