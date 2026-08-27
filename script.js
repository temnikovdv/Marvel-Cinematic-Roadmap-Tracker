// 1. Достаем сохранения из памяти браузера
let watchedMovies = JSON.parse(localStorage.getItem('marvel_watched')) || [];

// 2. Полная база данных
const universes = {
    "earth616": {
        name: "Земля-616 (Основа)",
        movies: [
            { phase: "ПЕРВАЯ ФАЗА", title: "Железный человек", year: 2008 },
            { phase: "ПЕРВАЯ ФАЗА", title: "Невероятный Халк", year: 2008 },
            { phase: "ПЕРВАЯ ФАЗА", title: "Железный человек 2", year: 2010 },
            { phase: "ПЕРВАЯ ФАЗА", title: "Тор", year: 2011 },
            { phase: "ПЕРВАЯ ФАЗА", title: "Первый мститель", year: 2011 },
            { phase: "ПЕРВАЯ ФАЗА", title: "Мстители", year: 2012 },
            { phase: "ВТОРАЯ ФАЗА", title: "Железный человек 3", year: 2013 },
            { phase: "ВТОРАЯ ФАЗА", title: "Тор 2: Царство тьмы", year: 2013 },
            { phase: "ВТОРАЯ ФАЗА", title: "Первый мститель: Другая война", year: 2014 },
            { phase: "ВТОРАЯ ФАЗА", title: "Стражи Галактики", year: 2014 },
            { phase: "ВТОРАЯ ФАЗА", title: "Мстители: Эра Альтрона", year: 2015 },
            { phase: "ВТОРАЯ ФАЗА", title: "Человек-муравей", year: 2015 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Первый мститель: Противостояние", year: 2016 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Доктор Стрэндж", year: 2016 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Стражи Галактики. Часть 2", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-паук: Возвращение домой", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Тор: Рагнарёк", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Чёрная пантера", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Мстители: Война бесконечности", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-муравей и Оса", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Капитан Марвел", year: 2019 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Мстители: Финал", year: 2019 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-паук: Вдали от дома", year: 2019 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Ванда/Вижн (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Сокол и Зимний солдат (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Локи (1 сезон)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Чёрная вдова", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Что, если...? (1 сезон)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Шан-Чи и легенда десяти колец", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Вечные", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Соколиный глаз (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Человек-паук: Нет пути домой", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Лунный рыцарь (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Доктор Стрэндж: В мультивселенной безумия", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Мисс Марвел (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Тор: Любовь и гром", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Женщина-Халк: Адвокат (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Ночной оборотень", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Чёрная пантера: Ваканда навеки", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Стражи галактики: Праздничный спецвыпуск", year: 2022 },
            { phase: "ПЯТАЯ ФАЗА", title: "Человек-муравей и Оса: Квантомания", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Стражи Галактики. Часть 3", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Секретное вторжение (сериал)", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Локи (2 сезон)", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Капитан Марвел 2 / Марвелы", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Что, если...? (2 сезон)", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Эхо (сериал)", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Дэдпул и Росомаха", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Это всё Агата (сериал)", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Что, если...? (3 сезон)", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Капитан Америка: Дивный новый мир", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Сорвиголова: Рождённый заново (сериал)", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Громовержцы*", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Железное сердце (сериал)", year: 2025 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Фантастическая четвёрка: Первые шаги", year: 2025 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Чудо-человек (сериал)", year: 2026 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Мстители: Судный день", year: 2026 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Человек-паук: Совершенно новый день", year: 2026 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Мстители: Секретные войны", year: 2027 }
        ]
    },
    "earth96283": {
        name: "Земля-96283 (Тоби)",
        movies: [
            { phase: "Трилогия Сэма Рэйми", title: "Человек-паук 1", year: 2002 },
            { phase: "Трилогия Сэма Рэйми", title: "Человек-паук 2", year: 2004 },
            { phase: "Трилогия Сэма Рэйми", title: "Человек-паук 3", year: 2007 }
        ]
    },
    "earth120703": {
        name: "Земля-120703 (Эндрю)",
        movies: [
            { phase: "Дилогия Марка Уэбба", title: "Новый Человек-паук", year: 2012 },
            { phase: "Дилогия Марка Уэбба", title: "Новый Человек-паук: Высокое напряжение", year: 2014 }
        ]
    },
    "earth100005": {
        name: "Земля-100005 (Мутанты)",
        movies: [
            { phase: "Оригинальная серия", title: "Люди Икс", year: 2000 },
            { phase: "Оригинальная серия", title: "Люди Икс 2", year: 2003 },
            { phase: "Оригинальная серия", title: "Люди Икс: Последняя битва", year: 2006 },
            { phase: "Спин-оффы и приквелы", title: "Люди Икс: Начало. Росомаха", year: 2009 },
            { phase: "Спин-оффы и приквелы", title: "Люди Икс: Первый класс", year: 2011 },
            { phase: "Спин-оффы и приквелы", title: "Росомаха: Бессмертный", year: 2013 },
            { phase: "Спин-оффы и приквелы", title: "Люди Икс: Дни минувшего будущего", year: 2014 },
            { phase: "Новая эпоха", title: "Дэдпул", year: 2016 },
            { phase: "Новая эпоха", title: "Люди Икс: Апокалипсис", year: 2016 },
            { phase: "Новая эпоха", title: "Логан", year: 2017 },
            { phase: "Новая эпоха", title: "Дэдпул 2", year: 2018 },
            { phase: "Новая эпоха", title: "Люди Икс: Тёмный Феникс", year: 2019 },
            { phase: "Новая эпоха", title: "Новые мутанты", year: 2020 }
        ]
    },
    "earth688": {
        name: "Земля-688 (Sony Verse)",
        movies: [
            { phase: "Вселенная Злодеев", title: "Веном", year: 2018 },
            { phase: "Вселенная Злодеев", title: "Веном 2", year: 2021 },
            { phase: "Вселенная Злодеев", title: "Морбиус", year: 2022 },
            { phase: "Вселенная Злодеев", title: "Мадам Паутина", year: 2024 },
            { phase: "Вселенная Злодеев", title: "Веном: Последний танец", year: 2024 },
            { phase: "Вселенная Злодеев", title: "Крейвен-охотник", year: 2024 }
        ]
    },
    "earth828": {
        name: "Земля-828 (Ф4)",
        movies: [
            { phase: "Дилогия Тима Стори", title: "Фантастическая четвёрка", year: 2005 },
            { phase: "Дилогия Тима Стори", title: "Фантастическая четвёрка: Вторжение Серебряного сёрфера", year: 2007 }
        ]
    }
};

// 3. Логика запроса постеров (TMDB через Bearer Token)
async function getPosterUrl(title) {
    const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjA5Y2I4MzI1OGRmOGIyYjdlOWFlZTIwOGQ2ZTBhMyIsIm5iZiI6MTc4Nzg1NDk5Ny44OTIsInN1YiI6IjZhOTA4MDk1Zjg5ZDNmNTJhY2EyMzg1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95Vug9tu0lavpN5KsvRNIgGoK6sUQ4nKdZoO-XuqPz4';
    
    try {
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&language=ru-RU`, {
            headers: {
                'Authorization': `Bearer ${TMDB_TOKEN}`,
                'accept': 'application/json'
            }
        });
        let data = await res.json();
        
        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
            return `https://image.tmdb.org/t/p/w300${data.results[0].poster_path}`;
        }
    } catch (e) {
        console.error("Ошибка парсинга TMDB (проверь VPN/Прокси):", e);
    }
    
    // Заглушка, если ничего не найдено или нет сети
    return `https://placehold.co/160x240/161b22/e23636?text=${encodeURIComponent(title.substring(0, 3))}`;
}

// 4. Отрисовка
async function renderUniverse(earthId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${earthId}`).classList.add('active');

    moviesContainer.innerHTML = '<p style="text-align:center; font-size:1.2em; color:#a0a0a0;">Загрузка мультивселенной...</p>';
    
    const universe = universes[earthId];
    let html = '';
    let currentPhase = '';

    for (let movie of universe.movies) {
        if (movie.phase !== currentPhase) {
            html += `<div class="phase-title">${movie.phase}</div>`;
            currentPhase = movie.phase;
        }

        const posterUrl = await getPosterUrl(movie.title);
        const isWatched = watchedMovies.includes(movie.title);
        const watchedClass = isWatched ? 'watched' : '';
        const btnText = isWatched ? '✓ Просмотрено' : 'Не смотрел';

        html += `
            <div class="movie-card ${watchedClass}">
                <div class="poster">
                    <img src="${posterUrl}" alt="Постер">
                </div>
                <div class="info">
                    <div class="title">${movie.title}</div>
                    <div class="year">${movie.year}</div>
                    <button class="watch-btn" data-title="${movie.title.replace(/"/g, '&quot;')}">${btnText}</button>
                </div>
            </div>
        `;
    }

    moviesContainer.innerHTML = html;
}

// 5. Инициализация табов
function initTabs() {
    for (let key in universes) {
        const btn = document.createElement('button');
        btn.className = 'tab-btn';
        btn.id = `tab-${key}`;
        btn.textContent = universes[key].name;
        btn.onclick = () => renderUniverse(key);
        tabsContainer.appendChild(btn);
    }
    renderUniverse('earth616'); // Грузим основу при запуске
}

// 6. Ловим клики по кнопкам "Просмотрено"
moviesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('watch-btn')) {
        const title = e.target.dataset.title;
        const card = e.target.closest('.movie-card');
        
        if (watchedMovies.includes(title)) {
            watchedMovies = watchedMovies.filter(m => m !== title);
            e.target.textContent = "Не смотрел";
            card.classList.remove('watched');
        } else {
            watchedMovies.push(title);
            e.target.textContent = "✓ Просмотрено";
            card.classList.add('watched');
        }
        
        // Перезаписываем память
        localStorage.setItem('marvel_watched', JSON.stringify(watchedMovies));
    }
});

// Запуск
initTabs();
