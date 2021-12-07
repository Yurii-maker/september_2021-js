// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.getElementById('text');
// let hide = document.getElementById('btn');
// hide.onclick = function () {
//     text.style.display = "none"
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let hideBtn = document.getElementById('btn');
// hideBtn.onclick = function () {
//     hideBtn.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let btn = document.getElementById('btn');
//
// btn.onclick = function () {
//     let age = document.getElementById('enterAge').value;
//     if (age < 18) {
//         alert('too young!')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let tittle = document.getElementById('tittle').onclick = function () {
//     let menu = document.getElementById('menu');
//     menu.classList.toggle('dNone')
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [{tittle: 'lorem', body: 'Lorem ipsum dolor.'},
//     {tittle: 'hello world', body: 'Lorem ipsum dolor sit.'},
//     {tittle: 'okten', body: ' Lorem ipsum dolor sit amet.'},
//     {tittle: 'courses', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
//     {tittle: 'winter', body: 'Lorem ipsum dolor sit amet, consectetur.'}];
// for (const comment of comments) {
//     let wrap = document.createElement('div');
//     let tittle = document.createElement('h2');
//     tittle.innerText = `${comment.tittle}`;
//     let bod = document.createElement('h4');
//     bod.innerText = `${comment.body}`
//     let btn = document.createElement('button');
//     btn.innerText = 'show/hide';
//     btn.onclick = function () {
//         bod.classList.toggle('dNone')
//     }
//     wrap.append(tittle, bod, btn);
//     document.body.appendChild(wrap)
//
// }

