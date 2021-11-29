// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     console.log('its a big array, which has 3 or more elements')
// } else {
//     console.log('its a small array, which has less then 3 elements')
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let a = +prompt('enter number');
// let b = +prompt('enter number');
// let c = +prompt('enter number');
// if (a > b && a < c || a > c && a < b) {
//     alert(a)
// } else if (b > a && b < c || b > c && b < a) {
//     alert(b)
// } else if (c > a && c < b || c > b && c < a) {
//     alert(c)
// }
// else {alert('numbers are equal')}


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 3;
// let b = 2;
// let result = (a + b) < 4 ? console.log('malo') : console.log('bahato')

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//напишіть це тернарним оператором
// let numb = +prompt('enter any number from -100 to 100')
//
// let check = numb > 0 && numb <= 100 ? console.log('positive numb') : numb < 0 && numb >= -100 ? console.log('negative numb') : numb === 0 ? console.log('zero') : console.log('wrong number')