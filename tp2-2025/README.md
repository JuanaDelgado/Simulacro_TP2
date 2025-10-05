Es tu primer día en tecnoshare.com luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

- Realizar un Fork del presente repositorio
- Realizar un clone del presente repositorio
- Instalar las dependencias
- Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí)
- Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona. El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos sample_supplies con una collection llamada sales, ahí se encuentran aprox. 5.000 ventas.
- Proba el endpoint que ya se encuentra desarrollado: **_/api/sales_** debería retornar un json con 5.000 ventas. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point). Sí por algun motivo no llegase a funcionar, solicita asistencia.

## TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD

- Desarrollar el endpoint para obtener una venta particular por su id
- Desarrollar el endpoint para obtener todas las ventas con una nueva propiedad llamada total que sea el monto total de la venta **_(price quantity)_** con el formato de endpoint **_/api/sales/total_**
- Desarrollar el endpoint para obtener las ventas filtradas por el mail del cliente. Queremos un listado de ventas de un cliente en particular utilizando el formato de endpoint **_/api/sales/customer/:email_**
- Desarrollar el endpoint para actualizar/cambiar el uso de cupon de descuento de la propiedad couponUsed
  Necesitamos un endpoint que devuelva un ranking/top N de productos mas vendidos utilizando el formato de endpoint **_/api/sales/top-products?limit=5_**
  Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

Y una ultima cosa importante, todos los endpoints que desarrolles tienen que estar asegurados con un middleware de autenticacion, que valide que el token sea valido y que el usuario tenga permiso para acceder a la ruta.

Intrucciones para la entrega
Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
Realizar un commit a tu repo con un mensaje con tu nombre completo
Realizar un push a tu repositorio
Realizar un pull request a mi repositorio
Listado de endpoint
**_-GET /api/movies?pageSize=[pageSize]&page=[page]_**
