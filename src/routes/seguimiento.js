const express = require('express')
const RoutSeguimiento = express.Router()

RoutSeguimiento.get('/list/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT VIS_ID, CLI_SAP, VIS_ESPECIALISTA, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, REA_FECHA, REA_HORA, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO  FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO WHERE VIS_ESPECIALISTA = ?',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//-------------------------------------------------------------------------------------|GET USER MAIN
RoutSeguimiento.get('/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT SEG_ID,SEG_VISITA ,SEG_RESULTADO ,SEG_RESULTADO_OTRO,SEG_RAZON ,SEG_RAZON_OTRO,SEG_OBSERVACION,RES_RESULTADO,RES_RAZON FROM seguimiento INNER JOIN resultado_razon ON RES_RAZ_ID = SEG_RAZON INNER JOIN resultado ON RES_ID = SEG_RESULTADO WHERE SEG_VISITA = ?',[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

RoutSeguimiento.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO seguimiento set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Seguimiento Registrado!")
        })
    })
})

RoutSeguimiento.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE visita set ? WHERE user_id = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Registro actualizado!")
        })
    })
})

module.exports = RoutSeguimiento