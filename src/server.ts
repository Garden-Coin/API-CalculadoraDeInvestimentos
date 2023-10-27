import express from 'express';
import { port } from '@config/server';
import cors from 'cors';
import compression from 'compression';
import {rateLimit} from 'express-rate-limit';

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(rateLimit({
	windowMs: 1000,
	limit: 10,
	legacyHeaders: false
}));
app.listen(port, () => `server running on port ${port}`);

export default app;