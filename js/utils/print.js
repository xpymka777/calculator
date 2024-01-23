//для вывода в result

//переменной print присваивается значение, которое содержит стрелочную функцию,принимающую входным параметром message
const print = (message) => {
    //ищет в DOM элемент с атрибутом data-container="result"
    const container = document.querySelector('[data-container="result"]')
    //если не находит, то выдаёт сообщение
    if (!container) return alert('Container for result not defined')
    //если нашло, то присваивает сообщение
    container.innerHTML = message
}
//для использования в других файлах
export { print }