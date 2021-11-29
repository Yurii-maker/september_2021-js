// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function showOrConcatArg(elements) {
//
//     if (arguments.length === 1) {
//         console.log(elements)
//     } else if (arguments.length > 1 && typeof arguments[0] === 'number') {
//         let concat = 0;
//         for (let i = 0; i < arguments.length; i++) {
//             concat = concat + arguments[i];
//         }
//         console.log(concat)
//     } else if (typeof arguments[0] === 'string' || typeof arguments[0] === 'boolean') {
//         let strConcat = '';
//         for (let i = 0; i < arguments.length; i++) {
//             strConcat = strConcat + arguments[i]
//         }
//         console.log(strConcat)
//     }
// }
//     showOrConcatArg(true,'mama',  20, 30)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// var res = [];
// for(var i=0;i<arr1.length;++i)
// {
//     for(var j=0;j<arr1.length;++j)
//         res.push((arr1[i] + arr2[j]));
// }
// return res;


// let first = [1, 2, 3, 4];
// let second = [2, 3, 4, 5];
//
//
// function sumator(array1, array2) {
//     let result = []
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i])
//     }
//     console.log(result)
//     return result
//
// }
// sumator(first, second)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function returnKeys(array1) {
//     let emtyArray = [];
//     for (const element of array1) {
//
//         for (const key in element) {
//             emtyArray.push(key)
//         }
//     }
//     console.log(emtyArray)
//     return emtyArray
// }
//
// returnKeys(user)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function returnKeys(array1) {
//     let emtyArray = [];
//     for (const element of array1) {
//
//         for (const key in element) {
//             emtyArray.push(element[key])
//         }
//     }
//     console.log(emtyArray)
//     return emtyArray
// }
//
// returnKeys(user)