const http = require('http');
const { request } = require('https');

const servidor = http.createServer((req, res)=>{
    //proceso


    res.end('hola mundo');//para pasar resultado al servidor postproceso
});

servidor.listen(3000, ()=>{
    console.log('el servidor esta escuchando...')
});
