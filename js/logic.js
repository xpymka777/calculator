//изначальный код
// export default main;
//
// import { print } from './utils/print.js'
// let main = () => {
//     let result = 0
//
//     return (state) => {
//         print(state)
//     }
// }
//
// export default main

// || \\
import {print} from './utils/print.js';

// Функция для создания объекта-калькулятора
let createCalculator = () => {
    // Переменные для хранения текущего ввода и результата
    let currentInput = '';
    let result = 0;

    // Метод для добавления числа в строку ввода
    let appendNumber = (number) => {
        currentInput += number; // Добавляем число
        updateDisplay(); // Обновляем отображение
    };

    // Метод для добавления оператора в строку ввода
    let appendOperator = (operator) => {
        // Если строка ввода пуста и есть какой-то результат
        if (currentInput === '' && result !== 0) {
            currentInput = result.toString(); // текущая строка = результату, предотвращает добавление новых символов к вычисленному значению
        }

        //если последний символ не оператор и не пробел
        if (!isOperatorOrSpace(currentInput.slice(-1))) {
            currentInput += ` ${operator} `; // [пробел|знак операции|пробел]
            updateDisplay(); // Обновляем отображение
        }
    };

    // Метод для проверки, является ли символ оператором или пробелом
    let isOperatorOrSpace = (char) => {
        return /[+\-x/]/.test(char) || char === ' '; //если char = +-/* или пробел тогда true,иначе false
    };

    // Метод для выполнения вычислений
    let calculate = () => {
        try {

            let calculatedResult = countInString(currentInput.replace('x', '*')); // вычисляем значение с countInString, заменяя х на *
            //обработка деления на 0
            if (isFinite(calculatedResult)){
                result = calculatedResult;
            }else{
                result = 'Ошибка'
            }

            currentInput = ''; //очищаем строку ввода
            updateDisplay(); // Обновляем отображение
        } catch (error) {
            result = 'Error';
            updateDisplay(); // Обновляем отображение
        }
    };

    // Метод для выполнения вычислений в строке
    let countInString = (str) => {
        let fn = new Function(`return ${str}`); //принимает строки в качестве аргументов и создает функцию с телом, заданным в этих строках.
        return fn(); //вызывается это функция и возвращаем её результат
    };

    // Метод для очистки всей строки ввода
    let clear = () => {
        currentInput = '';
        result = 0;
        updateDisplay(); // Обновляем отображение
    };

    // Метод для удаления последнего символа в строке ввода
    let deleteLast = () => {
        currentInput = currentInput.slice(0, -1);//очищает последнее введённое значение
        updateDisplay(); // Обновляем отображение
    };

    // Метод для обновления отображения
    let updateDisplay = () => {
        print(currentInput || result.toString()); //возвращаем введённое значение или результат в виде строки
    };

    // Возвращаем объект с методами
    return {
        appendNumber,
        appendOperator,
        calculate,
        clear,
        deleteLast,
    };
};

// Основная функция, создающая объект-калькулятор и возвращающая функцию-обработчик
let main = () => {
    //создаём объект
    let calculator = createCalculator();

    //обрабатываем нажатие кнопок
    return (state) => {
        if (state === 'С') {
            calculator.deleteLast();
        } else if (state === 'АС') {
            calculator.clear();
        } else if (state === '=') {
            calculator.calculate();
        } else {
            //если state содержит цифру или точку, то вызывается метод, который добавляет эту цифру или точку в текущую строку ввода
            if (/\d|\./.test(state)) {
                calculator.appendNumber(state);
            }
            //если содержит оператор, то вызывается метод, который добавляет этот оператор в текущую строку ввода.
            else if (/[+\-x/]/.test(state)) {
                calculator.appendOperator(state);
            }
        }
    };
};

// Экспортируем основную функцию
export default main;