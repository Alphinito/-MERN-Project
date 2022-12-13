const express = require('express')
const RoutZonas = express.Router()

//-------------------------------------------------------------------------------------|GET MAIN TODAS LAS ZONAS
RoutZonas.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM zona',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET UNA ZONA
RoutZonas.get('/:zonaID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM zona WHERE ZON_ID = ?',[req.params.zonaID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|POST MAIN TO CREATE EQUIPO
RoutZonas.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO zona set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Zona Registrada!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutZonas.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE zona set ? WHERE ZON_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Zona actualizada!")
        })
    })
})

module.exports = RoutZonas