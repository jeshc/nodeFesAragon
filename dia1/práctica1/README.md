# Consola Node Js
### Usar una consola Linux, si estas usando Windows, emplea la consola ``` Git Bash ``` que proporciona la inctalación del cliente ```git ```
Accedemos al ambiente virtual REPL(read–eval–print–loop) tipo python, ruby. Es un entorno sobre el shell de comandos para la ejecucción de código javascript soporta un tipo simplificado de Emacs con un conjunto pequeño de comandos. El codigo ejecutado en el REPL se comportara de la misma forma que ejecutarlo directamente desde un archivo con extensión js ```node archivo.js ``` .

```
*supports a simplified Emacs style of line editing and a
small set of basic commands. Whatever you type into REPL is processed no differently
than if you had typed the JavaScript into a file and run the file using Node. You can
actually use REPL to code your entire application—literally testing the application on
the fly. *
```
1.- Iniciar la consola REPL de node Js

![Screenshot](image1.jpeg)

2.- Escribir clásico hola mundo

![Screenshot](image2.jpg)

3.- Desplegar la ayuda con ``` .help ```

![Screenshot](image3.png)

4.- Guardar los comandos de la sesion actual con ``` .save [nombre archivo].js ```

![Screenshot](image4.jpg)

5.- Cargar el archivo y ejecutarlo ``` .load [nombre archivo].js  ```

![Screenshot](image5.png)

6.- Salirse con ```.exit ```

![Screenshot](image6.png)

7.- Mostrar el contenido

![Screenshot](image7.png)

8.- Ejecuta el archivo desde el prompt

![Screenshot](image8.png)

9.- Modifica el archivo para que tenga el siguiente contenido:

![Screenshot](image9.png)

10.- Entra a la consola ``` $node ``` y carga el archivo ``` >.load uno.js ```

![Screenshot](image10.png)

### Tipos de datos primitivos en nodejs

* String -> Cadenas de caracteres
* Number  -> Para tipos numéricos enteros y reales.
* Boolean -> Para los valores true y false
* Undefined -> Objeto no definido
* Null -> Identificador para nulo
* RegExp -> Uso de expresiones regulares sobre texto


#### Strings ####

11.- Uso de Strings. Captura el siguiente código en un archivo con nombre ``` strings.js ```
```
// se pueden declarar usando doble comilla ""
var facultad = "FES Aragón UNAM";
// o comillas simples ''
var carrera = 'Ingeniería en Computación';
// concatena cadena con el operador sobrecargado  +
facultad + " - " + carrera

```

Ejecutar el archivo desde la consola.

![Screenshot](image11.png)

12.- Sin cerrar la consola ejecutar ``` > carrera.length ```

![Screenshot](image12.png)

#### Number ####
var edad=19;


#### Boolean ####
var flag=true;
flag= false;
if(flag){
  // Haz algo
}

#### Undefined ####
Cuando un identificador no ha sido asignado a un valor o cuando una expresión no regresa un valor.

```
var edad;
console.log(edad);
```

#### Null ####
POr otra parte null debe ser asignada a una variable para representar de forma explicita la ausencia de valor o una referencia inexistente(objetos).
```
var nombre=null;
console.log(edad);
```

#### RegExp ####

Expresiones regulares
Las expresiones regulares se usan para la búsqueda de coincidencias en una cadena de texto por medio de un patrón.
Una expresión regular debe ser definida entre dos diagonales
```
var str = "Esto es un texto muy largo?";
  var patron = /[t]/g;
  var resultado = str.match(patron);
  console.log(resultado);


var t=str.replace(/to/g,"TA");
console.log(t);
console.log(str);

```   


![Screenshot](image13.PNG)

## Arreglos ##
Un arreglo es una colección de valores organizados consecutivamente en memoria, los cuales se diferencian entre sí por medio de un índice de posición dentro del mismo.

```
//frutas.js
var frutas=[];
frutas[0]="Manzana";
frutas[1]="Pera";
frutas[2]="Melón";
frutas[3]="Fresa";

console.log(frutas);
frutas.push("Sandia");
console.log(frutas);
frutas.pop();
console.log(frutas);
```
Una declaración e inicialización equivalente sería:
```
//frutas2.js
var frutas=["Manzana","Pera","Melón","Fresa"];
console.log(frutas);
frutas.push("Sandia");
console.log(frutas);
frutas.pop();
console.log(frutas);
```

#### Arreglos multidimencionales ####

```
//dbs.js
var relacionales=["Mysql","PostgreSQL","Oracle","MS SQL Server"];
var noRelacionales=["mongo","CouchDB","Cassandra"];
var databases=[relacionales,noRelacionales];
console.log(databases);
console.log(databases[0][1]);
```



#### Métodos mas usados de los arreglos ####


** forEach ** .-el método ```forEach ``` es un método que permite iterar sobre el arreglo.

```
//frutas3.js
var frutas=["Manzana","Pera","Melón","Fresa"];
console.log(frutas);
frutas.push("Sandia");
console.log(frutas);
frutas.pop();
console.log(frutas);

frutas.forEach(function(valor){
 console.log(valor);
});
```
** concat ** .- Concatenar cadenas.
```
//frutas4.js  
var frutas=["Manzana","Pera","Melón","Fresa"];
var otrasFrutas=["Piña","plátano","ciruela"];
frutas.concat(otrasFrutas);
 ```


 ![Screenshot](image15.PNG)

** includes ** .- Verificar si un elemento está detro del arreglo.

 ![Screenshot](image16.PNG)


 ** indexOf ** .- Regresa el índice de un elemento

![Screenshot](image17.PNG)


 ** sclice(starts, ends) ** .- regresa un segmento del arreglo, incluye el inicio pero no el elemento end



![Screenshot](image18.PNG)

 *continua...*

## Notación JSON ##
JSON es el acrónimo de JavaScript Object Notation, Notación de objetos JavaScript. Es un lenguaje de datos independiente del lenguaje de programación.

JSON es una colección de pares llave-valor, los cuales pueden ser anidados.

En la siguiente imagen (fuente json.org) resume la notación JSON, una llave que es de tipo string y un valor. Donde el valor puede ser otro objeto JSON.

![alt text](https://www.json.org/object.gif "https://www.json.org")

La siguiente declaración es la expresión mínima de un objeto JSON.

```
var obj= {"nombre":"Mario"};
console.log(obj);

```
Pero también podría ser así:
```
var obj={"nombre":{
                    "primerNombre":"Mario",
                    "segundoNombre":null,
                    "apellidoPaterno":"Pérez",
                    "apellidoMaterno":"García"
                  }
        }
console.log(obj);
```
![Screenshot](image14.PNG)

Los nombres de las llaves deben ir entre comillas dobles en la declaración.
El valor puede obtener alguno de los siguientes casos:

1. Un String.
2. Un Number
3. Un Objeto (puede ser otro JSON)
4. Un arreglo
5. Un valor Boolean
6. Null

Un ejemplo:

```
//cliente.js
var cliente={
  "numCliente": 1234,
  "nombre":{
            "primerNombre":"Mario",
            "segundoNombre":null,
            "apellidoPaterno":"Pérez",
            "apellidoMaterno":"García"
          },
  "telefonos":["04455-2345-2344","55-3987-3432","(721)33221212"],
  "dirección":{
                "calle":"Bosques de Africa",
                "numeroExt":"23-B",
                "colonia":"Bosques de Aragón",
                "cp":57127
              },
   "activo":true,
   "balance":231521.89,
   "prestamos":null
}
```

![Screenshot](image19.PNG)

http://www.ecma-international.org/ecma-262/9.0/index.html#sec-json-object




24.5.2JSON.stringify ( value [ , replacer [ , space ] ] )
The stringify function returns a String in UTF-16 encoded JSON format representing an ECMAScript value. It can take three parameters. The value parameter is an ECMAScript value, which is usually an object or array, although it can also be a String, Boolean, Number or null. The optional replacer parameter is either a function that alters the way objects and arrays are stringified, or an array of Strings and Numbers that acts as an inclusion list for selecting the object properties that will be stringified. The optional space parameter is a String or Number that allows the result to have white space injected into it to improve human readability.

![Screenshot](image20.PNG)

24.5.1JSON.parse ( text [ , reviver ] )
The parse function parses a JSON text (a JSON-formatted String) and produces an ECMAScript value. The JSON format represents literals, arrays, and objects with a syntax similar to the syntax for ECMAScript literals, Array Initializers, and Object Initializers. After parsing, JSON objects are realized as ECMAScript objects. JSON arrays are realized as ECMAScript Array instances. JSON strings, numbers, booleans, and null are realized as ECMAScript Strings, Numbers, Booleans, and null.

![Screenshot](image21.PNG)

Objetos JSON con funciones


```
//cliente2.js
var cliente={
  "numCliente": 1234,
  "nombre":{
            "primerNombre":"Mario",
            "segundoNombre":null,
            "apellidoPaterno":"Pérez",
            "apellidoMaterno":"García"
          },
  "telefonos":["04455-2345-2344","55-3987-3432","(721)33221212"],
  "dirección":{
                "calle":"Bosques de Africa",
                "numeroExt":"23-B",
                "colonia":"Bosques de Aragón",
                "cp":57127
              },
   "activo":true,
   "balance":231521.89,
   "prestamos":null,
   "retiro":function (val) {
     this.balance-=val;
     console.log(this.balance);
   }
}
```

![Screenshot](image22.PNG)
