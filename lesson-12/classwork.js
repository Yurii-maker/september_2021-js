// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => {
    let wrap = document.createElement('div');
    document.body.appendChild(wrap);
    wrap.classList.add('wrap');
    for (const post of value) {
        let div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = ` <h1>${post.id}</h1>
<h2>${post.title}</h2>
 <h3>${post.body}</h3>`;
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'show comments';
        btn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments').then(value => value.json()).then(value => {
                for (const element of value) {

                    let commentDiv = document.createElement('div');
                    commentDiv.innerHTML = ` <h3>${element.id}</h3>
                        <p>{${element.name}</p>
                        <p></p>${element.email}</p>
                        <p>${element.body}</p>
                            `;
                    div.appendChild(commentDiv);
                    btn.disabled = true

                }
            })
        };
        div.appendChild(btn);
        wrap.appendChild(div)

    }

})
