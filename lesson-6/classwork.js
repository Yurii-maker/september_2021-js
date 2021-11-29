// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let cleanName = (name) => {
//     return name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
// }
// console.log(cleanName(n3))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const randomNumber = (capacity, length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * capacity))
//     }
//     return array;
// };
//
// let random = randomNumber(20, 50);
// console.log(random);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let array = [10, 20, 30, 40, 35, 45, 18, 7, -9]
//
// let sort = array.sort((a, b) => {
//         return a - b
//     }
// );
// console.log(sort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let array = [10, 20, 30, 40, 35, 45, 18, 7, -9];
//
// let filter = array.filter(number => number % 2 === 0);
//
// console.log(filter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10, 20, 30, 40, 35, 45, 18, 7, -9];
//
// let mapped = array.map(element => {
//     return element.toString()
// });
// console.log(mapped);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3];
// let sort = (array, direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b
//         )
//     }
//     if (direction === 'descending') {
//         return array.sort((a, b) => b - a
//         )
//     }
// };
// console.log(sort(nums, 'ascending'));
// console.log(sort(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sortedArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - b.monthDuration);
// console.log(sortedArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredArray = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5
// });
// console.log(filteredArray)

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str = 'наслаждение';
// let cutString = (str, n) => {
//     let newStr = [];
//     for (let i = 0; i < str.length; i++) {
//         let substr = str.substr(0, n);
//         newStr.push(substr);
//         str = str.slice(n)
//     }
//
//
//     console.log(newStr)
//
//
// };
//
// cutString(str, 5)
