const express = require('express')
const RoutEmpleados = express.Router()

//-------------------------------------------------------------------------------------|GET MAIN TODOS LOS EMPLEADOS
RoutEmpleados.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET UN EMPLEADO
RoutEmpleados.get('/:empleadoID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD WHERE EMP_ID = ? ',[req.params.empleadoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET TODOS LOS EMPLEADOS POR CIUDAD
RoutEmpleados.get('/ciudad/:ciudadID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD WHERE CIU_ID = ?',[req.params.ciudadID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET TODOS LOS EMPLEADOS POR ZONA
RoutEmpleados.get('/zona/:zonaID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD WHERE EMP_ZONA = ?',[req.params.zonaID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET TODOS LOS EMPLEADOS POR EQUIPO
RoutEmpleados.get('/integrantes-equipo/:equipoID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EMP_ID, EMP_CARGO, CAR_CARGO, EMP_CEDULA, EMP_NOMBRE, EMP_APELLIDO, EMP_CORREO, EMP_CELULAR, EMP_ACTIVO, EMP_CENTRO_DE_COSTE, EMP_COD_SAP, EMP_EQUIPO, EQU_EQUIPO, EQU_LIDER, EMP_ZONA, ZON_ZONA, EMP_CIUDAD, CIU_CIUDAD FROM empleado INNER JOIN cargo ON EMP_CARGO = CAR_ID INNER JOIN equipo ON EMP_EQUIPO = EQU_ID INNER JOIN zona ON ZON_ID = EMP_ZONA INNER JOIN ciudad ON CIU_ID = EMP_CIUDAD WHERE EMP_EQUIPO = ?',[req.params.equipoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|POST MAIN TO CREATE EMPLEADO
RoutEmpleados.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO empleado set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Empleado Registrado!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutEmpleados.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE empleado set ? WHERE EMP_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Empleado actualizado!")
        })
    })
})

module.exports = RoutEmpleados