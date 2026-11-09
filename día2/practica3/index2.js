
const http = require('node:http');

const host = 'localhost';
const puerto = 3000;

const servidor = http.createServer((req, res) => {

    console.log(`Petición: ${req.method} ${req.url}`);

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Bienvenido a mi servidor Web 2 ICO FESA</h1>');

    } else if (req.method === 'GET' && req.url === '/saludo') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end('Saludos desde FES Aragón');

    } else if (req.method === 'GET' && req.url === '/api/alumnos') {
        const alumnos = [
            { id: 1, nombre: 'Ana' },
            { id: 2, nombre: 'Luis' },
            { id: 3, nombre: 'María' }
        ];

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(alumnos));

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end('404 - Recurso no encontrado');
    }

});

servidor.listen(puerto, host, () => {
    console.log(`Servidor en http://${host}:${puerto}`);
});

