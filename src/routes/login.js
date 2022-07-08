const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
	const { error } = req.query;

	res.render('login', { error });
});

module.exports = router;
