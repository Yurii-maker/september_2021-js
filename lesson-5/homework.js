// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// const rectangleArea = (a, b) => a * b;
//
// console.log(rectangleArea(20, 6));

// - створити функцію яка обчислює та повертає площу кола

// const circleArea = (r) => Math.PI * r ** 2;
//
// console.log(circleArea(20));

// - створити функцію яка обчислює та повертає площу циліндру

// const cylinderArea = (h,r) => 2 * Math.PI * r * h;
//
// console.log(cylinderArea(2,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [2, 7, 'lorem', true, 777, 'ipsum', 1, 'dolor', false, 'sit', 'amet'];
//
// const returnElement = (array) => {
//     for (const element of array) {
//         console.log(element)
//
//     }
// };
// returnElement(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const createP = (text) => document.write(`<p>${text}</p>`);
//
// createP(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur ex expedita incidunt iste libero nobis placeat vero vitae voluptates?`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const createList = (text) => {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li></ul>`)
// };
//
// createList(`Lorem ipsum dolor`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const createList = (text, numberOfLi) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < numberOfLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
//
// createList(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, tempore`, 7);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [2, 7, 'lorem', true, 777, 'ipsum', 1, 'dolor', false, 'sit', 'amet'];
//
// const listOfArrayElements = (array) => {
//     document.write(`<ol>`)
//     for (const element of array) {
//         document.write(`<li>${element}</li>`)
//
//     }
//     document.write(`</ol>`)
//
// };
// listOfArrayElements(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let array = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
//
// const displayArrayObject = (array) => {
//     for (const element of array) {
//         document.write(`<div>id - ${element.id} name: ${element.name} and age - ${element.age}</div><hr>`)
//
//     }
//
// };
//
// displayArrayObject(array);