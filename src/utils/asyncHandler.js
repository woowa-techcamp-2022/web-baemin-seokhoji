const asyncHandler = (handler) => {
	return async (req, res, next) => {
		try {
			await handler(req, res, next);
		} catch (e) {
			next(e);
		}
	};
};
module.exports = asyncHandler;
