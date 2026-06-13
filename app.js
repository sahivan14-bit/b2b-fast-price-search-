// НАДЁЖНАЯ API-СВЯЗЬ С ОФИЦИАЛЬНОЙ ВЕБ-ПУБЛИКАЦИЕЙ CSV
const API_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQclI7_Yk-r0Bp5zhZmnspAv_uDaWDY4wlBBHlaLTlNB9J9RU-tBY0AwqI1v0nW1Q/pub?gid=672431403&single=true&output=csv";
let priceList = [];

async function syncWithGoogleWebPub() {
    const badge = document.querySelector(".status-badge");
    try {
        badge.innerHTML = "● Синхронизация...";
        const response = await fetch(API_URL);
        const csvText = await response.text();
        
        // Разбиваем чистый текст на строки
        const lines = csvText.replace(/\r/g, "").split("\n");
        priceList = [];

        // Перебираем строки таблицы, начиная с 3-й
        for (let i = 2; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            // Бьем строку по запятым, игнорируя запятые внутри кавычек
            const columns = line.split(/,(?=(?:[^"]*"[^"]*")*[^**"]*$)/);
            
            if (columns.length >= 5) {
                // Очищаем данные от кавычек и пробелов
                const name = columns[0].replace(/^"|"$/g, '').trim();
                const code = columns[1].replace(/^"|"$/g, '').trim();
                const brand = columns[2].replace(/^"|"$/g, '').trim();
                const sku = columns[3].replace(/^"|"$/g, '').trim();
                const price = columns[4].replace(/^"|"$/g, '').trim();

                // Отсекаем пустые подзаголовки
                if (name && code && price && price !== "Цена" && !name.includes("Автозапчасти")) {
                    priceList.push({ name, code, brand, sku, price });
                }
            }
        }

        // Обновляем плашку статуса
        if (priceList.length > 0) {
            badge.innerHTML = `● API Синхронизировано: ${priceList.length} товаров`;
            badge.style.color = "#30D158";
            badge.style.background = "rgba(48, 209, 88, 0.15)";
        } else {
            badge.innerHTML = "● Внимание: Данные не распарсились";
            badge.style.color = "#FF9500";
        }
        
        renderTable(priceList);

    } catch (error) {
        badge.innerHTML = `● Ошибка API: ${error.message}`;
        badge.style.color = "#FF453A";
    }
}

function renderTable(data) {
    const tbody = document.getElementById("resultsTableBody");
    const noResults = document.getElementById("noResultsMessage");
    tbody.innerHTML = "";
    
    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";

    // Ограничиваем первичный вывод до 50 штук, чтобы страница летала
    const itemsToRender = data.slice(0, 50);
    itemsToRender.forEach(item => {
        tbody.innerHTML += `<tr>
            <td>${item.name}</td>
            <td>${item.code}</td>
            <td>${item.brand}</td>
            <td>${item.sku}</td>
            <td style="font-weight: 600; color: #30D158;">${item.price} руб</td>
        </tr>`;
    });
}

function performSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (query === "") {
        renderTable(priceList);
        return;
    }
    const queryWords = query.split(/\s+/);
    const filteredData = priceList.filter(item => {
        const itemText = `${item.name} ${item.code} ${item.brand} ${item.sku}`.toLowerCase();
        return queryWords.every(word => itemText.includes(word));
    });
    renderTable(filteredData);
}

function handleKeyPress(event) {
    if (event.key === "Enter") performSearch();
}

syncWithGoogleWebPub();
