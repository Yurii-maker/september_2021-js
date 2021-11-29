// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array = [777,11,25,1978,101,'lorem','ipsum','dolor','sit','amet',true,false];
//     console.log(array);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 'lorem';
// array[1] = 20;
// array[2] = 'dolor';
// array[3] = 101;
// array[4] = false;
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, placeat.</h2></div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div><h2>${i+1} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, placeat.</h2></div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>Lorem ipsum dolor sit amet.</h1></div>`);
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>${i + 1} - Lorem ipsum dolor sit amet.</h1></div>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let numb of numbers) {
//     console.log(numb)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Perferendis', 'voluptatum']
// for (let word of words) {
//     console.log(word);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [110, false, 120, 'lorem', 'ipsum', 'dolor', true, 18, false,'amet'];
// for (let e of array) {
//     console.log(e)
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [110, false, 120, 'lorem', 'ipsum', 'dolor', true, 18, false, 'amet'];
// for (let bool of array) {
//     if (typeof bool === 'boolean') {
//         console.log(bool)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [110, false, 120, 'lorem', 'ipsum', 'dolor', true, 18, false, 'amet'];
// for (let numb of array) {
//     if (typeof numb === 'number') {
//         console.log(numb)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [110, false, 120, 'lorem', 'ipsum', 'dolor', true, 18, false, 'amet'];
// for (const string of array) {
//     if (typeof string === 'string') {
//         console.log(string)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 'hello';
// array[1] = 'lorem';
// array[2] = true;
// array[3] = 'ipsum';
// array[4] = 'okten';
// array[5] = 124;
// array[6] = 210;
// array[7] = 211;
// array[8] = 212;
// array[9] = false;
// console.log(array);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`)
// };

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`)
// };

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`)
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<h2>${i}</h2>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(`<h2>${i}</h2>`)
//     }
// }