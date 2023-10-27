import express from 'express';
import { port } from '@config/server';
import cors from 'cors';
import compression from 'compression';

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.listen(port, () => `server running on port ${port}`);

export default app;