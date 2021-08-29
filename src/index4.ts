// interface

interface Contact {
    name: string;
    phone: string;
    email: string;
};

const contacts: Contact[] = [];

const newContact: Contact = {
    name: 'Nguyen Phu Quang',
    phone: '0987654321',
    email: 'abc@gmail.com'
}

contacts.push(newContact);