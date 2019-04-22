# KambistaChallenge

Un servicio API Rest de un mecanismo de pagos (envío de dinero) publicado en Heroku y desarrollado en node con el framework Nest.js, que tiene integración externa con el API del servicio Hyperwallet ,el cual es un servicio de "Payout" (pagos) de Paypal.
Los requisitos planteados por Kambista son:
```bash
1.Crear un usuario (persona a la cual se le enviará el dinero)
2.Listar usuarios
3.Registrar el método de pago para el usuario donde por defecto deberás "setear" las variasbles para éste caso:

"transferMethodCountry": "US",
"transferMethodCurrency": "USD",
"type": "BANK_ACCOUNT"

4. Listar método de pago dado un usuario.
5. Emitir un pago.
```
# Caracteristicas de la app
  ```bash
  -Escrita con TypeScript
  -Framework Nest js
  -CRUD operaciones con Observadores
  -Editor de código Visual Studio Code
  ```
# Instalación 
$ npm install

# Ejecutar la  app
 ```bash
 Desarrollo
$ npm run start
 
 Watch mode
$ npm run start:dev

  production mode
$ npm run start:prod
```
# Endpoints
```bash
1.Crear un usuario (persona a la cual se le enviará el dinero) :POST
https://kambistachallenge.herokuapp.com/users
Ejemplo:

