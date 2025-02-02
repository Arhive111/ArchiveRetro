
const items = [
    { 
        name: "Лонгслив архив", 
        description: "1190", 
        imageUrl: "https://i.pinimg.com/736x/f9/06/80/f90680e81d479650986fc938ec5efabd.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/longsliv_arhiv_4537088705?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Архивная футболка BMW x Adidas", 
        description: "350", 
        imageUrl: "https://i.pinimg.com/736x/10/09/95/100995875dbe65c7444641862f02b41a.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/arhivnaya_futbolka_bmw_x_adidas_redkiy_ekzemplyar_4568532175?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Куртка Diesel японский стиль", 
        description: "6500", 
        imageUrl: "https://i.pinimg.com/736x/11/97/54/119754319333b4f0127edcb6f754a239.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/kurtka_diesel_yaponskiy_stil_redkiy_dizaynarhiv_4568824094?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Кожаная куртка Sigrano", 
        description: "4838", 
        imageUrl: "https://i.pinimg.com/736x/69/b8/e9/69b8e913a5ce48083f5d9a82cbf2b0cd.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/kozhanaya_kurtka_sigrano_4568874372?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Куртка Karvin Max", 
        description: "1500", 
        imageUrl: "https://i.pinimg.com/736x/c2/fc/aa/c2fcaafbaa96e46688097d8512f7e069.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/kurtka_karvin_max_4569317149?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Куртка пальто зимнее Dixi coat", 
        description: "3440", 
        imageUrl: "https://i.pinimg.com/736x/57/03/9c/57039ca3a0c515d2411f94aeee908816.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/kurtka_palto_zimnee_dixi_coat_4569417412?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
    },
    { 
        name: "Архивное худи", 
        description: "200", 
        imageUrl: "https://i.pinimg.com/736x/2b/d4/75/2bd4752bd7182b577745504dd683f48f.jpg", 
        link: "https://www.avito.ru/tver/odezhda_obuv_aksessuary/arhivnoe_hudi_4569137290?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller" 
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
