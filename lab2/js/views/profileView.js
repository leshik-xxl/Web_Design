export class Profile {
    constructor({ firstName, lastName, email, gender, date }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.date = date;
    }
    
    render(tableBody) {
        const element = document.createElement('tr');
        
        element.innerHTML = `
            <th class="name">${this.firstName}</th>
            <th class="name">${this.lastName}</th>
            <th class="telegram">${this.email}</th>
            <th class="number">${this.date}</th>
            <th class="telegram">${this.gender}</th>
        `;

        tableBody.append(element);
    }

    
}

export class Name{
    constructor({ firstName, lastName}) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    render(div){
        const element = document.createElement('p');
        element.innerHTML = `<p class="my-name">${this.firstName} ${this.lastName}</p>`;

        div.append(element);
    }
}