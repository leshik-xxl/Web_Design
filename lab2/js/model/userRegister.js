export class User {
    constructor({ firstName, lastName, email, password, gender, date }) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = 'Undefined';
        this.gender = gender;
        this.date = date;
    }

    save() {
        if (!localStorage.hasOwnProperty('users')) {
            const users = [];

            users.push({ ...this });
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const users = JSON.parse(localStorage.getItem('users'));

            users.push({ ...this });
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}