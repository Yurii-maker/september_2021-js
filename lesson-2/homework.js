//     - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Math.round(Math.random() * 60);
// console.log(time);
// if (time <= 15) {
//     console.log('first quarter')
// } else if (time <= 30) {
//     console.log('second quarter')
// } else if (time <= 45) {
//     console.log('third quarter')
// } else if (time <= 59) {
//     console.log('fourth quarter')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.round(Math.random() * 30) + 1;
// console.log(day);
//
// if (day <= 11) {
//     console.log('first decade')
// } else if (day <= 21) {
//     console.log('second decade')
// } else if (day <= 31) {
//     console.log('third decade')
// }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = !!'text';
// if (test !== true) {
//     console.log('right')
// } else {
//     console.log('not right')
// }
// let test = !!0 ? console.log('not right') : console.log('right');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('number?');
// if (a !== 0) {
//     console.log('right')
// } else {
//     console.log('not right')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let shedule = +prompt('day of the week?')
// switch (shedule) {
//     case 1:
//         console.log('mondays business');
//         break;
//     case 2:
//         console.log('tuesday business');
//         break;
//     case 3:
//         console.log('wednesday business');
//         break;
//     case 4:
//         console.log('thurs business');
//         break;
//     case 5:
//         console.log('friday business');
//         break;
//     case 6:
//         console.log('saturday business');
//         break;
//     case 7:
//         console.log('sunday business');
//         break;
//     default:
//         console.log('wrong day')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('year?');
// if (year % 4 === 0) {
//     console.log('a leap year')
// } else {
//     console.log('not leap year')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let nameJS = prompt('official name of JS?')
// if (nameJS === 'ECMAScript') {
//     console.log('right!')
// } else {
//     console.log('dont know? ECMAScript!')
// }