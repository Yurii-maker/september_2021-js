// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

// let arrayOfClasses = [];
//
// function reCall(obj) {
//
//     if (obj.children.length) {
//
//         for (const element of obj.children) {
//             if (element.classList.length > 0) {
//
//                 for (let i = 0; i < element.classList.length; i++) {
//                     if (!arrayOfClasses.includes(element.classList[i])) {
//
//                         arrayOfClasses.push(element.classList[i]);
//                     }
//
//                 }
//
//             }
//             reCall(element)
//
//         }
//
//     }
//
//
// }
//
// reCall(document.body);
// console.log(arrayOfClasses)