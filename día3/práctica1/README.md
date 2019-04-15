# Introducción al framework Espress.js #
#### Qué es Express. ####

#### Llamadas síncronas y asíncronas. ####

1.- El hola mundo clásico y obligado.


```
//holamundo.js
var express = require("express");
var app = express();
app.get("/", function(request, response) {
  response.send("¡Hola mundo Express !");
});

app.listen(3000, function() {
  console.log("Servidor express iniciado, en el puerto 3000.");
});
```

![Screenshot](image1.PNG)

![Screenshot](image2.PNG)
