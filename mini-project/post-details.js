// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let postID = localStorage.getItem('postID');
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts/' + postID).then(response => response.json()).then(postDetails => {
    let postWrap = document.createElement('div');
    postWrap.classList.add('postWrap');
    let title = document.createElement('h1');
    title.innerText = `ID - ${postDetails.id}, title - '${postDetails.title}'`;
    let postBody = document.createElement('h3');
    postBody.innerText = `body: '${postDetails.body}'`;
    postWrap.append(title, postBody);
    wrap.appendChild(postWrap);

});

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postID + '/comments').then(response => response.json()).then(comments => {
        let commentWrap = document.createElement('div');
        commentWrap.classList.add('commentWrap');
        let commentTitle = document.createElement('h2');
        commentTitle.innerText = 'COMMENTS:'
        wrap.append(commentTitle, commentWrap);
        for (const comment of comments) {
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('commentBlock');
            let title = document.createElement('h3');
            title.innerText = `ID: ${comment.id}, name: '${comment.name}'`;
            let email = document.createElement('h4');
            email.innerText = `EMAIL: '${comment.email}'`;
            let commentBody = document.createElement('h3');
            commentBody.innerText = `BODY: '${comment.body}'`;
            commentBlock.append(title, email, commentBody);
            commentWrap.appendChild(commentBlock)

        }

    })
}, 150)