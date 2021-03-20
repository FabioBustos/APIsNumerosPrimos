let express = require('express');
const { Router } = require('express')
const router = Router()
const routes = [];
const primeController = require('../controllers/prime.controller')
const primeValidator = require('../validators/prime.validato')

router.get('/health', (req, res) => {
    res.json({ message: 'Serivce is running!' });
});
router.get('/primos/:id',  primeValidator.validate , primeController.getPrimeController );

/**
 * Error si el path no es conocido
 */
 router.all("*", function (req, res) {
    error = {
      message: "Path no existe",
      statusCode: "404",
    };
    http.error(res, error);
  });

/**
 * Muestra de las distintas rutas creadas
 */
 console.log("********* Routes Avaibles ***********");
 router.stack.forEach(middleware => {
     if (middleware.route) {
         let route = {};
         route.method = Object.keys(middleware.route.methods);
         route.path =  middleware.route.path
         routes.push(route);
     }
 });
 console.table(routes);
//export this router to use in our index.js
module.exports = router;