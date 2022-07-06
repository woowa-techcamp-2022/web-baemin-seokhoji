import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	res.render('login', { title: 'Login', message: 'test message' });
});

export default router;
