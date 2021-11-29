// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleArea(a, b) {
//     let result = a * b;
//     return result
// }
//
// let example = rectangleArea(20, 6);
// console.log(example)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea(r) {
//     let result = Math.PI*r**2;
//     return result
// }
// let example = circleArea(20);
// console.log(example)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderArea(h, r) {
//     let result = 2 * Math.PI * r * h;
//     return result
// }
// let example = cylinderArea(2,4)
// console.log(example)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [2, 7, 'lorem', true, 777, 'ipsum', 1, 'dolor', false, 'sit', 'amet'];
//
// function showElementOfArray(array) {
//     for (const element of array) {
//         console.log(element)
//     }
// }
// showElementOfArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createP(text) {
//     document.write(`<p>${text}</p>`)
// }
// createP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUl(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li></ul>`)
// }
//
// createUl('Lorem ipsum dolor sit amet')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUl(text, numberOfLi) {
//     document.write(`<ul>`)
//     for (let i = 0; i < numberOfLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl('Lorem ipsum dolor sit amet, consectetur adipisicing', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [2, 7, 'lorem', true, 777, 'ipsum', 1, 'dolor', false, 'sit', 'amet'];
//
// function organizer(array) {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// organizer(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ]
//
// function organizer(array) {
//     for (const element of array) {
//         document.write(`<div>${element.id}. ${element.name} - ${element.age}</div><hr>`)
//     }
// }
//
// organizer(array)