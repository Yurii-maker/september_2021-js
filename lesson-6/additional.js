// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let email = 'some.email@gmail.com';
//
// let emailValidator = (email) => {
//     if (!email.includes('@')) {
//         console.log(`have no - @`)
//     }
//     let split = email.split('@');
//     let firstPart = split[0].toLowerCase();
//     let secondPart = split[1].toLowerCase();
//     for (let i = 0; i < secondPart.length; i++) {
//         if (secondPart[i] === '.' && i < 2) {
//             console.log('wrong point!')
//         }
//
//     }
//     if (firstPart.length < 2 || firstPart.includes('.')) {
//         console.log('first part is wrong!');
//         return firstPart;
//     }
//
//     if (!secondPart.includes('gmail') || !secondPart.includes('.')) {
//         console.log('have no gmail!');
//     } else {
//         console.log('correct email');
//     }
// };
// emailValidator(email);
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sortedArray = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sortedArray);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let str = 'Lorem ipsum dolor sit amet consectetur';
//
// let stringSearch = (str, symbol) => {
//     let letterArr = [];
//     for (const letter of str) {
//         if (letter === symbol) {
//             letterArr.push(letter)
//         }
//     }
//     console.log(letterArr.length);
//     return letterArr
// }
// stringSearch(str, 'o');


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing';
//
// let cutString = (str, n) => {
//     let newStr = [];
//     let split = str.split(' ');
//
//     for (let i = 0; i < n; i++) {
//         newStr.push(split[i])
//     }
//     console.log(newStr);
//     return newStr
// }
// cutString(str, 4);