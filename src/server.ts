import express from 'express';
import { port, cors_origin } from '@config/server';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';

const app = express();

app.use(express.json());
app.use(compression());

app.use(cors({
	origin: cors_origin
}));
app.use(helmet.hidePoweredBy());
app.use(rateLimit({
	windowMs: 1000,
	limit: 10,
	legacyHeaders: false
}));

app.listen(port, () => `server running on port ${port}`);

export default app;