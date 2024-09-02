const express = require('express');
const router = express.Router();
const db = require('./db');

// Rota para criar um novo plano de viagem
router.post('/trips', (req, res) => {
  const { destination, startDate, endDate, budget } = req.body;
  const sql = 'INSERT INTO trips (destination, startDate, endDate, budget) VALUES (?, ?, ?, ?)';
  db.query(sql, [destination, startDate, endDate, budget], (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, ...req.body });
  });
});

// Rota para obter todos os planos de viagem
router.get('/trips', (req, res) => {
  db.query('SELECT * FROM trips', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Rota para editar um plano de viagem
router.put('/trips/:id', (req, res) => {
  const { destination, startDate, endDate, budget } = req.body;
  const sql = 'UPDATE trips SET destination = ?, startDate = ?, endDate = ?, budget = ? WHERE id = ?';
  db.query(sql, [destination, startDate, endDate, budget, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para deletar um plano de viagem
router.delete('/trips/:id', (req, res) => {
  db.query('DELETE FROM trips WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
