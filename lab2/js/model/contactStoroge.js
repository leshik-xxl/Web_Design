export class Contact{
    constructor({ name, phone, telegram}) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.email = JSON.parse(localStorage.getItem('sessionUser')).email;
        this.name = name;
        this.phone = phone;
        this.telegram = telegram;
    }

    save() {
        if (!localStorage.hasOwnProperty('contacts')) {
            const contacts = [];

            contacts.push({ ...this });
            localStorage.setItem('contacts', JSON.stringify(contacts));
        } else {
            const contacts = JSON.parse(localStorage.getItem('contacts'));

            contacts.push({ ...this });
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }
}