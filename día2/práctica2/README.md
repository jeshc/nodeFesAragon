### el archivo package.json

Todo proyecto node debe contar con un archivo especial con notación json que lo describa. Entre la información que debe contener este archivo esta:

- El nombre del proyecto.
- Una descripción del mismo.
- Versión.
- Autor.
- Información del repositorio CVS.
- dependencias.
- entre otros.

Este archivo es empleado por la herramienta NPM para instalar dependencias de forma automatizada, ejecutar las pruebas, ejecutar la aplicación, entre otras. Para comprende el uso de este archivo hagamos el siguiente:

1. Ejercicio.

  - Crear una carpeta de nombre *mi-proyecto *
  - Entrar a la nueva carpeta y crear el archivo **package.json**
  - Editar el archivo **package.json** para contener el siguieten código:

    ```
    {
      "name": "mi-proyecto",
      "version": "0.0.1",
      "description": "Un proyecto de ejemplo el cual escribe letras de colores",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start":"env FORCE_COLOR=1 node index.js"
      },
      "author": "jeshc",
      "license": "MIT",
      "dependencies": {
        "chalk": "2.3.x"
      }
    }

    ```
      Cómo se puede observar ademas de la información básica del proyecto, contamos con dos secciones importantes: ```scripts``` y ```dependencies```. Scripts establece los comandos a ejecutar cuando por ejemplo deseamos ejecutar elproyecto y la sección dependencias lo emplea NPM para instalar las dependencias de forma automatizada.



2. Este archivo permitirá a la herramienta NPM realizar actividades automatizadas para el proyecto, como por ejemplo instalarlo, para ello se emplea el comando ``` npm install ```

  ![Screenshot](image1.PNG)

Cómo se muestra en la imagen se instalan 7 paquetes, producto de la sección ``` dependencies  ```, que consta de la inclusión del paquete chalk.

  ```
  "dependencies": {
    "chalk": "2.3.x"
  }
   ```
3. Podemos observar el contenido de la nueva carpeta *node_modules*

 ![Screenshot](image2.PNG)


4. Puedes revisar los paquetes instalados para este proyecto con ``` npm list ```

  ![Screenshot](image3.PNG)

5. Una vez instaladas las dependencias creamos el archivo principal index.js  y agregamos el siguiente código:
       ```
       const gis = require('chalk');
       var asciify= require('asciify');

           function pinta(letra, index) {
             gis.enabled=true;
             switch (index) {
               case 0:
                 process.stdout.write(gis.black.bgBlackBright(letra));
                 break;
               case 1:
                 process.stdout.write(gis.red(letra));
                 break;
               case 2:
                 process.stdout.write(gis.green(letra));
                 break;
               case 3:
                 process.stdout.write(gis.yellow(letra));
                 break;
               case 4:
                 process.stdout.write(gis.blue(letra));
                 break;
               case 5:
                 process.stdout.write(gis.magenta(letra));
                 break;
               case 6:
                 process.stdout.write(gis.cyan(letra));
                 break;
               case 7:
                 process.stdout.write(gis.white(letra));
                 break;
               case 8:
                 process.stdout.write(gis.gray(letra));
                 break;
               case 9:
                 process.stdout.write(gis.redBright(letra));
                 break;
               case 10:
                 process.stdout.write(gis.yellowBright(letra));
                 break;
               case 11:
                 process.stdout.write(gis.blueBright(letra));
                 break;
               case 12:
                 process.stdout.write(gis.magentaBright(letra));
                 break;
               case 13:
                 process.stdout.write(gis.cyanBright(letra));
                 break;
               case 14:
                 process.stdout.write(gis.whiteBright(letra));
                 break;
               case 15:
                 process.stdout.write(gis.greenBright(letra));
                 break;
               default:
                 process.stdout.write(gis.red(letra));
             }
           }

           function main() {

             var texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

             var j = 0;

             for (j = 0; j < texto.length; j++) {
               //console.log(texto.charAt(j));
               pinta(texto.charAt(j), j % 16);
             }
             console.log();

           }

           main();

           ```




6. ejecutar el proyecto con el comando ``` npm start ``` lo cual ejecutara la sección scripts -> start del archivo package.json:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start":"env FORCE_COLOR=1 node index.js"
}
```

y producirá el siguiente resultado:

  ![Screenshot](image4.PNG)

Como se puede observar el script *start* tiene configurado la ejecución ``` node index.js ```, cuya lógica puedes explorar abriendo el archivo.

También es posible establecer variables de entorno de sistema operativo, para el correcto funcionamiento del proyecto: ``` env FORCE_COLOR=1  ```.

5. Te invito a eliminar esta sección ```env FORCE_COLOR=1 ``` del script start y volver a ajecutar ``` npm start ```

### Documentación de la seccion Scripts


Según la documentación oficial de NPM los scripts aceptados son:

```
prepublish: Run BEFORE the package is packed and published, as well as on local npm install without any arguments. (See below)
prepare: Run both BEFORE the package is packed and published, on local npm install without any arguments, and when installing git dependencies (See below). This is run AFTER prepublish, but BEFORE prepublishOnly.
prepublishOnly: Run BEFORE the package is prepared and packed, ONLY on npm publish. (See below.)
prepack: run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git dependencies)
postpack: Run AFTER the tarball has been generated and moved to its final destination.
publish, postpublish: Run AFTER the package is published.
preinstall: Run BEFORE the package is installed
install, postinstall: Run AFTER the package is installed.
preuninstall, uninstall: Run BEFORE the package is uninstalled.
postuninstall: Run AFTER the package is uninstalled.
preversion: Run BEFORE bumping the package version.
version: Run AFTER bumping the package version, but BEFORE commit.
postversion: Run AFTER bumping the package version, and AFTER commit.
pretest, test, posttest: Run by the npm test command.
prestop, stop, poststop: Run by the npm stop command.
prestart, start, poststart: Run by the npm start command.
prerestart, restart, postrestart: Run by the npm restart command. Note: npm restart will run the stop and start scripts if no restart script is provided.
preshrinkwrap, shrinkwrap, postshrinkwrap: Run by the npm shrinkwrap command.
```

#### Ejercicio:

- Agregar la dependencia ``` "asciify":"asciify" ```
- Instala las dependencias
- Importar la biblioteca con ``` require ... ``` el código fuente del proyecto.
- Codifica lo siguiente al final del mismo:

```
asciify('IS_ ICO!', {color: 'green'}, function (err, result) {
	console.log('\nFES Aragón, UNAM!\n' + result);
});
```

- Ejecuta el proyecto nuevamente.

  ![Screenshot](image5.PNG)


### npm init


 Es el comando para inicializar un proyecto, por medio de un asistente en la consola shell.

6. Crea un nuevo proyecto de nombre ejemplo2 con el comando ``` npm init ```

  - Crea la carpeta ejemplo2
  - Entra a la carpeta y ejecuta ``` npm init ```
  - Sigue las instrucciones en pantalla.
  - Agrega la dependencia ``` chalk-animation  ``` en la versión 1.6.0.
  - El archivo principal debe ser index.js (por defecto).
  - Verifica que el archivo ```package.json```sea equivalente a .

      ```
        {
          "name": "ejemplo2",
          "version": "1.0.0",
          "description": "ejemplo 2 para la clase",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "env FORCE_COLOR=1 node index.js"
          },
          "author": "jesh",
          "license": "MIT",
          "dependencies": {
            "chalk-animation": "1.6.0"
          }
        }
      ```

  - El código para ``` index.js ``` es:

    ```
    const chalkAnimation = require('chalk-animation');

    chalkAnimation.rainbow('ICO FES Aragón UNAM'); // pulse, glitch, radar, meon, karaoke
    setTimeout(() => {
        console.log('fin');
    }, 5000);

    ```

  - Ejecuta ```npm install```  y   ``` npm start ```para observar una animación de de colores.

## Otros comandos NPM

#### npm install --save
Instala el paquete de forma local y agrega las dependecias al archivo ```package.json```

7. Al  ejercicio anterior agregar el paquete ``` asciify ``` que es un paquete para crear banners con caracteres ASCII.

   ![Screenshot](image9.PNG)


#### npm install --save-de

Lo mismo que la anterior pero solo para desarrollo. No se incluyen en producción.


#### npm install -g <nombre_paquete>
Le indica a NPM que instale el paquete de forma global.

#### npm uninstall <nombre_paquete>
Elimina de forma local el paquete. Para eliminar de forma global agregar el argumento **-g**.

#### npm update -save
Actualiza los paquetes a sus versiones mas actuales. Modifica el archivo package.json si es necesario.



# paquete request

El paquete request de Node.js es un cliente HTTP simple.

La siguiente imagen muestra la información básica del paquete en la página de npmjs.com.


  ![Screenshot](image6.PNG)

  8. Vámos a usar este paquete para iniciar nuestro camino al consumo de un REST.
    - Crear la carpeta *miRequest*.
    - Entramos a la carpeta e inicializamos un proyecto con ``` npm init ```
    - Agrega la dependencia ``` request ```
    - Agrega el script ``` "start": "node index.js" ```
    - Crea el archivo index.js y copia el siguiente código:

      ```
        // index.js -> código original de la página oficial de request en npmjs.com
        var request = require('request');
        request('http://www.google.com', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
        });

      ```

    - Ejecuta el proyecto con npm start .

    - Resultado esperado:

      ![Screenshot](image7.PNG)

    - Modifica el código para solicitar información del API REST de ejemplo: *http://aragonapi.herokuapp.com/api/users/1*
    - Resultado esperado:

      ![Screenshot](image8.PNG)

    - Ahora solicita la infromación del pokemon pikachu a la pokeapi.
    https://pokeapi.co/api/v2/pokemon/pikachu/
    - muestra las habilidades de pikachu.


# Un servidor Web con Node JS
    En esta sección vamos a crear nuestro primer servidor web usando el paquete http.
