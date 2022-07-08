exports.isLoggedIn = (req, res, next) => {
	if (req.session.nickname) {
		next();
	} else {
		res.redirect('/');
	}
};

exports.isNotLoggedIn = (req, res, next) => {
	console.log(req.session);
	if (!req.session.nickname) {
		next();
	} else {
		res.redirect('/');
	}
};
