
const items = [
    { 
        name: "Лонгслив архив", 
        description: "1190", 
        imageUrl: "https://pin.it/1ZDanJcqU", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/longsliv_arhiv_4537088705?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Книга", 
        description: "1900", 
        imageUrl: "https://i.pinimg.com/736x/8d/42/90/8d4290b0af6bbd6df34e6423ecaad56e.jpg", 
        link: "https://ru.pinterest.com/pin/4222193394678340/" 
    },
    { 
        name: "Тетейки", 
        description: "100", 
        imageUrl: "path/to/teteiki.jpg", 
        link: "link/to/teteiki" 
    },
];

function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    // Очищаем предыдущие результаты
    resultsDiv.innerHTML = '';

    // Ищем совпадения
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(input));

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item'; // Добавляем класс для стилизации
            itemDiv.innerHTML = 
'<img src="' + item.imageUrl + '" alt="' + item.name + '" style="max-width: 100%; height: auto;"/>' + '<div class="item-text">' +
'<strong>' + item.name + '</strong> ' + item.description + '<br/>' + '<div class="button-container">' +
'<a href="' + item.link + '" target="_blank">Посмотреть</a>';
            resultsDiv.appendChild(itemDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>Товары не найдены.</p>';
    }
}
