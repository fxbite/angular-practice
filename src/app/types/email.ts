export interface Mail {
    folder: string,
    body: string,
    subject: string,
    from: string,
    to: string,
    date: string,
    senderName: { 
        last: string, 
        first: string
    },
    corpus: string,
    _id: string
}

export interface Contact {
    tags: [
        number,
        string
    ],
    address: {
        zip: number,
        state: string,
        city: string,
        street: string
    },
    phone: string,
    email: string,
    company: string,
    age: number,
    picture: string,
    _id: string,
    name: {
        last: string,
        first: string
    }
}