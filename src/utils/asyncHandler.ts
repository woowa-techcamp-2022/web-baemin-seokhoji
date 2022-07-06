import { Request, Response, NextFunction } from 'express';

const asyncHandler = (handler: any) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await handler(req, res, next);
		} catch (e) {
			next(e);
		}
	};
};
export default asyncHandler;
