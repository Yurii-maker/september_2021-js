//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let number1 = +prompt('enter first number');
// let number2 = +prompt('enter second number');
// if (number1 < number2) {
//     console.log(number2)
// } else if (number1 === number2) {
//     console.log('the numbers are equal')
// } else {
//     console.log(number1)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flatNum = +prompt('number of your flat?')
// if (flatNum > 0 && flatNum <= 20) {
//     console.log('first entrance')
// } else if (flatNum > 20 && flatNum <= 48) {
//     console.log('second entrance ')
// } else if (flatNum > 48 && flatNum <= 90) {
//     console.log('third entrance ')
// } else {
//     console.log('wrong number!')
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('write number') === 10 ? console.log('correct') : console.log('incorrect')

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let variable = [];
// if (typeof variable === 'number') {
//     console.log(1)
// } else if (typeof variable === 'string') {
//     console.log(2)
// } else if (typeof variable === 'boolean' || typeof variable === 'object') {
//     console.log(3)
// }
// else {console.log('something else')}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('outside temperature?')
// if (temp >= 10 && temp <= 22) {
//     console.log('go to study!')
// } else {
//     console.log('stay at home and study online')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let number = +prompt('enter number from 1 to 5')
// switch (number) {
//     case 1 :
//         console.log('your present is an auto');
//         break;
//     case 2 :
//         console.log('your present is a moto');
//         break;
//     case 3 :
//         console.log('your present is a phone');
//         break;
//     case 4 :
//         console.log('your present is headphones');
//         break;
//     case 5 :
//         console.log('your present is sweets');
//         break;
//     default:
//         console.log('wrong number')
// }