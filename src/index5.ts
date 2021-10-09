// interface
// optional properties
// optional chaining
// implement interface
// interface declaration merging
// type inference
// duck tying (structural typing)
// Enum (enumerable)
// Union type
import { send } from './mailer';

enum PetType {
    //----- Way 1
    Dog,
    Cat,
    Reptile,
    Bird,
    Fish,
    //----- Way 2
    // Dog = 'Dog',
    // Cat = 'Cat',
    // Reptile = 'Reptile',
    // Bird = 'Bird',
    // Fish = 'Fish',
}

interface Pet {
    name: string;
    type: PetType;
};

interface Address {
    city: string;
};

interface Contact {
    name: string;
    phone: string;
    email?: string;
    gender?: 'male' | 'female';
    pet?: Pet;
    addresses?: Address[];
};

interface Contact {
    isDeleted?: boolean;
}

const contacts: Contact[] = [];

const newContact: Contact = {
    name: 'Nguyen Phu Quang',
    phone: '0987654321',
    email: 'abc@gmail.com',
    gender: 'female',
    pet: {
        name: 'A',
        type: PetType.Dog
    },
    isDeleted: false
}

const otherContact: Contact = {
    name: 'Nguyen Phu Quang 2',
    phone: '0987654322',
}

// Duck typing
// Recommend // const anotherContact: Contact
// Not recommend // but still ok if has enough required fields in interface Contact
const anotherContact = {
    name: 'Nguyen Phu Quang 3',
    phone: '098765433',
}

contacts.push(newContact);
contacts.push(anotherContact);

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

//---------------------------------------------- implement interface
// Example 1: Basic
class MyContact implements Contact {
    name: string;
    phone: string;

    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
    }
}

const a = new MyContact('A', '0987654321');
console.log(a.name);

// Example 2: Advance
interface ContactAdapter {
    getData: () => Promise<Contact[]>;
}

class ContactApp {
    adapter: ContactAdapter;
    constructor(adapter: ContactAdapter) {
        this.adapter = adapter;
    }

    async render() {
        const contacts = await this.adapter.getData();
        console.table(contacts);
    }
}

class MyContactAdapter implements ContactAdapter {
    async getData() {
        // TODO: Get data from API
        // const contacts: Contact[] = await axios here.....
        const contacts: Contact[] = [
            { name: 'A', phone: '123' },
            { name: 'B', phone: '456' }
        ];
        return contacts;
    }
}

const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();