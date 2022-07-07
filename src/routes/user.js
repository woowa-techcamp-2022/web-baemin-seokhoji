const { Router } = require('express');
const bcrypt = require('bcrypt');
const db = require('../utils/db');
const asyncHandler = require('../utils/asyncHandler');
const { isNotLoggedIn, isLoggedIn } = require('../middleware/loginMiddleware');

const router = Router();

router.post(
	'/login',
	isNotLoggedIn,
	asyncHandler(async (req, res, next) => {
		const { email, password } = req.body;

		const exUser = await db.get('user').find({ email }).value();

		if (!exUser) return res.redirect('/login?error=존재하지 않는 아이디입니다!');

		const comparePassword = await bcrypt.compare(password, exUser.password);

		if (!comparePassword) return res.redirect('/login?error=비밀번호가 틀립니다!');

		req.session.nickname = exUser.nickname;

		await req.session.save();

		return res.redirect(302, '/');
	}),
);

router.get(
	'/logout',
	isLoggedIn,
	asyncHandler(async (req, res, next) => {
		await req.session.destroy();

		res.redirect(302, '/');
	}),
);

module.exports = router;
