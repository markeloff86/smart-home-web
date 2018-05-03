Система управления умным домом (RSSH)
================================================================================

## Требования для разработки 

### node.js

Для разработки приложения должен быть установлен *node.js*. Актуальную версию можно скачать с официального сайта:

https://nodejs.org/en/download/current/

Или использовать node version manager(nvm) для более простого обновления и установки новых версий:

 * Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
 * nix: [nvm](https://github.com/creationix/nvm)

## npm цели

* `npm install` - установка зависимостей.
* `npm start` - запуск dev сервера. Приложение доступно по http://localhost:8084/
* `npm run build` - сборка приложения. Собранная версия доступна в папке `./dist`
* `npm test` - запустить тесты

## Актуальная версия

Актуальная версия приложения находится в бранче `develop`

### Используемые библиотеки

* [react](http://facebook.github.io/react/) - components
* [antd](https://ant.design/) - the most popular front-end framework, rebuilt for React
* [redux](http://redux.js.org/) - immutable store
* [axios](http://github.com/mzabriskie/axios) - AJAX вызовы
