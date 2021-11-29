// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//a

// let emtyArray = [];
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         emtyArray.push(i);
//     }
// }
// console.log(emtyArray)

//b

// let emtyArray = [];
// for (let i = 0; i < 50; i++) {
//     if (i % 2 !== 0) {
//         emtyArray.push(i);
//     }
// }
// console.log(emtyArray)

//c

// let emtyArray = [];
// for (let i = 0; i < 20; i++) {
//     emtyArray.push(Math.round(Math.random() * 1000))
// }
// console.log(emtyArray)

//d
//
// let emtyArray = [];
// for (let i = 0; i < 20 ; i++) {
//     emtyArray.push(Math.round(Math.random() * 725)+8)
// }
// console.log(emtyArray)

// 2. Вивести за допомогою console.log кожен третій елемен

// let emtyArray = [];
// for (let i = 0; i < 50; i += 3) {
//    emtyArray.push(i)
// };
// console.log(emtyArray)

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let emtyArray = [];
// for (let i = 0; i < 50; i += 3) {
//     if (i % 2 === 0) {
//         emtyArray.push(i)
//     }
// }
// console.log(emtyArray)

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let secondArray = [];
// for (let i = 0; i < firstArray.length; i += 3) {
//     if (i % 2 === 0) {
//         secondArray.push(i)
//     }
// }
// console.log(secondArray)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i+1] % 2 === 0) {
//         console.log(array[i])
//     }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100, 250, 50, 168, 120, 345, 188];
// let suma = 0;
// for (let i = 0; i < array.length; i++) {
//     suma = suma + array[i]
// }
// console.log(suma/array.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// let anotherArray = [];
// for (let number of array) {
//     anotherArray.push(number * 5)
// }
// console.log(anotherArray)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array = [false, 1, 2, true, 'lorem', 'ipsum', 9, 56, 8, 'alert'];
// let anotherArray = [];
// for (let element of array) {
//     if (typeof element === 'number') {
//         anotherArray.push(element)
//     }
// }
// console.log(anotherArray)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city
//         }
//     }
//     usersWithCities.push(user)
// }
// console.log(usersWithCities)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (const number of array) { if(number%2===0){
//     console.log(number)}
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];
// for (const number of array) {
//     newArray.push(number)
// }
// console.log(newArray)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
//
// let word = '';
//
// for (let i = 0; i < array.length; i++) {
//     word = word + array[i]
// }
// console.log(word)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let i = 0;
// while (i < array.length) {
//     word = word + array[i];
//     i++
// }
// console.log(word)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// for (const letter of array) {
//     word = word + letter
// }
// console.log(word)
