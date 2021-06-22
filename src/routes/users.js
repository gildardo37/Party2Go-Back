  
const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/users', (req, res) => {
  mysqlConnection.query(`select * from usuarios as u join direcciones as d on d.idDirecciones = u.fkDireccion`, (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } 
    else {
      console.log(err);
    }
  });  
});

module.exports = router;