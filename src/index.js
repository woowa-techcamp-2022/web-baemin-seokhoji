const app = require('./app');

const port = parseInt(process.env.PORT || 3000, 10);

console.log(port);

app.listen(port, () => {
	console.log('실행');
});
