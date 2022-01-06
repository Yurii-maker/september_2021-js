// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function daySchedule(wakeupOnTime) {
    return new Promise((resolve, reject) => setTimeout(() => {
            wakeupOnTime ? resolve('Good morning') : reject('over slept')

        }, 300)
    )
}

function breakfast(food) {
    return new Promise((resolve, reject) => setTimeout(() => {
            food ? resolve('have a breakfast') : reject('empty refrigerator')
        }, 1000)
    )
}

function shower(water) {
    return new Promise((resolve, reject) => setTimeout(() => {
            water ? resolve('have a shower') : reject('have no water')
        }, 500)
    )
}

daySchedule(true).then((value) => {
    console.log(value);
    return breakfast(value)
})
    .then((value) => {
        console.log(value);
        return shower(false)
    })
    .then((value) => {
        console.log(value)
    })
    .catch(reason => {
        console.log(reason)
    })