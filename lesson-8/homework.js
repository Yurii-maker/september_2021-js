// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

// let content = document.getElementById('content');
// console.log(content.innerText)

// -- отримує текст з блоку з id "rules"

// let content = document.getElementById('rules');
//
// console.log(content.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// let content = document.getElementById('content');
// content.innerText = 'Hello world my name is ...';

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let p = document.getElementById('rules');
// p.innerText= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, reprehenderit?'

// -- змініть кожному елементу колір фону на червоний

// let elements = document.body.children;
// for (const element of elements) {
//     element.style.background = 'red'
// }

// -- змініть кожному елементу колір тексту на синій

// let elements = document.body.children;
// for (const element of elements) {
//     element.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let classList = document.getElementById('rules').classList;
// console.log(classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let liCollection = document.getElementsByClassName('fc_rules');
// for (const element of liCollection) {
//     element.style.color = 'red'
//
// }