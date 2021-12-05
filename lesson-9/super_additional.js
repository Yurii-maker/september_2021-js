let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let addressArray = [];
// for (const user of users) {
//     addressArray.push(user.address)
//
// }
// console.log(addressArray)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

//
// for (const element of users) {
//     let user = document.createElement('div');
//     user.innerText = `name - ${element.name}, age -  ${element.age}, status: ${element.status}, address : ${JSON.stringify(element.address)}`;
//
//
//     document.body.appendChild(user)
//
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const element of users) {
//     let user = document.createElement('div');
//
//     for (const key in element) {
//         if (typeof element[key] !== 'object') {
//             let userInfo = document.createElement('div');
//
//             userInfo.innerText = `${key} - ${element[key]}`;
//             user.appendChild(userInfo)
//         } else {
//             let userAddress = document.createElement('div');
//             for (const k in element.address) {
//                 let p = document.createElement('p');
//                 p.innerText = `${k} -  ${element.address[k]}`
//                 userAddress.appendChild(p);
//                 user.appendChild(userAddress)
//             }
//         }
//     }
//
//     document.body.appendChild(user)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const element of users) {
//     let user = document.createElement('div');
//
//     for (const key in element) {
//         if (typeof element[key] !== 'object') {
//             let userInfo = document.createElement('div');
//
//             userInfo.innerText = `${key} - ${element[key]}`;
//             user.appendChild(userInfo)
//         } else {
//             let userAddress = document.createElement('div');
//             for (const k in element.address) {
//                 let p = document.createElement('p');
//                 p.innerText = `${k} -  ${element.address[k]}`
//                 userAddress.appendChild(p);
//                 user.appendChild(userAddress)
//             }
//         }
//     }
//
//     document.body.appendChild(user)
// }


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let hArray = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// for (const element of hArray) {
//     let li = document.createElement('li');
//     li.innerText = `${element.innerText}`;
//
//     ul.appendChild(li)
//
// }
// let newDiv = document.getElementById('content');
// newDiv.appendChild(ul)


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// for (const element of rules) {
//     let rule = document.createElement("div");
//     let tittle = document.createElement('h2');
//     tittle.innerText = `${element.title}`;
//     let b = document.createElement('p');
//     b.innerText = `${element.body}`;
//     rule.append(tittle, b);
//     document.body.appendChild(rule)
// }