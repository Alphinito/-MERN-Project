const express = require('express')
const RoutLogin = express.Router()

RoutLogin.get('/:us/:cl', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM EMPLEADO WHERE EMP_CEDULA = ? AND EMP_CLAVE = ?', [req.params.us, req.params.cl],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

RoutLogin.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO users set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Empleado registrado!")
        })
    })
})

RoutLogin.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE users set ? WHERE user_id = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutLogin