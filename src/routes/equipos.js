const express = require('express')
const RoutEquipos = express.Router()

//-------------------------------------------------------------------------------------|GET MAIN TODOS LOS EQUIPOS
RoutEquipos.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EQU_ID,EQU_EQUIPO,EQU_LIDER,EMP_NOMBRE FROM equipo INNER JOIN empleado ON EQU_LIDER = EMP_ID',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET UN EQUIPO
RoutEquipos.get('/:equipoID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT EQU_ID,EQU_EQUIPO,EQU_LIDER,EMP_NOMBRE FROM equipo INNER JOIN empleado ON EQU_LIDER = EMP_ID WHERE EQU_ID = ?',[req.params.equipoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|POST MAIN TO CREATE EQUIPO
RoutEquipos.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO equipo set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Equipo Registrado!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutEquipos.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE equipo set ? WHERE EQU_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutEquipos