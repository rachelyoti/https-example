# https-example

example express https server

`git clone` `npm i` `npm i --save express`

then `cd server` `mkdir ssl` cd in to ssl

`openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt`

cd in to server, `node index.js`
