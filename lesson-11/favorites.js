// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let key = 'favorites';
let users = JSON.parse(localStorage.getItem(key));
console.log(users);
users.forEach((user) => {
    let div = document.createElement('div');
    div.innerText = `${user.name} ${user.age} ${user.status}`;
    document.body.appendChild(div)
});
let a = document.createElement('a');
a.href = './classwork.html';
a.innerText = 'Home';
document.body.appendChild(a)