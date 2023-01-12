const express = require('express')
const RoutClientes = express.Router()

RoutClientes.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT TIP_TIPO, CLI_ID, CLI_SAP, CLI_NOMBRE, CLI_NIT, CLI_CIUDAD, CLI_ZONA, CLI_TIPO FROM cliente INNER JOIN tipos_cliente ON CLI_TIPO = TIP_ID',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

RoutClientes.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO visita set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Visita Registrada!")
        })
    })
})

RoutClientes.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE visita set ? WHERE user_id = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutClientes