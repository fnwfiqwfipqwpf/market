console.log('Скрипт market.js успішно підключено');

fetch('js/items.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Не вдалося завантажити JSON');
        }
        return response.json();
    })
    .then((items) => {
        const container = document.getElementById('items-container'); // Контейнер для елементів
        if (!container) {
            throw new Error('Контейнер для елементів не знайдено');
        }

        items.forEach((item) => {
            // Створення елемента
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.id = item.id;

            // Додавання заголовка
            const titleElement = document.createElement('h2');
            titleElement.classList.add('item-title');
            titleElement.textContent = item.name;

            // Додавання зображення
            const imgElement = document.createElement('img');
            imgElement.src = item.img;
            imgElement.alt = item.name;

            // Додавання ціни price1
            const price1Element = document.createElement('p');
            price1Element.classList.add('old-price'); // Додаємо клас для стилізації
            price1Element.textContent = `Стара ціна: ${item.price1} грн`;

            // Додавання ціни price2
            const price2Element = document.createElement('p');
            price2Element.classList.add('current-price'); // Додаємо клас для стилізації
            price2Element.textContent = `Зі знижкою: ${item.price2} грн`;

            // Додавання елементів до itemElement
            itemElement.appendChild(titleElement);
            itemElement.appendChild(imgElement);
            itemElement.appendChild(price1Element); // Додаємо price1
            itemElement.appendChild(price2Element); // Додаємо price2

            // Додавання itemElement до контейнера
            container.appendChild(itemElement);
        });
    })
    .catch((err) => {
        console.error('Помилка завантаження:', err);
    });