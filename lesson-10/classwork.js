// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let wrap = document.createElement("div");
// let form  = document.createElement("form");
// form.setAttribute('name','form');
// let input = document.createElement('input');
// input.setAttribute('name','input');
// let input2 = document.createElement('input');
// input2.setAttribute('name','input2')
// form.append(input,input2);
// let form2  = document.createElement("form");
// form2.setAttribute('name','form2');
// let input3 = document.createElement('input');
// input3.setAttribute('name','input3');
// let input4 = document.createElement('input');
// input4.setAttribute('name','input4')
// form2.append(input3,input4);
// let btn = document.createElement('button');
// btn.innerText = 'Save';
// wrap.append(form,form2,btn);
// document.body.appendChild(wrap)
//
// btn.addEventListener('click', function (){
//     console.log(document.forms.form.input.value);
//     console.log(document.forms.form.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value)
//
//
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
// let input2 = document.createElement('input');
// input2.setAttribute('type', 'number');
// let input3 = document.createElement('input');
// input3.setAttribute('type', 'text');
// let btn = document.createElement('button');
// btn.innerText = 'Create table'
// form.append(input, input2, input3, btn)
// document.body.appendChild(form)
// btn.onclick = function (e) {
//     e.preventDefault();
//
//     function createTable(numberOfLines, numberOfCells, content) {
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//         for (let i = 0; i < numberOfLines; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < numberOfCells; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = `${content}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     createTable(input.value,input2.value,input3.value)
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWordsArray = ['bitch', 'fuck', 'slowpoke', 'scum', 'dickhead'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// let btn = document.createElement('button');
// btn.innerText = 'check';
// document.body.append(input, btn);
// btn.onclick = function () {
//     for (const badWord of badWordsArray) {
//         if (badWord === input.value) {
//             alert('ay yay yay')
//         }
//
//     }
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWordsArray = ['bitch', 'fuck', 'slowpoke', 'scum', 'dickhead'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// let btn = document.createElement('button');
// btn.innerText = 'check';
// document.body.append(input, btn);
// btn.onclick = function () {
//
//     let split = input.value.split(' ');
//
//     for (const word of split) {
//         for (const badWord of badWordsArray) {
//             if (word === badWord) {
//
//                 alert('ay yay yay');
//
//             }
//         }
//     }
// }