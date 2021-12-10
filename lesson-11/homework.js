// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('placeholder', 'name');
// input.setAttribute('type', 'text');
// let input2 = document.createElement('input');
// input2.setAttribute('placeholder', 'age');
// input2.setAttribute('type', 'number');
// form.append(input, input2);
// let btn = document.createElement('button');
// btn.innerText = 'save';
// document.body.append(form, btn);
// btn.onclick = () => {
//     let user = {name: input.value, age: input2.value};
//     localStorage.setItem('user', JSON.stringify(user))
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

//
// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('placeholder', 'model');
// input.setAttribute('type', 'text');
// let input2 = document.createElement('input');
// input2.setAttribute('placeholder', 'type');
// input2.setAttribute('type', 'text');
// let input3 = document.createElement('input');
// input3.setAttribute('placeholder', 'volume');
// input3.setAttribute('type', 'number');
// form.append(input, input2, input3);
// let btn = document.createElement('button');
// btn.innerText = 'save';
// document.body.append(form, btn);
// let key = 'cars';
//
// let save = (model, type, volume) => {
//     let array = JSON.parse(localStorage.getItem(key)) || [];
//     array.push({model, type, volume});
//     localStorage.setItem(key, JSON.stringify(array))
// };
// btn.onclick = () => {
//     save(input.value, input2.value, input3.value)
// }