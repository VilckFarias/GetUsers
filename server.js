const http = require('node:http');

http.createServer((request, response) =>
    {
        response.writeHead(200), {'content-type':'application/json'};
        response.end(JSON.stringify(
            {
                name: 'vilck farias',
                email: 'vilck.ciriaco@gmail.com',
            }));
    }

).listen(3000);