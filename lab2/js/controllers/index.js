import { Name} from '../views/profileView.js';
import {ContactList} from '../views/contactListView.js'

new Name({ ...JSON.parse(localStorage.getItem('sessionUser')) }).render(document.querySelector('#name'));
new ContactList(JSON.parse(localStorage.getItem('contacts'))).render(document.querySelector('#table'));
