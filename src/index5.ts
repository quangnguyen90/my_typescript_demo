// interface
// optional properties
// optional chaining
import { send } from './mailer';

interface Pet {
    name: string;
};

interface Address {
    city: string;
};

interface Contact {
    name: string;
    phone: string;
    email?: string;
    pet?: Pet;
    addresses?: Address[];
};

const contacts: Contact[] = [];

const newContact: Contact = {
    name: 'Nguyen Phu Quang',
    phone: '0987654321',
    email: 'abc@gmail.com',
    pet: {
        name: 'A',
    },
}

const otherContact: Contact = {
    name: 'Nguyen Phu Quang 2',
    phone: '0987654322',
}

contacts.push(newContact);

// if (newContact.email !== undefined)
if (newContact.email) {
    send(newContact.email, 'subject1', 'content1');
}

function getPetName(contact: Contact): string {
    return contact.pet?.name || '';
}

function getFirstAddress(contact: Contact) {
    return contact.addresses?.[0];
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));

console.log(getFirstAddress(newContact)?.city);
