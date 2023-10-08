import { Router, Request, Response } from 'express';

const router = Router();

router.get('/',
	(_: Request, res: Response) => {
		res.status(200).json({
			'status': 200
		});
	}
);

module.exports = router;