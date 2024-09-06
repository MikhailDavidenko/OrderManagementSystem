# OrderManagementAPI

##База данных

В PostgreSQL необходимо восстановить бд и выбрать файл для восстановления BD.backup

##WebAPI

##Клонируйте репозиторий:
git clone <URL репозитория>

cd OrderManagementAPI
###Настройка конфигурации:

В appsettings.json необходимо прописать connection string - "DefaultConnection": "Host=localhost;Port=5432; Database=OrderManagement; User ID=postgres;Password=123456"

###Запуск приложения:
dotnet restore
dotnet run
Будет запущена на http://localhost:5072

##React app

###Запуск приложения:
Перейдите в корневую папку проекта(order-management) и выполните команду:
npm install
npm start
Приложение будет доступно по адресу http://localhost:3000
