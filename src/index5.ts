// interface
// optional properties
import { send } from './mailer';

interface Contact {
    name: string;
    phone: string;
    email?: string;
};

const contacts: Contact[] = [];

const newContact: Contact = {
    name: 'Nguyen Phu Quang',
    phone: '0987654321',
    email: 'abc@gmail.com'
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
