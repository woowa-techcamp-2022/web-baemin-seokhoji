import App from './app';

const app = new App().app;

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
