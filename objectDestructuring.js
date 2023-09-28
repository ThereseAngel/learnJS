// Object destructuring

const user = {
    name: 'Angel',
    age: 22,
    email: 'saavedra@gmail.com',
    favBook: {
        bookName: 'Atomic Habits',
        bookAuthor: 'xyz',
    },
};

// Destructuring
const {name, age, email, favBook} = user;
const {bookName, bookAuthor} = favBook;

console.log(name);
console.log(age);
console.log(email);
console.log(bookName);
console.log(bookAuthor);

