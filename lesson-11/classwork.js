// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.


let key = 'favorites';
let arrayOfFavorites = [];
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
users.forEach((user) => {
    let div = document.createElement('div');
    div.innerText = `name - ${user.name}, age - ${user.age}, status - ${user.status}`;
    let btn = document.createElement('button');
    btn.setAttribute('id', 'btn')
    btn.innerText = 'add to favorites';
    btn.style.width = '100px'
    btn.onclick = () => {
        arrayOfFavorites.push((user))
        localStorage.setItem(key, JSON.stringify(arrayOfFavorites))
        btn.disabled = true
    }
    document.body.append(div, btn)
});
let a = document.createElement('a');
a.href = './favorites.html';
a.innerText = 'Go to favorites';
document.body.appendChild(a)
