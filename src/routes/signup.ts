import { Router } from 'express';

const router = Router();

router.get('/agree', (_, res) => {
	res.render('agree', { title: 'Test', message: 'test message' });
});

router.get('/phone', (_, res) => {
	res.render('phone', { title: 'Test', message: 'test message' });
});

router.get('/detail', (_, res) => {
	res.render('detail', { title: 'Test', message: 'test message' });
});

export default router;
