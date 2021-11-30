// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let element = document.getElementById('main_header');
// element.id = 'mon-2021'

// b) робить шириниу елементу ul 400px

// let ulCollection = document.getElementsByTagName('ul');
//
// ulCollection[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elements = document.getElementsByClassName('linkList');
// for (const element of elements) {
//     element.style.width = '50%'
//
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let text = document.getElementsByClassName('listElement2');
// console.log(text[0].innerText)

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liCollection = document.getElementsByTagName('li');
// for (const element of liCollection) { element.style.background = 'blue'
//
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// let aCollection = document.getElementsByTagName('a');
// for (const element of aCollection) {
//     element.classList.add('anchor')
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aCollection = document.getElementsByTagName('a');
//
// for (const element of aCollection) {
//     if (element.innerText === 'link3') {
//         element.style.fontSize = '40px'
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aCollection = document.getElementsByTagName('a');
//
// for (const element of aCollection) {
//     element.classList.add(`element_${element.innerText}`)
//
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let color = prompt('enter color pls')
// let collection = document.getElementsByClassName('sub-header');
// for (const element of collection) {
//     element.style.background = color
//
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('enter color plz')
// let collection = document.getElementsByClassName('sub-header');
// for (const element of collection) {
//     if (element.innerText === 'content 2 segment')
//         element.style.background = color
//
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('enter text pls');
//
// let collection = document.getElementsByClassName('content_1');
//
// collection[0].innerText = text;


// l) отримати елементи p та змінити їм padding на 20px

// let pCollection = document.getElementsByTagName('p');
// for (const element of pCollection) { element.style.padding = '20px'
//
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let collection = document.getElementsByClassName('text2');
// for (const element of collection) {
//     element.innerText = 'sep-2021'
//
// }
