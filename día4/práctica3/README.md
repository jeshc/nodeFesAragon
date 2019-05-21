# API REST


REST es el acrónimo de Representational State Transfer, una arquitectura para el desarrollo de sistemas web sobre el protocolo HTTP. Esta tecnología fue propuesta por Roy Fielding (coautor de la especificación HTTP); el principal objetivo  es mejorar la portabilidad de información entre plataformas y facilitar la escalabilidad de los sistemas. La propuesta está centrada en la definición y estandarización de una interfaz uniforme diseñada para ser eficiente en la transferencia de datos hipermedia de granularidad amplia.
En cuanto al soporte http el REST establece que se deben realizar las 3 siguientes adecuaciones para desarrollar un sistema de este tipo:
1.	La correcta implementación de los métodos del protocolo HTTP  : OPTIONS, HEAD, GET, POST, PUT, DELETE. TRACE y CONNECT.
2.	Adecuada construcción de las URI (universal Resource Identifier) con la estructura definida en la especificacion estandar que consta de:
protocolo://host[:puerto]/recurso?parametro=valor&…
3.	La implementación de manejo de información de intercambio combinada con URI`s de referencia. Por ejemplo:
http://www.elgainternet.com/api/lectura/:id

```
{ "_id": "55380b5392ee91637901e3ed",
          "mac": "90:a2:da:0e:d6:00",
          "date": "2015-04-22 20:59:13",
          "percentage": 21,     "__v": 0,
	   “link”:”http://201.175.6.109:8080/lectura/55380b5392ee91637901e3ed”
}
```


La siguiente tabla establece un resumen de cómo deben respinder los diferentes verbos http en un API REST.

#### Verbos REST

Método HTTP | Operación CRUD | Elemento específico(/users/{id} ) | a la colección entera
----------- | -------------- | ------------------- | --------------
POST | Create / insert |  404 |  /users/ header code 201 created, Res.: el documento con nuevo _id
GET | Read  |  200 OK Resp.: Un sólo documento |  /users/: 200 OK, Resp.: Todos los documentos
PUT | Replace / Update |  200 OK ó 204 (Body sin contenido). Ó 404 (id no encontrado) | 405 Acción no permitida.
PATCH | Update |  200 (OK) or 204 (Body sin contenido). 404 (No encontrado) |  405 Acción no permitida.
DELETE | Delete |  200 (OK) ó 404 (No encontrado) |  405 Acción no permitida.
