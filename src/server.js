const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const morgan = require('morgan')
const path = require('path')
const RoutLogin = require('./routes/login')
const RoutFormVisitas = require('./routes/formVisitas')
const RoutRealVisitas = require('./routes/visitaReal')
const RoutClientes = require('./routes/clientes')
const RoutMotivo = require('./routes/motivos')
const RoutSeguimiento = require('./routes/seguimiento')
const RoutResultados = require('./routes/resultados')
const RoutRazones = require('./routes/razones')
const RoutCharts = require('./routes/charts')
const app = express()

app.set('port', process.env.port || 9000)//---------------|PUERTO DEL SERVER|
dbOptions = {//-------------------------------------------|CONEXIÓN A DB|
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'sales'
}

//--------------------------------------------------------|MIDDLEWARES|
app.use(myconn(mysql, dbOptions, 'single'))//-----|CONN DB|
app.use(express.json())//-------------------|CAN READ JSON|
app.use(morgan('dev'))//--------------|SEE DATA IN CONSOLE|

//--------------------------------------------------------|ROUTES|
//
app.use('/log', RoutLogin)//------------------------|Login|
app.use('/form-visitas', RoutFormVisitas)//---|FormVisitas|
app.use('/visitas-real', RoutRealVisitas)//--|visitas-real|
app.use('/clientes', RoutClientes)//-------------|Clientes|
app.use('/motivo', RoutMotivo)//------------------|Motivos|
app.use('/seguimiento', RoutSeguimiento)//----|Seguimiento|
app.use('/resultados', RoutResultados)//-------|resultados|
app.use('/razones', RoutRazones)//----------------|razones|
app.use('/charts', RoutCharts)//-------------------|Charts|

//--------------------------------------------------------|STATIC FILES|
app.use(express.static(path.join(__dirname, 'public')))

//--------------------------------------------------------|RUNING SERVER|
app.listen(app.get('port'), () => {
    console.log(`SERVER RUNING on port `,app.get('port'))
})