// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [new User(1, 'Marko', 'Polo', 'mp@gmail.com', 30736781234),
//     new User(2, 'Yura', 'Gagarin', 'yg@gmail.com', 30988765123),
//     new User(3, 'Oleg', 'Blokhin', 'ob@gmail.com', 30687890456),
//     new User(4, 'Vasia', 'Pupkin', 'vp@gmail.com', 30633214567),
//     new User(5, 'Petya', 'Mostavchuk', 'pm@gmail.com', 30990987654),
//     new User(6, 'Kolya', 'St', 'ks@gmail.com', 30675678765),
//     new User(7, 'Ivan', 'Puluy', 'ip@gmail.com', 30664061239),
//     new User(8, 'Franz', 'Kafka', 'fk@gmail.com', 30670980812),
//     new User(9, 'Viktor', 'Yanukovich', 'lol@gmail.com', 30678908908),
//     new User(10, 'Taras', 'Shevchenko', 'tsh@gmail.com', 30971238908)
// ];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let newArr = array.filter(value => value.id % 2 === 0);
// console.log(newArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let newArr = array.sort((a, b) => b.id - a.id); // відсортував у порядку спадання, бо він і так в порядку зростання
// console.log(newArr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     };
// }
//
// let array = [new Client(1, 'Marko', 'Polo', 'mp@gmail.com', 30736781234, ['bike', 'shoes']),
//     new Client(2, 'Yura', 'Gagarin', 'yg@gmail.com', 30988765123, ['pc', 'mouse', 'keyboard']),
//     new Client(3, 'Oleg', 'Blokhin', 'ob@gmail.com', 30687890456, ['monitor', 'subwoofer', 'book']),
//     new Client(4, 'Vasia', 'Pupkin', 'vp@gmail.com', 30633214567, ['auto']),
//     new Client(5, 'Petya', 'Mostavchuk', 'pm@gmail.com', 30990987654, ['cup', 'tea', 'bed', 'router']),
//     new Client(6, 'Kolya', 'St', 'ks@gmail.com', 30675678765, ['dress', 'desk', 'calendar', 'cheeseburger', 'coca-cola']),
//     new Client(7, 'Ivan', 'Puluy', 'ip@gmail.com', 30664061239, ['phone', 'battery']),
//     new Client(8, 'Franz', 'Kafka', 'fk@gmail.com', 30670980812, ['chair']),
//     new Client(9, 'Viktor', 'Yanukovich', 'lol@gmail.com', 30678908908, ['mozart', 'guitar']),
//     new Client(10, 'Taras', 'Shevchenko', 'tsh@gmail.com', 30971238908, ['coconut', 'apple', 'orange', 'cherry', 'bubblegum', 'hot-dog'])]
//
// // console.log(array)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortedArray = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedArray)
