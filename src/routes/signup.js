const { Router } = require('express');
const db = require('../utils/db');

const router = Router();

router.post('/', async (req, res) => {
	const body = req.body;

	const data = await db.read();

	console.log(db.read());

	res.render('detail', { email: null });
});

router.get('/agree', (_, res) => {
	res.render('agree', { title: 'Test', message: 'test message' });
});

router.get('/phone', (_, res) => {
	res.render('phone', { title: 'Test', message: 'test message' });
});

router.get('/detail', (req, res) => {
	res.render('detail', { email: null });
});

module.exports = router;
