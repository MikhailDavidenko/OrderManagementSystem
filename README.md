# OrderManagementAPI

## База данных

В PostgreSQL необходимо восстановить бд и выбрать файл для восстановления BD.backup

## WebAPI

### Клонируйте репозиторий:
git clone <URL репозитория>

cd OrderManagementAPI

### Настройка конфигурации:

В appsettings.json необходимо прописать connection string - "DefaultConnection": "Host=localhost;Port=5432; Database=OrderManagement; User ID=postgres;Password=123456"

### Запуск приложения:
dotnet restore

dotnet run

Будет запущена на http://localhost:5072

## React app

### Получите последнюю версию приложения из репозитория Git:

Перейдите в корневую папку проекта (order-management) и выполните команду:

git pull origin master

Установите зависимости:


npm install

npm start

Приложение будет доступно по адресу http://localhost:3000.

### Если на этапе запуска возникнет ошибка "error:0308010C:digital envelope routines::unsupported", даже в последней версии проекта:

Попробуйте выполнить команду:

npm i react-scripts@latest

Если проблема не исчезает, попробуйте установить переменную окружения NODE_OPTIONS:

Для Linux/Mac:

export NODE_OPTIONS=--openssl-legacy-provider

Для Windows (в командной строке):

set NODE_OPTIONS=--openssl-legacy-provider
