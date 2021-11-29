//     - Дано натуральное число n. Выведите все числа от 1 до n.

// const displayNumbToN = (n) => {
//     if (n > 0) {
//         let array = [];
//         for (let i = 0; i < n; i++) {
//             array.push(i + 1);
//         }
//         console.log(array);
//         return array;
//     } else {
//         console.log('wrong number or something going wrong');
//     }
// };
//
// displayNumbToN(20);

//     - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const sort = (a, b) => {
//
//
//     if (a < b) {
//         let array = [];
//         for (let i = a; i <= b; i++) {
//             array.push(i);
//         }
//         console.log(array);
//         return array;
//     }
//     if (a > b) {
//         let array = [];
//         for (let i = a; i >= b; i--) {
//             array.push(i);
//         }
//         console.log(array);
//         return array;
//     }
// };
// sort(20, 10);

//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// const changer = (array, i) => {
//     for (let j = 0; j < array.length; j++) {
//         if (j === i) {
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//
//     }
//     console.log(array);
// }
// changer([9, 8, 0, 4], 0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]


// const zeroEnd = (array) => {
//     let zero = [];
//     let numbers = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0 && array.length > 1 && array.length < 101) {
//             zero.push(array[i]);
//         } else if (array[i] !== 0 && array.length > 1 && array.length < 101) {
//             numbers.push(array[i]);
//         } else {
//             console.log('something going wrong!');
//         }
//     }
//     let newArray = [...numbers, ...zero];
//     console.log(newArray);
//     return newArray;
// }
// zeroEnd([1, 0, 6, 0, 3]);
// zeroEnd([0,1,2,3,4]);
// zeroEnd([0,0,1,0]);