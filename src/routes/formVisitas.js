const express = require('express')
const RoutFormVisitas = express.Router()

//-------------------------------------------------------------------------------------|GET LIST WHERE SOLO USUARIO
RoutFormVisitas.get('/list/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, CLI_SAP,VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_FECHA, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO FROM visita INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_REAL = 0 AND VIS_ESPECIALISTA = ? ORDER BY VIS_ID DESC',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET LIST WHERE TODAS PLAN
RoutFormVisitas.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_FECHA, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO FROM visita INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_REAL = 0 ORDER BY VIS_ID DESC',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET ID (PLAN) TO CREATE REAL
RoutFormVisitas.get('/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID FROM visita WHERE VIS_ESPECIALISTA = ? ORDER BY VIS_ID DESC LIMIT 1',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET HOY REGISTERS
RoutFormVisitas.get('/today/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT COUNT(VIS_ID) FROM visita WHERE VIS_FECHA = CURDATE() AND VIS_ESPECIALISTA = ? AND VIS_REAL = 0',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET MA??ANA REGISTERS
RoutFormVisitas.get('/tomorrow/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT COUNT(VIS_ID) FROM visita WHERE VIS_FECHA = DATE_SUB(CURDATE(), INTERVAL -1 DAY) AND VIS_ESPECIALISTA = ? AND VIS_REAL = 0',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET MA??ANA REGISTERS
RoutFormVisitas.get('/list/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, CLI_SAP,VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_FECHA, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO FROM visita INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_REAL = 0 AND VIS_ESPECIALISTA = ? ORDER BY VIS_ID DESC',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|POST MAIN TO CREATE PLAN
RoutFormVisitas.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO visita set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Visita Registrada!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutFormVisitas.put('/updateMAIN/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE visita set ? WHERE VIS_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutFormVisitas