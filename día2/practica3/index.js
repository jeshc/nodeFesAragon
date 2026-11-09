const http = require('node:http'); // ES

const host = 'localhost';
const puerto = 3000;

// sever
const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end('Hola, ICO FES Aragón UNAM');

});


servidor.listen(puerto, host, () => {
    console.log(`Servidor en http://${host}:${puerto}`);
});
