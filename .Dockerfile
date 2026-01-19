FROM node:20-alpine

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем ВСЕ зависимости (включая dev для сборки)
RUN npm install

# Копируем остальные файлы
COPY . .

# Создаем директорию для загрузок
RUN mkdir -p /app/uploads

# Собираем Next.js приложение
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запускаем продакшен сервер
CMD ["npm", "start"]
