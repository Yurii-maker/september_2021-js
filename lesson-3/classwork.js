// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

// 1. перебрати його циклом while

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++
// }

//     2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i])
//     } i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     };
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let i = 0;
// while (i < array.length) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten'
//     }  console.log(array[i])
//     i++
// }

// 8. вивести масив в зворотньому порядку.

// let i = array.length-1;
// while (i >= 0) {
//     console.log(array[i]);
//     i--
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.
// let i = array.length-1;
// while (i >=0) {
//     console.log(array[i]);
//     i--
// }

// 2

//     for (let i = array.length-1; i >=0; i--) {
//         console.log(array[i])
//     }

// 3

// let i = array.length-1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(array[i])
//     } i--
// }

// 4

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(array[i])
//     }
// }

//5

// let i = array.length-1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     };
//     i--
// }

//6

// for (let i = array.length-1; i >=0; i--) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
// }

//7

// let i = array.length-1;
// while (i >=0) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten'
//     }  console.log(array[i])
//     i--
// }