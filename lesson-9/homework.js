// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.background = 'red';
// block.style.color = 'black';
// block.style.fontSize = '30px';
// document.body.appendChild(block);
// let clone = block.cloneNode(true);
// document.body.appendChild(clone)


// - Є масив:
let array = ['Main', 'Products', 'About us', `Contacts`];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let menu = document.body.getElementsByClassName('menu');
// for (const string of array) {
//
//     let li = document.createElement('li');
//     li.innerText = `${string}`;
//     menu[0].appendChild(li)
//
// }
// console.log(menu)

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// for (const item of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.innerText = `${item.title} -  ${item.monthDuration}`;
//     document.body.appendChild(block)
//
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const element of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.classList.add('item');
//     let tittle = document.createElement('h1');
//     tittle.innerText = `${element.title}`;
//     let monthDuration = document.createElement('p');
//     monthDuration.innerText = `${element.monthDuration}`;
//     block.append(tittle,monthDuration);
//     document.body.appendChild(block)
//
// }

