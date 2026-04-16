# Nexora Launcher — сайт

Лендинг приватного Minecraft 1.12.2 Forge сервера AnubisWorld HiTech та лаунчера Nexora.

**Live:** https://vitmostovoy-rgb.github.io/minecraft/

## About

Цей репозиторій містить **тільки статичний веб-сайт**. Сам лаунчер (Python + PyQt5, збирається в .exe через PyInstaller, дистриб ~850 МБ) розробляється в окремому проєкті й хоститься на Google Drive.

Сайт виконує три задачі:
- знайомство відвідувачів зі сервером
- пряме посилання на завантаження актуальної версії лаунчера
- лінки на community (Discord, Telegram)

## Стек

- Чистий HTML + [Tailwind CSS через CDN](https://tailwindcss.com/) — без білд-кроку
- Клієнтський i18n (RU / UA / EN / DE / PL) — словники прямо в `docs/index.html`
- Хостинг — GitHub Pages з папки `docs/`

## Структура

```
docs/
├── index.html    # єдина сторінка
└── logo.png      # логотип
```

## Локальна правка

1. Відкрий `docs/index.html` у браузері (можна подвійним кліком)
2. Редагуй HTML / Tailwind-класи — зміни видно одразу при оновленні
3. `git commit` + `git push` → GitHub Pages автодеплоїть за ~30 секунд

## Оновити посилання на завантаження лаунчера

Знайди `<section id="download">` в `docs/index.html` → заміни `href` у кнопці завантаження на новий лінк з Google Drive.

Лаунчер заливається через `deploy.py` у проєкті MojNovyLauncher — там же друкується актуальний download-URL після кожного аплоаду.
