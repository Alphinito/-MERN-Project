const express = require('express')
const RoutMotivo = express.Router()

RoutMotivo.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM motivo_contacto',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

RoutMotivo.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO visita set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Visita Registrada!")
        })
    })
})

RoutMotivo.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE visita set ? WHERE user_id = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutMotivo