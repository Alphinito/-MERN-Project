const express = require('express')
const RoutLogin = express.Router()

RoutLogin.get('/web/:us/:cl', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD WHERE EMP_CEDULA = ? AND EMP_CLAVE = ?', [req.params.us, req.params.cl],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

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