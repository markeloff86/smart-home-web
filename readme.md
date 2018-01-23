Система управления умным домом (RSSH)
================================================================================

## Требования для разработки 

### node.js

Для разработки приложения должен быть установлен *node.js*. Актуальную версию можно скачать с официального сайта:

https://nodejs.org/en/download/current/

Или использовать node version manager(nvm) для более простого обновления и установки новых версий:

 * Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
 * nix: [nvm](https://github.com/creationix/nvm)

## Запуск

* `npm start` - запуск dev сервера для автоматической компиляции изменений. Компонента доступна по http://localhost:8084/

* `npm link` - локальная интеграция компоненты
* `npm run build` - сборка приложения. Собранная версия доступна в папке `./dist`
* `npm test` - запустить тест

## Актуальная версия cti-panel

Актуальная версия компоненты находится в бранче `develop`

### Используемые библиотеки

* [react](http://facebook.github.io/react/) - components
* [react-bootstrap](https://react-bootstrap.github.io/) - the most popular front-end framework, rebuilt for React
* [redux](http://redux.js.org/) - immutable store
* [axios](http://github.com/mzabriskie/axios) - AJAX вызовы
