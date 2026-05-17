import { useLang, type Lang } from './lang'

// Per-locale copy. Mirrors the strings that lived inside `data-i18n`
// attributes on the original docs/index.html — moved here so React
// components reference them via `useT()`.

type Strings = {
    nav: { features: string; reviews: string; faq: string; download: string }
    hero: {
        eyebrow: string
        title: string
        titleAccent: string
        desc: string
        ctaPrimary: string
        ctaSecondary: string
    }
    server: { label: string; status: string }
    features: { title: string; titleAccent: string; items: Array<{ icon: string; title: string; desc: string }> }
    reviews: { title: string; titleAccent: string }
    download: { title: string; titleAccent: string; desc: string }
    faq: { title: string; titleAccent: string; items: Array<{ q: string; a: string }> }
    footer: { donate: string; openInGame: string; chooseLang: string }
}

const COPY: Record<Lang, Strings> = {
    uk: {
        nav:    { features: 'Можливості', reviews: 'Відгуки', faq: 'Питання', download: 'Завантажити' },
        hero: {
            eyebrow: 'SINGLEPLAYER SERVER · 24/7',
            title: 'Anubis',
            titleAccent: 'World',
            desc: 'Якісні модові сервери Minecraft, де технології зустрічаються з магією. Стабільний геймплей, продумана економіка, чуйна спільнота.',
            ctaPrimary: 'Грати',
            ctaSecondary: 'Discord',
        },
        server: { label: 'Сервер', status: 'Online · HiTech 1.12.2' },
        features: {
            title: 'Чому обирають',
            titleAccent: 'саме нас?',
            items: [
                { icon: '⚡',  title: 'Потужне залізо',   desc: 'Виділені сервери з високим TPS. Без лагів, без компромісів.' },
                { icon: '⚖️',  title: 'Баланс економіки', desc: 'Унікальні квести, чесна торгівля та захопливий геймплей.' },
                { icon: '🛡️',  title: 'Античит',          desc: 'Просунутий захист від читерів. Чесна гра гарантована.' },
                { icon: '🌙',  title: 'Підтримка 24/7',   desc: 'Чуйна команда модераторів завжди готова допомогти.' },
            ],
        },
        reviews:  { title: 'Що кажуть', titleAccent: 'гравці' },
        download: {
            title: 'Завантажити', titleAccent: 'лаунчер',
            desc: 'Встановлення в один клік. Лаунчер автоматично завантажить Forge, моди та конфіги.',
        },
        faq: {
            title: 'Відповіді на', titleAccent: 'питання',
            items: [
                { q: 'Як почати грати?',  a: 'Завантаж лаунчер кнопкою вище, введи нік — і грай. Лаунчер сам встановить Forge і всі моди.' },
                { q: 'Скільки коштує?',   a: 'Гра безкоштовна. Донати — для підтримки сервера (Premium / Ultra / HD-скіни / плащі).' },
                { q: 'Мій світ зберігається?', a: 'Так. Це єдиний світ, спільний для всіх — будуй, торгуй, досліджуй.' },
                { q: 'Чи потрібен Mojang-акаунт?', a: 'Ні. Сервер працює в offline-режимі — реєструйся ніком і паролем.' },
            ],
        },
        footer: { donate: 'Підтримати сервер', openInGame: 'Відкрити в грі', chooseLang: 'Мова' },
    },
    ru: {
        nav:    { features: 'Возможности', reviews: 'Отзывы', faq: 'Вопросы', download: 'Скачать' },
        hero: {
            eyebrow: 'SINGLEPLAYER SERVER · 24/7',
            title: 'Anubis',
            titleAccent: 'World',
            desc: 'Качественные модовые серверы Minecraft, где технологии встречаются с магией. Стабильный геймплей, продуманная экономика, отзывчивое сообщество.',
            ctaPrimary: 'Играть',
            ctaSecondary: 'Discord',
        },
        server:  { label: 'Сервер', status: 'Online · HiTech 1.12.2' },
        features: {
            title: 'Почему выбирают',
            titleAccent: 'именно нас?',
            items: [
                { icon: '⚡', title: 'Мощное железо',   desc: 'Выделенные серверы с высоким TPS. Без лагов, без компромиссов.' },
                { icon: '⚖️', title: 'Баланс экономики', desc: 'Уникальные квесты, честная торговля и увлекательный геймплей.' },
                { icon: '🛡️', title: 'Античит',         desc: 'Продвинутая защита от читеров. Честная игра гарантирована.' },
                { icon: '🌙', title: 'Поддержка 24/7',  desc: 'Отзывчивая команда модераторов всегда готова помочь.' },
            ],
        },
        reviews:  { title: 'Что говорят', titleAccent: 'игроки' },
        download: { title: 'Скачать', titleAccent: 'лаунчер', desc: 'Установка в один клик. Лаунчер автоматически загрузит Forge, моды и конфиги.' },
        faq: {
            title: 'Ответы на', titleAccent: 'вопросы',
            items: [
                { q: 'Как начать играть?', a: 'Скачай лаунчер кнопкой выше, введи ник — и играй. Лаунчер сам поставит Forge и все моды.' },
                { q: 'Сколько стоит?',     a: 'Игра бесплатна. Донаты — для поддержки сервера (Premium / Ultra / HD-скины / плащи).' },
                { q: 'Мой мир сохраняется?', a: 'Да. Это единый мир для всех — строй, торгуй, исследуй.' },
                { q: 'Нужен ли аккаунт Mojang?', a: 'Нет. Сервер работает в offline-режиме — регистрируйся ником и паролем.' },
            ],
        },
        footer: { donate: 'Поддержать сервер', openInGame: 'Открыть в игре', chooseLang: 'Язык' },
    },
    en: {
        nav:    { features: 'Features', reviews: 'Reviews', faq: 'FAQ', download: 'Download' },
        hero: {
            eyebrow: 'SINGLEPLAYER SERVER · 24/7',
            title: 'Anubis',
            titleAccent: 'World',
            desc: 'Quality modded Minecraft servers where technology meets magic. Stable gameplay, balanced economy, responsive community.',
            ctaPrimary: 'Play',
            ctaSecondary: 'Discord',
        },
        server:  { label: 'Server', status: 'Online · HiTech 1.12.2' },
        features: {
            title: 'Why', titleAccent: 'us?',
            items: [
                { icon: '⚡', title: 'Beefy hardware',  desc: 'Dedicated servers with high TPS. No lag, no compromise.' },
                { icon: '⚖️', title: 'Balanced economy', desc: 'Unique quests, fair trade, engaging gameplay.' },
                { icon: '🛡️', title: 'Anti-cheat',       desc: 'Advanced cheater protection. Fair play guaranteed.' },
                { icon: '🌙', title: '24/7 support',     desc: 'Friendly moderators ready to help any time.' },
            ],
        },
        reviews:  { title: 'What', titleAccent: 'players say' },
        download: { title: 'Download', titleAccent: 'the launcher', desc: 'One-click install. The launcher auto-fetches Forge, mods, and configs.' },
        faq: {
            title: 'FAQ', titleAccent: 'answers',
            items: [
                { q: 'How do I start?',          a: 'Download the launcher above, type your nick, hit Play. Forge and mods install automatically.' },
                { q: 'How much does it cost?',   a: 'Free to play. Donations support the server (Premium / Ultra / HD skins / capes).' },
                { q: 'Does my world persist?',   a: 'Yes — single shared world. Build, trade, explore.' },
                { q: 'Do I need a Mojang account?', a: 'No — the server runs offline mode. Register a nick and password and you’re in.' },
            ],
        },
        footer: { donate: 'Donate', openInGame: 'Open in-game', chooseLang: 'Language' },
    },
    de: {
        nav:    { features: 'Funktionen', reviews: 'Bewertungen', faq: 'FAQ', download: 'Download' },
        hero: {
            eyebrow: 'SINGLEPLAYER SERVER · 24/7',
            title: 'Anubis',
            titleAccent: 'World',
            desc: 'Hochwertige modifizierte Minecraft-Server, wo Technologie auf Magie trifft. Stabiles Gameplay, ausgewogene Wirtschaft, engagierte Community.',
            ctaPrimary: 'Spielen',
            ctaSecondary: 'Discord',
        },
        server:  { label: 'Server', status: 'Online · HiTech 1.12.2' },
        features: {
            title: 'Warum', titleAccent: 'wir?',
            items: [
                { icon: '⚡', title: 'Starke Hardware',   desc: 'Dedizierte Server mit hohem TPS. Kein Lag, keine Kompromisse.' },
                { icon: '⚖️', title: 'Ausgewogene Wirtschaft', desc: 'Einzigartige Quests, fairer Handel, fesselndes Gameplay.' },
                { icon: '🛡️', title: 'Anti-Cheat',         desc: 'Fortschrittlicher Cheater-Schutz. Fair Play garantiert.' },
                { icon: '🌙', title: '24/7-Support',       desc: 'Freundliche Moderatoren sind jederzeit erreichbar.' },
            ],
        },
        reviews:  { title: 'Was', titleAccent: 'Spieler sagen' },
        download: { title: 'Launcher', titleAccent: 'herunterladen', desc: 'Ein-Klick-Installation. Der Launcher zieht Forge, Mods und Configs automatisch.' },
        faq: {
            title: 'Häufige', titleAccent: 'Fragen',
            items: [
                { q: 'Wie fange ich an?',    a: 'Launcher oben laden, Nickname eingeben, Spielen drücken. Forge und Mods werden automatisch installiert.' },
                { q: 'Was kostet das?',      a: 'Kostenlos. Spenden unterstützen den Server (Premium / Ultra / HD-Skins / Umhänge).' },
                { q: 'Bleibt meine Welt?',   a: 'Ja — eine gemeinsame Welt für alle. Bauen, handeln, erkunden.' },
                { q: 'Brauche ich ein Mojang-Konto?', a: 'Nein — der Server läuft im Offline-Modus. Nickname und Passwort registrieren und los geht’s.' },
            ],
        },
        footer: { donate: 'Server unterstützen', openInGame: 'Im Spiel öffnen', chooseLang: 'Sprache' },
    },
    pl: {
        nav:    { features: 'Funkcje', reviews: 'Opinie', faq: 'FAQ', download: 'Pobierz' },
        hero: {
            eyebrow: 'SINGLEPLAYER SERVER · 24/7',
            title: 'Anubis',
            titleAccent: 'World',
            desc: 'Wysokiej jakości modowane serwery Minecraft, gdzie technologia spotyka się z magią. Stabilna rozgrywka, zrównoważona ekonomia, zaangażowana społeczność.',
            ctaPrimary: 'Graj',
            ctaSecondary: 'Discord',
        },
        server:  { label: 'Serwer', status: 'Online · HiTech 1.12.2' },
        features: {
            title: 'Dlaczego', titleAccent: 'my?',
            items: [
                { icon: '⚡', title: 'Mocny sprzęt',     desc: 'Dedykowane serwery z wysokim TPS. Bez lagów, bez kompromisów.' },
                { icon: '⚖️', title: 'Zrównoważona ekonomia', desc: 'Unikalne questy, uczciwy handel, wciągająca rozgrywka.' },
                { icon: '🛡️', title: 'Anti-cheat',       desc: 'Zaawansowana ochrona przed cheaterami. Fair play gwarantowana.' },
                { icon: '🌙', title: 'Wsparcie 24/7',    desc: 'Przyjazni moderatorzy zawsze gotowi pomóc.' },
            ],
        },
        reviews:  { title: 'Co mówią', titleAccent: 'gracze' },
        download: { title: 'Pobierz', titleAccent: 'launcher', desc: 'Instalacja w jednym kliknięciu. Launcher automatycznie pobierze Forge, mody i configi.' },
        faq: {
            title: 'Najczęściej zadawane', titleAccent: 'pytania',
            items: [
                { q: 'Jak zacząć grać?',       a: 'Pobierz launcher powyżej, wpisz nick — i graj. Launcher sam zainstaluje Forge i mody.' },
                { q: 'Ile to kosztuje?',       a: 'Gra jest darmowa. Donaty wspierają serwer (Premium / Ultra / HD-skiny / peleryny).' },
                { q: 'Czy mój świat zostaje?', a: 'Tak — jeden wspólny świat. Buduj, handluj, eksploruj.' },
                { q: 'Czy potrzebuję konta Mojang?', a: 'Nie — serwer działa w trybie offline. Zarejestruj nick i hasło, i grasz.' },
            ],
        },
        footer: { donate: 'Wesprzyj serwer', openInGame: 'Otwórz w grze', chooseLang: 'Język' },
    },
}

export function useT(): Strings {
    const { lang } = useLang()
    return COPY[lang]
}
