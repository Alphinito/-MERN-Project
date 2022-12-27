const express = require('express')
const RoutChartsWeb = express.Router()

//-----------------------------------------------------------------------------------------------------------|ALL FOR (1) NUM VISITAS|
//----------------------------------------------------------------------------------------------|MAIN Visitas|
RoutChartsWeb.get('/visitas-main', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT VIS_ID, CLI_ID, CLI_SAP, VIS_ESPECIALISTA, EMP_ID, EMP_NOMBRE, EMP_APELLIDO, EMP_EQUIPO, EMP_ZONA, EMP_CIUDAD, EMP_CARGO, EQU_ID, EQU_EQUIPO, EQU_LIDER, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_FECHA, VIS_REAL, VIS_CANCELADO, VIS_OBSERVACION, VIS_CLASE_CONTACTO, VIS_OBSERVACION, VIS_FECHA_CREACION, CLI_NOMBRE, MOT_MOTIVO, MOT_ID FROM visita INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA INNER JOIN equipo ON EMP_EQUIPO = EQU_ID WHERE EMP_ACTIVO = 1`,(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//----------------------------------------------------------------------------------------------|MAIN Visitas|
RoutChartsWeb.get('/visitas-reales-main', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT VIS_ID, CLI_ID, CLI_SAP, VIS_ESPECIALISTA, EMP_ID, EMP_NOMBRE, EMP_APELLIDO, EMP_EQUIPO, EMP_ZONA, EMP_CIUDAD, EMP_CARGO, EQU_ID, EQU_EQUIPO, EQU_LIDER, VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_FECHA, VIS_REAL, VIS_CANCELADO, VIS_OBSERVACION, VIS_CLASE_CONTACTO, REA_FECHA, REA_HORA, REA_DIRECTA, VIS_OBSERVACION, VIS_FECHA_CREACION, CLI_NOMBRE, MOT_MOTIVO, MOT_ID, REA_RESULTADO  FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA INNER JOIN equipo ON EMP_EQUIPO = EQU_ID WHERE EMP_ACTIVO = 1`,(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//---------------------------------------------------------------------------|Visitas Realizadas POR Empleado|
RoutChartsWeb.get('/num-visitas-reales-empleado/:empleadoID',(req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT REA_FECHA, EMP_EQUIPO FROM visita INNER JOIN real_visita ON VIS_ID = REA_VIS INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND VIS_ESPECIALISTA = ?`,[req.params.empleadoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//------------------------------------------------------------------------------------|GET VISITAS POR CIUDAD|
// RoutChartsWeb.get('/num-visitas-ciudad/:ciudadID',(req, res) =>{
//     req.getConnection((err, conn) => {
//         if(err) return res.send(err)

//         conn.query(`SELECT VIS_ID, CLI_ID, CLI_SAP, VIS_ESPECIALISTA, EMP_ID, EMP_NOMBRE, EMP_APELLIDO, EMP_EQUIPO, EMP_ZONA, EMP_CIUDAD, EMP_CARGO,VIS_CLIENTE, VIS_MOTIVO_CONTACTO, VIS_HORA_INICIO, VIS_HORA_FIN, VIS_FECHA, REA_FECHA, REA_HORA, VIS_OBSERVACION, CLI_NOMBRE, MOT_MOTIVO, MOT_ID, REA_RESULTADO FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID INNER JOIN cliente ON VIS_CLIENTE = CLI_ID INNER JOIN motivo_contacto ON MOT_ID = VIS_MOTIVO_CONTACTO INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND EMP_CIUDAD = ?`,[req.params.ciudadID],(err,rows) => {
//             if(err) return res.send(err)

//             res.json(rows)
//         })
//     })
// })
//------------------------------------------------------------------------------------|GET VISITAS POR CIUDAD|
RoutChartsWeb.get('/num-visitas-ciudad/:ciudadID',(req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT REA_FECHA FROM visita INNER JOIN real_visita ON VIS_ID = REA_VIS INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND EMP_CIUDAD = ?`,[req.params.ciudadID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//------------------------------------------------------------------------------------|GET VISITAS POR ZONA|
RoutChartsWeb.get('/num-visitas-zona/:zonaID',(req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT REA_FECHA FROM visita INNER JOIN real_visita ON VIS_ID = REA_VIS INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND EMP_ZONA = ?`,[req.params.zonaID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//------------------------------------------------------------------------------------|GET VISITAS POR EQUIPO|
RoutChartsWeb.get('/num-visitas-equipo/:equipoID',(req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT REA_FECHA, EMP_EQUIPO FROM visita INNER JOIN real_visita ON VIS_ID = REA_VIS INNER JOIN empleado ON EMP_ID = VIS_ESPECIALISTA WHERE VIS_REAL = 1 AND VIS_CANCELADO = 0 AND EMP_EQUIPO = ?`,[req.params.equipoID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/2/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID), REA_FECHA FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-1;`,[req.params.ID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET INSIGTHS GRAPHIC1 (VISITS IN 7 DAYS) / DAY TODAY
RoutChartsWeb.get('/graphic1/3/:ID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query(`SELECT COUNT(VIS_ID), REA_FECHA FROM visita INNER JOIN real_visita ON REA_VIS = VIS_ID WHERE VIS_REAL = 1 AND VIS_ESPECIALISTA = ? AND REA_FECHA = CURDATE()-2;`,[req.params.ID],(err,rows) => {
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