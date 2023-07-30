const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar.js');
const { error } = require('console');
const argv = require('./config/yargs.js');

const colors = require('colors');

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(
    nombreArchivo.rainbow, 'creado')) 
  .catch(err => console.log(err));