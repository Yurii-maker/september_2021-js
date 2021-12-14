// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)

let wrap = document.createElement('div');
let form = document.createElement('form');
let title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('placeholder', 'enter product name');
let quantity = document.createElement('input');
quantity.setAttribute('type', 'number');
quantity.setAttribute('placeholder', 'enter product quantity');
let price = document.createElement('input');
price.setAttribute('type', 'number');
price.setAttribute('placeholder', 'enter price');
let pic = document.createElement('input');
pic.setAttribute('type', 'text');
pic.setAttribute('placeholder', 'enter image URL');
let btn = document.createElement('button');
btn.innerText = 'save';
form.append(title, quantity, price, pic, btn);
wrap.appendChild(form);
let link = document.createElement('a');
link.innerText = 'go to products page';
link.href = './list.html';
document.body.append(wrap,link);
btn.onclick = (e) => {
    e.preventDefault();
    if (title.value === '' || quantity.value === '' || price.value === '' || pic.value === '') {
        alert('empty field')
    } else {let productArray = JSON.parse(localStorage.getItem('products')) || [];
        productArray.push({title: title.value, quantity: quantity.value, price: price.value, pic: pic.value});
        localStorage.setItem('products', JSON.stringify(productArray));

        title.value = '';
        quantity.value = '';
        price.value = '';
        pic.value = ''}

}