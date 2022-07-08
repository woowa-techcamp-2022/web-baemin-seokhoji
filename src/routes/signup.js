const { Router } = require('express');
const bcrypt = require('bcrypt');

const db = require('../utils/db');

const router = Router();

const HASH_SALT = 13;

router.post('/', async (req, res) => {
	const { email, password } = req.body;

	const exUser = await db.get('user').find({ email }).value();

	if (exUser) return res.redirect('/signup/detail?error=이미 사용중인 이메일입니다!');

	const hashedPassword = await bcrypt.hash(password, HASH_SALT);

	const user = {
		...req.body,
		password: hashedPassword,
	};

	db.get('user').push(user).write();

	return res.redirect(302, '/');
});

router.get('/agree', (_, res) => {
	res.render('agree');
});

router.get('/phone', (_, res) => {
	res.render('phone');
});

router.get('/detail', async (req, res) => {
	const { error } = req.query;

	res.render('detail', { error });
});

module.exports = router;
