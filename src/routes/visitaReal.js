const express = require('express')
const RoutRealVisitas = express.Router()

//-------------------------------------------------------------------------------------|GET USER MAIN
RoutRealVisitas.get('/list-conSeg/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, CLI_SAP, VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, REA_FECHA, REA_HORA, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO  FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_ESPECIALISTA = ? AND REA_RESULTADO = 1 ORDER BY REA_FECHA DESC',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET USER SIN SEGUIMIENTO
RoutRealVisitas.get('/list-sinSeg/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, CLI_SAP, VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, REA_FECHA, REA_HORA, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO  FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_ESPECIALISTA = ? AND REA_RESULTADO = 0 ORDER BY REA_ID DESC',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET VIS_ID WHERE
RoutRealVisitas.get('/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID FROM visita WHERE VIS_ESPECIALISTA = ? ORDER BY VIS_ID DESC LIMIT 1',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//-------------------------------------------------------------------------------------|POST MAIN
RoutRealVisitas.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO real_visita set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Visita Registrada!")
        })
    })
})

//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutRealVisitas.put('/updateMAIN/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE real_visita set ? WHERE REA_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutRealVisitas.put('/updateFOCUS/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE real_visita set ? WHERE REA_VIS = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})


module.exports = RoutRealVisitas