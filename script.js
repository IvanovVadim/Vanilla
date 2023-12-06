document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('inputField');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('list');
    let counter = 1;

    // Функция добавления элемента в список
    function addItem(value) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button'); // Создание кнопки "Редактировать"

        span.textContent = value;
        deleteButton.textContent = 'Удалить';
        editButton.textContent = 'Редактировать'; // Текст кнопки "Редактировать"

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });

        // Добавление обработчика события для кнопки "Редактировать"
        editButton.addEventListener('click', function () {
            const newValue = prompt('Введите новое значение', value); // Отображение диалогового окна с предыдущим значением
            if (newValue !== null) {
                span.textContent = newValue; // Обновление значения в элементе списка
            }
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(editButton); // Добавление кнопки "Редактировать" в элемент списка
        list.appendChild(li);
    }

    // Назначение событий на кнопку
    addButton.addEventListener('click', function () {
        const value = inputField.value.trim();

        if (value !== '') {
            addItem(value);
            inputField.value = '';
        }
    });

    // Назначение события на нажатие Enter в поле ввода
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addButton.click();
            event.preventDefault();
        }
    });
});