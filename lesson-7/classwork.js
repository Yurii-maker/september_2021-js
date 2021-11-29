// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.drive = function () {
//         console.log(`we drive with speed - ${this.maxSpeed} at hour`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`)
//             }
//
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     };
// }
//
// let exampleCar = new Car('Ford Focus', 'FMC', 2008, 200, 1.8);
// console.log(exampleCar);
// exampleCar.drive();
// exampleCar.info();
// exampleCar.increaseMaxSpeed(10);
// exampleCar.changeYear(2009);
// exampleCar.addDriver('Yurii',true)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.drive = function () {
//             console.log(`we drive with speed - ${this.maxSpeed} at hour`)
//         };
//         this.info = function () {
//             for (const key in this) {
//                 if (typeof this[key] !== 'function') {
//                     console.log(`${key} - ${this[key]}`)
//                 }
//
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver
//         };
//     };
// }
//
// let car = new Car('Ford Focus', 'FMC', 2008, 200, 1.8);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2009);
// car.addDriver('Yurii',true)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// function Cinderella(name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
// }
//
// let array = [new Cinderella('Orysia', 25, 37),
//     new Cinderella('Ania', 18, 40),
//     new Cinderella('Sasha', 23, 38),
//     new Cinderella('Zina', 19, 36),
//     new Cinderella('liuba', 24, 39),
//     new Cinderella('Masha', 23, 40),
//     new Cinderella('Chrystia', 23, 35),
//     new Cinderella('Marta', 25, 39,),
//     new Cinderella('Lilia', 25, 41),
//     new Cinderella('Katia', 23, 39),
//     new Cinderella('Yulia', 23, 38)
// ]
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince {
//     constructor(name, age, shoeFinds) {
//         this.name = name;
//         this.age = age;
//         this.shoeFinds = shoeFinds;
//     };
// }
//
// let example = new Prince('Yurii', 25, 37);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// // for (const element of array) { if(element.shoeSize===example.shoeFinds){
// //     console.log(element)}
// //
// // }
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let cinder = array.find((item) => item.shoeSize===example.shoeFinds);
// console.log(cinder)
