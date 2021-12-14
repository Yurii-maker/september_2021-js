// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let wrap = document.createElement('div');
let home = document.createElement('a');
home.innerText = 'home';
home.href = './additional.html';
home.style.marginTop = '50px';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
let productsArray = JSON.parse(localStorage.getItem('products'));
for (let i = 0; i < productsArray.length; i++) {
    let product = productsArray[i];
    let productDiv = document.createElement('div');
    productDiv.innerText = `Product name - ${product.title}, quantity - ${product.quantity}, price - ${product.price} $, ${product.pic}`;
    let btn = document.createElement('button');
    btn.innerText = 'delete product';
    wrap.append(productDiv, btn);
    btn.onclick = () => {
        productsArray.splice(i, 1);
        localStorage.setItem('products', JSON.stringify(productsArray));
        productDiv.remove();
        btn.remove();
        location.reload()
    }

}

let deleteAll = document.createElement('button');
deleteAll.style.width = '100px';
deleteAll.style.marginTop = '100px';
deleteAll.innerText = 'clear all';
document.body.append(wrap, deleteAll, home);
deleteAll.addEventListener('click', () => {
    localStorage.clear();
    wrap.remove()
})