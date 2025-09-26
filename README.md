# Object First Test

Деплой: [object-first.vercel.app](https://object-first.vercel.app/)

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск локального сервера
npm run dev
```

## Технологии
- React + Vite
- React Router
- Redux Toolkit
- Recharts

## Реализованный функционал

- Роутинг через react router
  - Страницы из header, отсутствующие в макете, созданы пустыми

- Dashboard
  - Графики построен с использованием Recharts
  - Таблица VM
    - Поддерживается сортировка по колонкам

- Визард создания VM
  - Кнопка NEW открывает модальное окно с формой для создания VM
  - Кнопка Create добавляет VM в массив и отображает её в таблице
  - Добавление VM реализовано с помощью Redux Toolkit 
