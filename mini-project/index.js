//
// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    for (const user of users) {
        let userBlock = document.createElement('div');
        userBlock.classList.add('userBlock');
        userBlock.innerText = `Id: ${user.id}, Name: '${user.name}'`;
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'User details';
        btn.onclick = () => {
            let userID = user.id;
            localStorage.setItem('id', userID)
            window.location.href = './user-details.html'
        }
        userBlock.appendChild(btn);
        wrap.appendChild(userBlock);

    }
    document.body.appendChild(wrap)
})
