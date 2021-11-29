// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const smallestNumber = (firstN, secondN, thirdN) => {
//     if (firstN < secondN && firstN < thirdN) {
//         console.log(firstN)
//     } else if (secondN < firstN && secondN < thirdN) {
//         console.log(secondN)
//     } else if (thirdN < firstN && thirdN < secondN) {
//         console.log(thirdN)
//     } else {
//         console.log('numbers are equal or something going wrong ')
//     }
// };
//
// smallestNumber(50, -5, 10);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const biggestNumber = (firstN, secondN, thirdN) => {
//     if (firstN > secondN && firstN > thirdN) {
//         console.log(firstN)
//     } else if (secondN > firstN && secondN > thirdN) {
//         console.log(secondN)
//     } else if (thirdN > firstN && thirdN > secondN) {
//         console.log(thirdN)
//     } else {
//         console.log('numbers are equal or something going wrong ')
//     }
// };
//
// biggestNumber(50, -5, 10);

// - створити функцію яка повертає найбільше число з масиву

// const array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// const returnBiggestN = (array) => {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i];
//         }
//     }
//     console.log(max);
//     return max;
//
// };
//
// returnBiggestN(array);

// - створити функцію яка повертає найменьше число з масиву

// const array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// const returnSmallestN = (array) => {
//     let min = array[0];
//     for (const number of array) {
//         if (min > number) {
//             min = number
//         }
//     }
//     console.log(min);
//     return min;
// };
// returnSmallestN(array);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// const sumator = (array) => {
//     let suma = 0;
//     for (const number of array) {
//         suma = suma + number
//
//     }
//     console.log(suma);
//     return suma;
// };
// sumator(array);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// const sumator = (array) => {
//     let suma = 0;
//     for (const number of array) {
//         suma = (suma + number)
//     }
//     let midArithmetic = suma / array.length;
//     console.log(midArithmetic);
//     return midArithmetic;
// };
// sumator(array);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// const returnMinDisplayMax = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (const number of array) {
//         if (min > number) {
//             min = number
//         }
//         if (max < number) {
//             max = number
//         }
//     }
//     console.log(max);
//     return min;
// };
//
// returnMinDisplayMax(array);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// const arrayPusher = (quantity) => {
//     let array = [];
//     for (let i = 0; i < quantity; i++) {
//         array.push(Math.round(Math.random() * 100))
//     }
//     console.log(array);
//     return array;
// };
// arrayPusher(10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const arrayPusher = (quantity, limit) => {
//     let array = [];
//     for (let i = 0; i < quantity; i++) {
//         array.push(Math.round(Math.random() * limit))
//     }
//     console.log(array);
//     return array;
// };
//
// arrayPusher(10, 20);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// const array = [1, 2, 3];
// const reverse = (array) => {
//     const newArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i])
//     }
//     console.log(newArray);
//     return newArray;
// };
//
// reverse(array);