const express = require('express')
const RoutChartsWeb = express.Router()

//-----------------------------------------------------------------------------------------------------------|ALL FOR (1) NUM VISITAS|
//-----------------------------------------------------------------------------------|MAIN Visitas Realizadas|
RoutChartsWeb.get('/num-visitas-reales-main', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT * FROM vista WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0`,(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-----------------------------------------------------------------------------------|Visitas Realizadas|
RoutChartsWeb.get('/num-visitas-reales-main', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT * FROM vista WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0`,(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//---------------------------------------------------------------------------|Visitas Realizadas POR Empleado|
RoutChartsWeb.get('/num-visitas-reales-empleado/:empleadoID',(req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT * FROM vista WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND VIS_ESPECIALISTA = ?`,[req.params.empleadoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/2/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-1;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/3/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-2;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/4/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-3;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/5/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-4;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/6/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-5;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/7/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID) FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-6;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})



module.exports = RoutChartsWeb