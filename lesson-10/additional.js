//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log(`tagName - ${e.target.localName}`);
//     console.log(`classList - ${e.target.classList.value}`);
//     console.log(`idList - ${e.target.id}`);
//     console.log(`height * width - ${e.target.clientHeight} * ${e.target.clientWidth}`);
//     console.log('------------------------------------------------------------------------');
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// let popup = document.createElement('div');
// popup.style.background = 'black';
// popup.style.color = 'white';
// popup.style.width = '200px';
// popup.style.position = 'absolute';
// popup.style.top = '30%';
// popup.style.left = '30%';
// document.onclick = function (e) {
//     document.body.append(popup);
//     popup.innerText = `tagName = ${e.target.localName}, classList = ${e.target.classList.value}, idList = ${e.target.id}, height * width = ${e.target.clientHeight} * ${e.target.clientWidth}`
// }

// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let input = document.createElement('input');
// input.setAttribute('type', 'checkbox');
// let input2 = document.createElement('input');
// input2.setAttribute('type', 'checkbox');
// let input3 = document.createElement('input');
// input3.setAttribute('type', 'checkbox');
// document.body.append(input, input2,input3);
//
// input.onclick = function () {
//     if (input.checked) {
//         usersWithAddress.filter((value) => {
//             if (!value.status) {
//                 let div = document.createElement("div");
//                 div.innerText = `${JSON.stringify(value)}`;
//                 document.body.appendChild(div)
//             }
//
//         })
//     }
// }
//
// input2.onclick = function () {
//     if (input2.checked) {
//         usersWithAddress.filter((value) => {
//             if (value.age >= 29) {
//                 let div = document.createElement("div");
//                 div.innerText = `${JSON.stringify(value)}`;
//                 document.body.appendChild(div)
//             }
//         })
//     }
// }
// input3.onclick = function () {
//     if (input3.checked) {
//         usersWithAddress.filter((value) => {
//             if (value.address.city === 'Kyiv') {
//                 let div = document.createElement("div");
//                 div.innerText = `${JSON.stringify(value)}`;
//                 document.body.appendChild(div)
//             }
//         })
//     }
// }

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let imgArray = [{id: 1, imgURL: 'images/Mercedes-Benz-S-class-W126.jpg'},
//     {id: 2, imgURL: 'images/Mercedes-Benz-S-class-W126-coupe.jpg'},
//     {id: 3, imgURL: 'images/Mercedes-Benz-S-class-W126-int-550x412.jpg'},
//     {id: 4, imgURL: 'images/Mercedes-Benz-S-class-W126-sedan.jpg'}];
//
// let photo = document.createElement('img');
// photo.style.width = '400px'
// photo.style.height = '400px'
// let btn = document.createElement('button');
// btn.innerText = 'left';
// let btn2 = document.createElement('button');
// btn2.innerText = 'right'
// let index = 0;
// photo.src = imgArray[index].imgURL;
// document.body.append(photo, btn, btn2);
// btn.onclick = function () {
//     if (index - 1 < 0) {
//         index = imgArray.length - 1
//     } else {
//         index = index - 1
//     }
//     photo.src = imgArray[index].imgURL
// }
// btn2.onclick = function () {
//     if (index + 1 > imgArray.length - 1) {
//         index = 0;
//     } else {
//         index = index + 1
//     }
//     photo.src = imgArray[index].imgURL
// }

// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
