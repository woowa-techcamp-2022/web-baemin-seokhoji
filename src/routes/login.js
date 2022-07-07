const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
	res.render('login', { title: 'Login', message: 'test message' });
});

module.exports = router;
