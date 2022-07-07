const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
	const { nickname } = req.session;

	res.render('index', { nickname });
});

module.exports = router;
