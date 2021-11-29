// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hW = 'hello world';
// let lI = 'lorem ipsum';
// let jsIC = 'javascript is cool';
//
// console.log(hW.length);
// console.log(lI.length);
// console.log(jsIC.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hW = 'hello world';
// let lI = 'lorem ipsum';
// let jsIC = 'javascript is cool';
//
// let a = hW.toUpperCase();
// let b = lI.toUpperCase();
// let c = jsIC.toUpperCase();
//
// console.log(a);
// console.log(b);
// console.log(c);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let hW = 'HELLO WORLD';
// let lI = 'LOREM IPSUM';
// let jsIC = 'JAVASCRIPT IS COOL';
//
// let a = hW.toLowerCase();
// let b = lI.toLowerCase();
// let c = jsIC.toLowerCase();
//
// console.log(a);
// console.log(b);
// console.log(c);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let cleanStr = str.trim();
// console.log(cleanStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// const stringToArray = (str) => {
//     return str.split(' ');
//
// };
// let newStr = stringToArray(str);
// console.log(newStr);
// document.write(newStr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => {
//     return str.slice(0, length)
// };
//
// let deletedChar = delete_characters(str, 7);
// console.log(deletedChar)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// let insert_dash = (str) => {
//     return str.split(' ').join('-').toUpperCase()
// };
//
// let newStr = insert_dash(str);
//
// console.log(newStr);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'lorem ipsum dolor sit amet';
//
// let toUpC = (str) => {
//    return str[0].toUpperCase() + str.slice(1)
// };
//
// let newStr = toUpC(str);
//
// console.log(newStr);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'lorem ipsum dolor sit amet';
// let capitalize = (str) => {
//     return str.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ')
// }
// let newStr = capitalize(str);
// console.log(newStr)