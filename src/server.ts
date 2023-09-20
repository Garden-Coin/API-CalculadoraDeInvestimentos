import express from 'express'
import { port } from './config/server';

const app = express();

app.use(express.json());

app.listen(port, () => `server running on port ${port}`);

export default app;