import mathCallback from './logic.js'
import { runThemeController } from './common/theme.js'

//код будет выполняться, только после полной загрузки страницы
window.onload = () => {
    //массив кнопок интерфейса калькулятора
    const buttons = [ ...document.querySelectorAll('[data-container="action-button"]') ]

    //вызывается функция mathCallback и её результат присваивается переменной
    const callback = mathCallback()

    //при клике на кнопку вызывается функция, в которую передаётся текст кнопки, который передаётся в callback
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const operation = button.innerText.trim()
            callback(operation)
        })
    })

    //для смены темы интерфейса
    runThemeController()
}