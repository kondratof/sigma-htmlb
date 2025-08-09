// Получаем ссылку на кнопку и счётчик
const tapButton = document.getElementById('tapButton');
let count = parseInt(localStorage.getItem('coinCount')) || 0; // загружаем последнее состояние из localStorage

// Обрабатываем клик на кнопку
tapButton.addEventListener('click', () => {
    count++; // увеличиваем счетчик
    document.getElementById('counter').textContent = count.toString(); // обновляем DOM
    localStorage.setItem('coinCount', count); // сохраняем новое значение в localStorage
});


