### el archivo package.json ###

Todo proyecto node debe contar con un archivo especial con notación json que lo describa. Entre la información que debe contener este archivo esta:
- El nombre del proyecto
- Una descripción
- Versión
- Autor
- Información del repositorio CVS
- dependencias
- entre otros.

En ejemplo de este archivo es el siguiente:

```
{
  "name": "mi-proyecto",
  "version": "0.0.1",
  "description": "Un proyecto de ejemplo el cual escribe letras de colores",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jeshc",
  "license": "MIT",
  "dependencies":{
    "chalk":"2.4.2"
  }
}

```
