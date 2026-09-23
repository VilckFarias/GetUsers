const http = require('node:http');

http.createServer((request, response) =>
    {
        response.setHeader('Access-Control-Allow-Origin', '*')
        if (request.url !== '/users'){
            response.writeHead(
                404,
                {'content-type' : 'application/json'}
            );
            response.end(JSON.stringify({message: 'Não existente.'}));
            return;
        }
        response.writeHead(
            200,
            {'content-type':'application/json'}
        );
        response.end(JSON.stringify(
            [
                {
                    name: 'vilck farias',
                    email: 'vilck.ciriaco@gmail.com',
                }, {
                    name: 'antinomo',
                    email: 'vilck@gmail.com',
                }, {
                    name: 'farias',
                    email: 'fa@gmail.com',
                }
            ]));
    }

).listen(3000);