// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => {
//     let wrap = document.createElement('div');
//     document.body.appendChild(wrap);
//     wrap.classList.add('wrap');
//     for (const post of value) {
//         let div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = ` <h1>${post.id}</h1>
// <h2>${post.title}</h2>
//  <h3>${post.body}</h3>`;
//         wrap.appendChild(div)
//
//     }
//
// })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json()).then(value => {
    let wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('wrap');
    for (const comment of value) {
        let div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = ` <h1>${comment.id}</h1>
<h2>${comment.name}</h2>
 <h3>${comment.email}</h3>
<h3>${comment.body}</h3>`;
        wrap.appendChild(div)

    }

})