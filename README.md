# PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

`https://angular.io/api?query=pipe`

Type of pipes

Uppercase

Lowercase

TitleCase

Date

Decimal

Currency

Percent

i18nSelect

i18Plural

KeyValue

Json

Async

Styles with
`PrimeFlex` https://www.primefaces.org/primeflex/setup

`NgPrime`

## Cambiar idioma de moneda, fecha ente otros de forma global en la app

`https://angular.io/api/common/DatePipe`

En modulo ppal app.module hago ésto

import localeEs from '@angular/common/locales/es-PA'; => locale/aquí elijo el país 
import { registerLocaleData } from '@angular/common'; => igual
registerLocaleData(localeEs); // spanish panamá  => llamo función con parámetro que le di arriba 

Para crear pipes con cli de angular:
