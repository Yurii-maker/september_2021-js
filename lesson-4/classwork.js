// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function smallerNumber(first_numb, second_numb, third_numb) {
//     if (first_numb < second_numb && first_numb < third_numb) {
//         console.log(first_numb);
//     } else if (second_numb < first_numb && second_numb < third_numb) {
//         console.log(second_numb);
//     } else if (third_numb < first_numb && third_numb < second_numb) {
//         console.log(third_numb)
//     } else {
//         console.log('numbers are equal or you enter not number!')
//     }
// }
//
// smallerNumber(2000, 50, 100)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function biggestNumber(first_numb, second_numb, third_numb) {
//     if (first_numb > second_numb && first_numb > third_numb) {
//         console.log(first_numb);
//     } else if (second_numb > first_numb && second_numb > third_numb) {
//         console.log(second_numb);
//     } else if (third_numb > first_numb && third_numb > second_numb) {
//         console.log(third_numb)
//     } else {
//         console.log('numbers are equal or you enter not number!')
//     }
// }
//
// biggestNumber(2000, 50, 100)


// - створити функцію яка повертає найбільше число з масиву

// let array = [20, 100, 30, 1000, 800, 2000, 16, 1];
// let maxNumberOfArray = array[0];
//
// function biggestNumberOfArray(array) {
//     for (const number of array) {
//         if (maxNumberOfArray < number) {
//             maxNumberOfArray = number
//         }
//     }
//     return maxNumberOfArray
// }
//
// console.log(biggestNumberOfArray(array))

// - створити функцію яка повертає найменьше число з масиву

// let array = [20, 100, 30, 1000, 800, 2000, 16, 1];
//
// let minNumber = array[0];
//
// function smallestNumberOfArray(array) {
//     for (const number of array) {
//         if (minNumber > number) {
//             minNumber = number
//         }
//     }
//     return minNumber
// }
//
// console.log(smallestNumberOfArray(array))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [20, 100, 30, 1000, 800, 2000, 16, 1];
// let element = 0;
//
// function sumator(array) {
//     for (let i = 0; i < array.length; i++) {
//         element = element + array[i]
//     }
//     return element
// }
//
// console.log(sumator(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [20, 100, 30, 1000, 800, 2000, 16, 1];
// let element = 0;
//
// function arithmeticMean(array) {
//     for (const number of array) {
//         element = element + number
//     }
//     result = element/array.length;
//     return result;
// }
//
// console.log(arithmeticMean(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function returnMinDisplayMax(numbers) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const number of arguments) {
//         if (min > number) {
//             min = number
//         } if (max < number) {
//             max = number
//         }
//     }
//     console.log(max)
//     return min
// }
//
// returnMinDisplayMax(7, 20, 40, 50, -1000, 200, 5, 1)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomNumbers(quantity) {
//     let array = [];
//     for (let i = 0; i < quantity; i++) {
//         array.push(Math.round(Math.random() * 100))
//     }
//     return array;
//
// }
//
// console.log(randomNumbers(30))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomNumbers(quantity,limit) {
//     let array = [];
//     for (let i = 0; i < quantity; i++) {
//         array.push(Math.round(Math.random() * limit))
//     }
//     return array;
//
// }
//
// console.log(randomNumbers(20,100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3];
// let newArray = []
//
// function reverse(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray.push(array[i])
//     }
//     console.log(newArray)
// }
//
// reverse(array)