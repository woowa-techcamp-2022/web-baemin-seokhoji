import express from 'express';
import path from 'path';

class App {
	app: express.Application;

	constructor() {
		this.app = express();

		this.init();
		this.router();
	}

	private init() {
		this.app.use('/static', express.static(path.join(__dirname, '../public')));
		this.app.set('views', __dirname + '/views');
		this.app.set('view engine', 'pug');
	}

	private router() {
		this.app.get('/', (_, res) => {
			res.render('index', { title: 'Test', message: 'test message' });
		});
	}
}

export default App;
