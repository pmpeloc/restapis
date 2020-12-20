const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Evitar advertencias deprecated
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// crear el servidor
const app = express();

// habilitar el bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// rutas de la app
app.use('/', routes());

// puerto
app.listen(5000);