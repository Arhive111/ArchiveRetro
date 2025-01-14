
const items = [
    { 
        name: "Лонгсливв", 
        description: "1100", 
        imageUrl: "https://i.pinimg.com/736x/7b/f1/d9/7bf1d9b7a4b13f8104757e84c3d547ad.jpg", 
        link: "https://ru.pinterest.com/pin/895934919618406830/" 
    },
    { 
        name: "Книгаа", 
        description: "1900", 
        imageUrl: "https://i.pinimg.com/736x/8d/42/90/8d4290b0af6bbd6df34e6423ecaad56e.jpg", 
        link: "https://ru.pinterest.com/pin/4222193394678340/" 
    },
    { 
        name: "Тетейкии", 
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

