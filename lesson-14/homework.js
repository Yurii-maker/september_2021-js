// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
//
//
//                                                          Callbacks
// function daySchedule(start, cb) {
//     console.log('day start')
//     setTimeout(() => {
//         start ? cb(null, 'wake up at time') : cb('over slept')
//     }, 300)
// }
//
// function breakfast(check, cb) {
//     console.log('time to breakfast')
//     setTimeout(() => {
//         check ? cb(null, 'tasty food') : cb('empty refrigerator')
//     }, 1000)
// }
//
// function shower(check, cb) {
//     console.log('time to shower')
//     setTimeout(() => {
//         check ? cb(null, 'clean') : cb('have no water')
//     }, 500)
// }
//
// function bus(check, cb) {
//     console.log('wait bus')
//     setTimeout(() => {
//         check ? cb(null, 'ride in the bus') : cb('bus on holidays')
//     }, 1500)
// }
//
// function work(check, cb) {
//     console.log('work')
//     setTimeout(() => {
//         check ? cb(null, 'working hard') : cb('quarantine')
//     }, 3000)
// }
//
// function diner(check, cb) {
//     console.log('time to diner')
//     setTimeout(() => {
//         check ? cb(null, 'yam yam') : cb('cafe is closed')
//     }, 1700)
// }
//
// daySchedule(true, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data);
//         breakfast(true, (error, data) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log(data);
//                 shower(true, (error, data) => {
//                     if (error) {
//                         console.log(error)
//                     } else {
//                         console.log(data);
//                         bus(true, (error, data) => {
//                             if (error) {
//                                 console.log(error)
//                             } else {
//                                 console.log(data);
//                                 work(true, (error, data) => {
//                                     if (error) {
//                                         console.log(error)
//                                     } else {
//                                         console.log(data);
//                                         diner(true, (error, data) => {
//                                             if (error) {
//                                                 console.log(error)
//                                             } else {
//                                                 console.log(data);
//                                                 console.log('Finish')
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
//
//
//
//                                                     Promises
// function daySchedule(start) {
//     console.log('day start');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => start ? resolve('wake up at time') : reject('over slept'), 500)
//
//     }))
// }
//
// function breakfast(food) {
//     console.log('time to eat');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => food ? resolve('tasty food') : reject('empty refrigerator'), 500)
//
//     }))
// }
//
// function shower(water) {
//     console.log('time to shower');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() =>
//             water ? resolve('clean') : reject('have no water'), 1000)
//
//     }))
// }
//
// function bus(bus) {
//     console.log('wait bus');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() =>
//             bus ? resolve('ride in bus') : reject('bus on holiday'), 3000
//         )
//     }))
// }
//
// function work(work) {
//     console.log('working process');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => work ? resolve('working hard') : reject('quarantine'), 2000)
//     }))
//
// }
//
// function diner(food) {
//     console.log('time to diner');
//     return new Promise(((resolve, reject) => setTimeout(() => food ? resolve('yami yami') : reject('have no money'), 3000)))
// }
//
// daySchedule(true).then((result) => {
//     console.log(result);
//     return breakfast(true)
// })
//     .then((result) => {
//         console.log(result);
//         return shower(true)
//     })
//     .then((result) => {
//         console.log(result);
//         return bus(true)
//     })
//     .then((result) => {
//         console.log(result);
//         return work(false)
//     })
//     .then((result) => {
//         console.log(result);
//         return diner(true)
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log('error!!!!!!!!!! - ',error)})
//

//
//
//                                                    Async

// function daySchedule(start) {
//     console.log('day start');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => start ? resolve('wake up at time') : reject('over slept'), 500)
//
//     }))
// }
//
// function breakfast(food) {
//     console.log('time to eat');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => food ? resolve('tasty food') : reject('empty refrigerator'), 500)
//
//     }))
// }
//
// function shower(water) {
//     console.log('time to shower');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() =>
//             water ? resolve('clean') : reject('have no water'), 1000)
//
//     }))
// }
//
// function bus(bus) {
//     console.log('wait bus');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() =>
//             bus ? resolve('ride in bus') : reject('bus on holiday'), 2000
//         )
//     }))
// }
//
// function work(work) {
//     console.log('working process');
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => work ? resolve('working hard') : reject('quarantine'), 2000)
//     }))
//
// }
//
// function diner(food) {
//     console.log('time to diner');
//     return new Promise(((resolve, reject) => setTimeout(() => food ? resolve('yami yami') : reject('have no money'), 3000)))
// }
//
// async function dayGraphic() {
//     try {
//         const dayS = await daySchedule(true);
//         console.log(dayS);
//         const breakf = await breakfast(true);
//         console.log(breakf);
//         const sh = await shower(true);
//         console.log(sh);
//         const bs = await bus(true);
//         console.log(bs);
//         const wrk = await work(true);
//         console.log(wrk);
//         const din = await diner(true);
//         console.log(din)
//     } catch (e) {
//         console.error(e)
//
//     }
// }
//
// dayGraphic()