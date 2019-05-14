# API REST


REST es el acrónimo de Representational State Transfer, una arquitectura para el desarrollo de sistemas web sobre el protocolo HTTP. Esta tecnología fue propuesta por Roy Fielding (coautor de la especificación HTTP); el principal objetivo  es mejorar la portabilidad de información entre plataformas y facilitar la escalabilidad de los sistemas. La propuesta está centrada en la definición y estandarización de una interfaz uniforme diseñada para ser eficiente en la transferencia de datos hipermedia de granularidad amplia.
En cuanto al soporte http el REST establece que se deben realizar las 3 siguientes adecuaciones para desarrollar un sistema de este tipo:
1.	La correcta implementación de los métodos del protocolo HTTP  : OPTIONS, HEAD, GET, POST, PUT, DELETE. TRACE y CONNECT.
2.	Adecuada construcción de las URI (universal Resource Identifier) con la estructura definida en la especificacion estandar que consta de:
protocolo://host[:puerto]/recurso?parametro=valor&…
3.	La implementación de manejo de información de intercambio combinada con URI`s de referencia. Por ejemplo:
http://www.elgainternet.com/api/lectura/:id
{ "_id": "55380b5392ee91637901e3ed",
          "mac": "90:a2:da:0e:d6:00",
          "date": "2015-04-22 20:59:13",
          "percentage": 21,     "__v": 0,
	   “link”:”http://201.175.6.109:8080/lectura/55380b5392ee91637901e3ed”
	}
