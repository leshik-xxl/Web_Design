export class ContactList {
    constructor(contacts) {
        this.contacts = contacts;
    }
    
    render(tableBody) {
        var i = 1;
        this.contacts.forEach(element => {
            if(element.email === JSON.parse(localStorage.getItem('sessionUser')).email){
                const table = document.createElement('tr');
                table.innerHTML = `
                    <th scope="row" >${i}</th>
                    <td class="name">${element.name}</td>
                    <td class="number">${element.phone}</td>
                    <td class="telegram">${element.telegram}</td>
                    <td>
                        <button class="btn delete-btn" id="${element.id}" onClick="delete_by_id(this.id)"></button>
                        <button class="btn edit-btn" id="${element.id}" onClick="edit_by_id(this.id)"></button>
                    </td>
                `;
                i = i + 1;
                tableBody.append(table);
            }   
        });

    }
}