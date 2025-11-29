# Leleka Backend

Backend для додатку "Лелека" — додаток для вагітних.

## Технології

- **Node.js** — runtime
- **Express** — веб-фреймворк
- **MongoDB** — база даних
- **Mongoose** — ODM для MongoDB
- **JWT** — аутентифікація
- **bcrypt** — хешування паролів

## Функціонал

- ✅ Реєстрація користувача
- ✅ Логін/Логаут
- ✅ JWT аутентифікація
- ✅ Хешування паролів
`

## API Endpoints

### Auth

- `POST /api/auth/register` — Реєстрація
- `POST /api/auth/login` — Логін
- `POST /api/auth/logout` — Логаут

## Структура проєкту
```
leleka-backend/
├── src/
│   ├── controllers/      # Логіка обробки запитів
│   ├── models/          # Mongoose моделі
│   ├── routes/          # Маршрути API
│   ├── middlewares/     # Middleware функції
│   ├── utils/           # Допоміжні функції
│   └── app.js           # Налаштування Express
├── .env                 # Змінні оточення
├── .env.example         # Приклад змінних
├── .gitignore          # Ігноровані файли
├── server.js           # Точка входу
└── package.json        # Залежності
```

## Автор
Вікторія Рубан