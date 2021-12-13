// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => {
    let wrap = document.createElement('div');
    // for (const user of users) {
    //     for (const key in user) {
    //         if (typeof user[key] !== 'object') {
    //             let us = document.createElement('div');
    //             us.innerText = `${key}: ${user[key]}`;
    //             wrap.appendChild(us)
    //         }
    //         else {
    //             for (const k in user[key]) {
    //                 let innerK = document.createElement('div');
    //                 innerK.innerText = `${key} ${k}: ${user[key][k]}`
    //                 wrap.appendChild(innerK)
    //
    //             }}
    //     }
    //
    // }
    for (const user of users) {
        let userDiv = document.createElement('div');
        userDiv.innerText = `${JSON.stringify(user)}`;
        let btn = document.createElement('button');
        btn.innerText = 'show posts'
        wrap.append(userDiv, btn);
        btn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts'
            ).then(value => value.json()).then(posts => {
                for (const post of posts) {
                    let postDiv = document.createElement('div');
                    postDiv.innerText = `${JSON.stringify(post)}`;
                    let btn2 = document.createElement('button');
                    btn2.innerText = 'show comments';
                    btn2.onclick = () => {
                        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments'
                        ).then(value => value.json()).then(comments => {
                            for (const comment of comments) {
                                let commentDiv = document.createElement('div');
                                commentDiv.innerText = `${JSON.stringify(comment)}`;
                                postDiv.appendChild(commentDiv);
                                btn2.disabled = true;
                            }

                        })
                    };
                    userDiv.append(postDiv, btn2);
                    btn.disabled = true;
                }

            })
        }

        document.body.appendChild(wrap)
    }
})

