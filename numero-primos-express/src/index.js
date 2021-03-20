let express = require('Express');
let app = express();
let routers = require('./app/router/routers');
const morganBody = require("morgan-body");

morganBody(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',routers)
/**
 * Error de parseo
 */
 app.use(function (err, req, res, next) {
   console.error("Error ", err.message);
   const errorDetails = {
     statusCode: 500,
     message: err.message,
     description: "Error desconocido. Favor intente más tarde...",
   };
   http.error(res, errorDetails);
 });

let serverInfo = {
   SERVICE: 'Prime number',
   STATUS: 'ok',
   MSG: 'Server Init',
   PORT: '3000',
   VERSION: 'v1',
   BASE_URL: '/'
};
console.table(serverInfo);
app.listen(3000);