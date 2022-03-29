// server.js
const jsonServer = require('json-server');
const db = require('./db/_db.js');
const customRoutes = require('./routes.js'); 
const customMiddleWares = require('./middlewares/_middlewares.js');

const dbData = db();
const server = jsonServer.create();
const router = jsonServer.router(dbData);
const middlewares = jsonServer.defaults();

server.use([...middlewares, ...customMiddleWares]);
server.use(jsonServer.rewriter(customRoutes));
server.use(router);
server.listen(3000, () => { console.log('json server running...')});