// 1. Достаем сохранения из памяти браузера
let watchedMovies = JSON.parse(localStorage.getItem('marvel_watched')) || [];
const TMDB_API_KEY = 'd609cb83258df8b2b7e9aee208d6e0a3';

// Глобальные стейты интерфейса
let currentEarthId = 'earth616';
let showOptional = JSON.parse(localStorage.getItem('marvel_show_optional')) || false;

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
            { phase: "ВТОРАЯ ФАЗА", title: "Сорвиголова (1 сезон)", year: 2015 },
            { phase: "ВТОРАЯ ФАЗА", title: "Джессика Джонс (1 сезон)", year: 2015, optional: true },
            { phase: "ВТОРАЯ ФАЗА", title: "Мстители: Эра Альтрона", year: 2015 },
            { phase: "ВТОРАЯ ФАЗА", title: "Человек-муравей", year: 2015 },
            
            { phase: "ТРЕТЬЯ ФАЗА", title: "Сорвиголова (2 сезон)", year: 2016 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Первый мститель: Противостояние", year: 2016 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Доктор Стрэндж", year: 2016 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Люк Кейдж (1 сезон)", year: 2016, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Железный кулак (1 сезон)", year: 2017, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Защитники (Сериал)", year: 2017, optional: true, type: 'tv' },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Стражи Галактики. Часть 2", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-паук: Возвращение домой", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Тор: Рагнарёк", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Каратель (1 сезон)", year: 2017 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Джессика Джонс (2 сезон)", year: 2018, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Чёрная пантера", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Мстители: Война бесконечности", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Люк Кейдж (2 сезон)", year: 2018, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Железный кулак (2 сезон)", year: 2018, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Сорвиголова (3 сезон)", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Каратель (2 сезон)", year: 2019 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-муравей и Оса", year: 2018 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Джессика Джонс (3 сезон)", year: 2019, optional: true },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Капитан Марвел", year: 2019 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Мстители: Финал", year: 2019 },
            { phase: "ТРЕТЬЯ ФАЗА", title: "Человек-паук: Вдали от дома", year: 2019 },
            
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Ванда/Вижн (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Сокол и Зимний солдат (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Локи (1 сезон)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Чёрная вдова", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Что, если...? (1 сезон)", year: 2021, optional: true },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Шан-Чи и легенда десяти колец", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Вечные", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Соколиный глаз (сериал)", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Человек-паук: Нет пути домой", year: 2021 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Лунный рыцарь (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Доктор Стрэндж: В мультивселенной безумия", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Мисс Марвел (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Тор: Любовь и гром", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Женщина-Халк: Адвокат (сериал)", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Ночной оборотень", year: 2022, optional: true },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Чёрная пантера: Ваканда навеки", year: 2022 },
            { phase: "ЧЕТВЁРТАЯ ФАЗА", title: "Стражи галактики: Праздничный спецвыпуск", year: 2022 },
            
            { phase: "ПЯТАЯ ФАЗА", title: "Человек-муравей и Оса: Квантомания", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Стражи Галактики. Часть 3", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Секретное вторжение (сериал)", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Локи (2 сезон)", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Капитан Марвел 2 / Марвелы", year: 2023 },
            { phase: "ПЯТАЯ ФАЗА", title: "Что, если...? (2 сезон)", year: 2023, optional: true },
            { phase: "ПЯТАЯ ФАЗА", title: "Эхо (сериал)", year: 2024, optional: true },
            { phase: "ПЯТАЯ ФАЗА", title: "Дэдпул и Росомаха", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Это всё Агата (сериал)", year: 2024 },
            { phase: "ПЯТАЯ ФАЗА", title: "Что, если...? (3 сезон)", year: 2024, optional: true },
            { phase: "ПЯТАЯ ФАЗА", title: "Капитан Америка: Новый мир", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Сорвиголова: Рождённый заново (сериал)", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Громовержцы*", year: 2025 },
            { phase: "ПЯТАЯ ФАЗА", title: "Железное сердце (сериал)", year: 2025 },
            
            { phase: "ШЕСТАЯ ФАЗА", title: "Фантастическая четвёрка: Первые шаги", year: 2025 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Чудо-человек (сериал)", year: 2026 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Человек-паук: Новый день", year: 2026 },
            { phase: "ШЕСТАЯ ФАЗА", title: "Мстители: Судный день", year: 2027 },
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
        name: "Земля-688 (Sony)",
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

async function getTMDBData(rawTitle, displayYear, mediaType) {
    const fallbackPoster = getFallbackSvg(rawTitle);
    const fallbackData = {
        poster: fallbackPoster,
        fallback: fallbackPoster,
        plot: "Описание пока не загружено в базу."
    };

    try {
        const isTV = mediaType === 'tv' || /(сериал|сезон)/i.test(rawTitle);
        let cleanTitle = rawTitle.replace(/\(сериал\)|\(\d+\s*сезон\)|\s\/.*$|\*/gi, '').trim();
        
        // По умолчанию ищем по тому году, что написан в карточке
        let searchYear = displayYear; 

        // ПРОДВИНУТЫЙ СЛОВАРЬ: Подменяем названия на английские и фиксируем годы первых сезонов
        const tmdbOverrides = {
            "Человек-паук 1": { title: "Spider-Man" },
            "Человек-паук 2": { title: "Spider-Man 2" },
            "Человек-паук 3": { title: "Spider-Man 3" },
            "Новый Человек-паук": { title: "The Amazing Spider-Man" },
            "Новый Человек-паук: Высокое напряжение": { title: "The Amazing Spider-Man 2" },
            "Капитан Марвел 2": { title: "The Marvels" }, 
            "Мстители: Судный день": { title: "Avengers: Doomsday" },
            "Мстители: Секретные войны": { title: "Avengers: Secret Wars" },
            "Фантастическая четвёрка: Первые шаги": { title: "The Fantastic Four: First Steps" },
            "Громовержцы": { title: "Thunderbolts*" },
            
            // Многосезонники: заставляем TMDB искать их по году выхода 1-го сезона
            "Что, если...?": { title: "What If...?", year: 2021 },
            "Локи": { title: "Локи", year: 2021 },
            "Сорвиголова": { title: "Daredevil", year: 2015 },
            "Джессика Джонс": { title: "Jessica Jones", year: 2015 },
            "Люк Кейдж": { title: "Luke Cage", year: 2016 },
            "Железный кулак": { title: "Iron Fist", year: 2017 },
            "Каратель": { title: "The Punisher", year: 2017 }
        };

        // Если фильм/сериал есть в словаре - применяем подмены
        if (tmdbOverrides[cleanTitle]) {
            if (tmdbOverrides[cleanTitle].year) {
                searchYear = tmdbOverrides[cleanTitle].year;
            }
            cleanTitle = tmdbOverrides[cleanTitle].title;
        }

        const type = isTV ? 'tv' : 'movie';
        const url = new URL(`https://api.themoviedb.org/3/search/${type}`);
        url.searchParams.append('api_key', TMDB_API_KEY);
        url.searchParams.append('query', cleanTitle);
        url.searchParams.append('language', 'ru-RU');
        
        // Отправляем в TMDB наш подмененный год
        if (isTV) {
            url.searchParams.append('first_air_date_year', searchYear);
        } else {
            url.searchParams.append('primary_release_year', searchYear);
        }

        const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
        const data = await res.json();

        let match = data.results && data.results.find(item => item.poster_path);

        if (!match) {
            url.searchParams.delete(isTV ? 'first_air_date_year' : 'primary_release_year');
            const fallbackRes = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
            const fallbackDataRes = await fallbackRes.json();
            
            if (fallbackDataRes.results && fallbackDataRes.results.length > 0) {
                const sorted = fallbackDataRes.results.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
                match = sorted.find(item => item.poster_path);
            }
        }

        if (match) {
            return {
                poster: match.poster_path ? `https://wsrv.nl/?url=image.tmdb.org/t/p/w500${match.poster_path}` : fallbackPoster,
                fallback: fallbackPoster,
                plot: match.overview || "Для этого проекта в базе TMDB пока нет описания на русском."
            };
        }
    } catch (e) {
        console.error(`Ошибка загрузки данных для "${rawTitle}":`, e);
    }

    return fallbackData;
}

function getFallbackSvg(title) {
    const shortTitle = (title.substring(0, 4) || 'MCU').toUpperCase();
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
            <rect width="300" height="450" fill="#161b22"/>
            <rect x="10" y="10" width="280" height="430" rx="8" fill="none" stroke="#30363d" stroke-width="2"/>
            <text x="50%" y="45%" text-anchor="middle" fill="#e23636" font-family="Segoe UI, sans-serif" font-weight="900" font-size="42">${shortTitle}</text>
            <text x="50%" y="58%" text-anchor="middle" fill="#8b949e" font-family="Segoe UI, sans-serif" font-weight="600" font-size="14">NO POSTER</text>
        </svg>
    `.trim();
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const tabsContainer = document.getElementById('tabs-container');
const moviesContainer = document.getElementById('movies-container');
const sidebar = document.getElementById('sidebar');

async function renderUniverse(earthId) {
    currentEarthId = earthId;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${earthId}`);
    if (activeTab) activeTab.classList.add('active');

    moviesContainer.innerHTML = '<p style="text-align:center; font-size:1.2em; color:#a0a0a0;">Подключение к мультивселенной...</p>';
    sidebar.innerHTML = '';
    
    const universe = universes[earthId];
    let html = '';
    let sidebarHtml = '';
    let currentPhase = '';

    for (let movie of universe.movies) {
        if (movie.optional && !showOptional) continue;

        if (movie.phase !== currentPhase) {
            const phaseId = `phase-${movie.phase.replace(/\s+/g, '-').toLowerCase()}`;
            html += `<div class="phase-title" id="${phaseId}">${movie.phase}</div>`;
            sidebarHtml += `<a href="#${phaseId}" class="sidebar-link">${movie.phase}</a>`;
            currentPhase = movie.phase;
        }

        const tmdbData = await getTMDBData(movie.title, movie.year, movie.type);
        const isWatched = watchedMovies.includes(movie.title);
        const watchedClass = isWatched ? 'watched' : '';
        const btnText = isWatched ? '✓ Просмотрено' : 'Не просмотрено';

        const badgeHtml = movie.optional ? `<div class="optional-badge">Необязательно</div>` : '';

        // Подготавливаем безопасный сюжет от TMDB
        const safePlot = tmdbData.plot.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        
        // Подготавливаем спойлеры (лор)
        const spoilerText = (typeof mcuLore !== 'undefined' && mcuLore[movie.title]) 
            ? mcuLore[movie.title] 
            : "⚠️ Уровень допуска недостаточен. Секретные архивы и влияние на КВМ для этого проекта еще не задокументированы.";
        const safeLore = spoilerText.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        
        const safeTitle = movie.title.replace(/"/g, '&quot;');

        html += `
            <div class="movie-card ${watchedClass}">
                <div class="poster">
                    <!-- Защита от черных квадратов: если прокси упал, грузим SVG заглушку -->
                    <img src="${tmdbData.poster}" alt="Постер" onerror="this.onerror=null; this.src='${tmdbData.fallback}';">
                </div>
                <div class="info">
                    ${badgeHtml}
                    <div class="title">${movie.title}</div>
                    <div class="year">${movie.year}</div>
                    
                    <div class="buttons-row">
                        <button class="watch-btn" data-title="${safeTitle}">${btnText}</button>
                        <!-- Две разные кнопки с разными данными (data-text) и заголовками (data-header) -->
                        <button class="skip-btn" data-title="${safeTitle}" data-header="СЮЖЕТ" data-text="${safePlot}">Сюжет</button>
                        <button class="lore-btn" data-title="${safeTitle}" data-header="БАЗА Щ.И.Т." data-text="${safeLore}">Спойлеры</button>
                    </div>
                </div>
            </div>
        `;
    }

    moviesContainer.innerHTML = html;
    sidebar.innerHTML = sidebarHtml;
}

function initTabs() {
    for (let key in universes) {
        const btn = document.createElement('button');
        btn.className = 'tab-btn';
        btn.id = `tab-${key}`;
        btn.textContent = universes[key].name;
        btn.onclick = () => renderUniverse(key);
        tabsContainer.appendChild(btn);
    }
    renderUniverse(currentEarthId);
}

const optionalToggle = document.getElementById('optional-toggle');
optionalToggle.checked = showOptional;

optionalToggle.addEventListener('change', (e) => {
    showOptional = e.target.checked;
    localStorage.setItem('marvel_show_optional', JSON.stringify(showOptional));
    renderUniverse(currentEarthId);
});

moviesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('watch-btn')) {
        const title = e.target.dataset.title;
        const card = e.target.closest('.movie-card');
        
        if (watchedMovies.includes(title)) {
            watchedMovies = watchedMovies.filter(m => m !== title);
            e.target.textContent = "Не просмотрено";
            card.classList.remove('watched');
        } else {
            watchedMovies.push(title);
            e.target.textContent = "✓ Просмотрено";
            card.classList.add('watched');
        }
        
        localStorage.setItem('marvel_watched', JSON.stringify(watchedMovies));
    }
});

const modal = document.getElementById('summary-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeModalBtn = document.getElementById('close-modal');

// Ловим клики по кнопкам "Сюжет" и "Спойлеры"
moviesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('skip-btn') || e.target.classList.contains('lore-btn')) {
        const title = e.target.dataset.title;
        const text = e.target.dataset.text;
        const header = e.target.dataset.header;
        
        // Меняем заголовок в зависимости от того, что открыли
        modalTitle.innerHTML = `<span style="font-size: 0.6em; color: var(--text-muted);">${header}</span><br>${title}`;
        modalText.innerHTML = text; 
        
        modal.classList.remove('hidden');
    }
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

initTabs();