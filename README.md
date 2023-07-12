# Test task for 3205
##  front-end part

### TASK
Напишите приложение с одной страницей, на котором находится форма с двумя полями:
- email (обязательное),
- number (опциональное),
- кнопка submit;

При нажатии на submit запрос уходит на бек где нужно в JSON найти подходящих под поисковый запрос пользователей, отобразить найденные данные на клиенте под формой.

Условия:
- нужно на беке добавить задержку обработки запроса в 5 секунд (имитация долгой обработки ответа). При повторном запросе с фронта, отменять прошлый запрос.
- обязательная валидация полей email и number. Можно сделать либо на фронте либо на беке, будьте готовы объяснить выбранный подход
- на фронте на поле number нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. например 22-11-22, 83-03-47

Тех. требования
- фронт react или vue (типизация на выбор)
- бек nodejs (типизация обязательна)
- библиотеки на ваше усмотрение
- деплой не обязателен, подойдёт и Readme с инструкцией.

### Tech stack:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For this project FE part Node v.18.15.0 and React v.18.2.0 were used. Also used:
- typescript v.4.9.5,
- mui/material v.5.13.7,
- react-imask v.7.1.0-alpha,
- eslint v. 8.44.0 (config-airbnb-base)

To check the implementation:
1. Clone the repos for FE and BE parts.
2. Run dependency installation
```
npm install
```
3. Run BE part of the project - [BE part task 3205](https://github.com/ansivgit/3205-test-be)
4. Run FE DEV mode with the command:
```
npm run start
```
5. For BE PROD mode use the command:
```
npm run build
```
