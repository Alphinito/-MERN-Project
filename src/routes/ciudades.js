const express = require('express')
const RoutCiudades = express.Router()

//-------------------------------------------------------------------------------------|GET MAIN TODAS LAS CIUDADES
RoutCiudades.get('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM ciudad',(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|GET UNA CIUDAD
RoutCiudades.get('/:ciudadID', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM ciudad WHERE CIU_ID = ?',[req.params.ciudadID],(err,rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
//-------------------------------------------------------------------------------------|POST MAIN TO CREATE CIUDAD
RoutCiudades.post('/', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO ciudad set ?', [req.body],(err) => {
            if(err) return res.send(err)

            res.send("Ciudad Registrada!")
        })
    })
})
//-------------------------------------------------------------------------------------|UPDATE MAIN
RoutCiudades.put('/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE ciudad set ? WHERE CIU_ID = ?', [req.body, req.params.id],(err) => {
            if(err) return res.send(err)

            res.send("Ciudad actualizada!")
        })
    })
})

module.exports = RoutCiudades