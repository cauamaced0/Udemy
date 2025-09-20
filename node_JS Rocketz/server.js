import express from 'express';
const server = express();
const port = 4200 ; 

server.get('/videos', (req, res)=>{
    return 'Hello word';

})

server.post()

server.listen(port, ()=>{
    console.log('Servidor rodando em http:\\localhost:4200');
})