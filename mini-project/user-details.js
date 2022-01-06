// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let userID = localStorage.getItem('id');

fetch('https://jsonplaceholder.typicode.com/users/' + userID).then(response => response.json()).then(user => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    let title = document.createElement('h1');
    title.innerText = `ID: ${user.id}, ${user.name}`;
    let usersInfo = document.createElement('h3');
    usersInfo.innerText = `Username -  ${user.username},  email: '${user.email}'`;
    let usersAddress = document.createElement('h4');
    usersAddress.innerText = `Address: street - ${user.address.street},  suite - ${user.address.suite}, city - ${user.address.city}, zipcode - ${user.address.zipcode}, geo - lat: ${user.address.geo.lat} and lng: ${user.address.geo.lng}`;
    let contacts = document.createElement('h3');
    contacts.innerText = `phone: ${user.phone}, website: '${user.website}'`;
    let companyInfo = document.createElement('h4');
    companyInfo.innerText = `Company:  name - ${user.company.name}, catchphrase - '${user.company.catchPhrase}', bs - ${user.company.bs}`;
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Post of current user';
    let postsWrap = document.createElement('div');
    postsWrap.classList.add('postsWrap')
    btn.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts').then(response => response.json()).then(posts => {
            for (const post of posts) {
                let postBlock = document.createElement('div');
                postBlock.classList.add('postBlock');
                let postTittle = document.createElement('h4');
                postTittle.innerText = `Title: '${post.title}'`;
                let postBtn = document.createElement('button');
                postBtn.innerText = 'post details';
                postBtn.onclick = () => {
                    let postID = post.id;
                    localStorage.setItem('postID', postID);
                    window.location.href = './post-details.html'
                };
                postBlock.append(postTittle, postBtn);
                postsWrap.appendChild(postBlock)
            }
        });
        btn.disabled = true;
    };
    wrap.append(title, usersInfo, usersAddress, contacts, companyInfo, btn, postsWrap);
    document.body.append(wrap)

})