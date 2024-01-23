// const runThemeController = () => {
//     const button = document.querySelector('[data-container="button-theme-change"]')
//     const isDarkTheme = localStorage.getItem('theme') === 'dark' && window.matchMedia('(prefers-color-scheme: dark)').matches
//
//     button.addEventListener('click', () => {
//         const isDarkTheme = localStorage.getItem('theme') === 'dark' && window.matchMedia('(prefers-color-scheme: dark)').matches
//
//         if (isDarkTheme) {
//             document.documentElement.classList.remove('dark')
//             localStorage.setItem('theme', 'light')
//             button.querySelector('i').className = `fa fa-moon-o`
//         } else {
//             document.documentElement.classList.add('dark')
//             localStorage.setItem('theme', 'dark')
//             button.querySelector('i').className = `fa fa-sun-o`
//         }
//     })
//
//     if (isDarkTheme) {
//         document.documentElement.classList.add('dark')
//     } else {
//         document.documentElement.classList.remove('dark')
//     }
//     button.querySelector('i').className = `fa ${isDarkTheme ? 'fa-sun-o' : 'fa-moon-o'}`
// }
//
// export { runThemeController }

const runThemeController = () => {
    const button = document.querySelector('[data-container="button-theme-change"]');

    // Получаем текущую тему из localStorage
    const currentTheme = localStorage.getItem('theme');

    // Инициализируем переменную для отслеживания текущей темы
    let isDarkTheme = currentTheme === 'dark';

    // Обновляем иконку в зависимости от текущей темы
    button.querySelector('i').className = `fa ${isDarkTheme ? 'fa-sun-o' : 'fa-moon-o'}`;

    // Функция для смены темы
    const toggleTheme = () => {
        isDarkTheme = !isDarkTheme; // Инвертируем текущую тему
        const newTheme = isDarkTheme ? 'dark' : 'light';

        // Устанавливаем новую тему в localStorage
        localStorage.setItem('theme', newTheme);

        // Применяем новую тему к документу
        document.documentElement.classList.toggle('dark', isDarkTheme);

        // Обновляем иконку в зависимости от текущей темы
        button.querySelector('i').className = `fa ${isDarkTheme ? 'fa-sun-o' : 'fa-moon-o'}`;
    };

    // Добавляем обработчик события на кнопку
    button.addEventListener('click', toggleTheme);
};

export { runThemeController };