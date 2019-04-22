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
URL:https://kambistachallenge.herokuapp.com/users
```bash
1.Permite crear un usuario (vale decir persona a la cual se le enviará el dinero):POST
https://kambistachallenge.herokuapp.com/users
Ejemplo:
```
![ScreenShot](https://raw.githubusercontent.com/diewoo/KambistaChallenge/master/assets/1.crearUsuario.png)
Para más información de este método:https://portal.hyperwallet.com/docs/api/v3/resources/users/create
```bash
2.Permite listara todos los usuarios:GET
https://kambistachallenge.herokuapp.com/users
Ejemplo:
```
![ScreenShot](https://raw.githubusercontent.com/diewoo/KambistaChallenge/master/assets/02.ListarUsusarios.png)
Para más información de este método:https://portal.hyperwallet.com/docs/api/v3/resources/users/list
```bash
3.Registrar el método de pago para el usuario donde por defecto deberás "setear" las variables para éste caso:

"transferMethodCountry": "US",
"transferMethodCurrency": "USD",
"type": "BANK_ACCOUNT"
https://kambistachallenge.herokuapp.com/users/registrarpago/usr-3f448b10-598d-4e2e-a241-3aba76393881
donde:
usr-3f448b10-598d-4e2e-a241-3aba76393881: token único del usuario creado ( aunque podría ser de cualquier usuario si se conoce su token)
Ejemplo:
```
![ScreenShot](https://raw.githubusercontent.com/diewoo/KambistaChallenge/master/assets/03.RegistrarPago.png)

Para mas informacion de este método:https://portal.hyperwallet.com/docs/api/v3/resources/bank-accounts/create
```bash
4.Listar método de pago dado un usuario:GET
https://kambistachallenge.herokuapp.com/users/usr-7d0d1544-826e-4ac1-9bc8-99eaa3800360/bank-accounts/trm-7339d691-6be1-48a7-a13b-334cef609abb
donde:
usr-7d0d1544-826e-4ac1-9bc8-99eaa3800360: token único del usuario creado ( aunque podría ser de cualquier usuario si se conoce su token)
trm-7339d691-6be1-48a7-a13b-334cef609abb: token único de la cuenta de banco 
```
![ScreenShot](https://raw.githubusercontent.com/diewoo/KambistaChallenge/master/assets/04.ListaMétodoDePagoUsuario.png)
Para mas informacion de este método:https://portal.hyperwallet.com/docs/api/v3/resources/bank-accounts/retrieve

```bash
5.Emitir un pago.:POST
https://kambistachallenge.herokuapp.com/users/pagar
```
![ScreenShot](https://raw.githubusercontent.com/diewoo/KambistaChallenge/master/assets/05.EmitirPago.png)
Para mas informacion de este método:https://portal.hyperwallet.com/docs/api/v3/resources/payments/create
## A desarrollar
Interfaz web que permite realizar estas operaciones...
## Contacto

- Author - Diego Renteria Vidaurre
- Correo - dgo250594@gmail.com

