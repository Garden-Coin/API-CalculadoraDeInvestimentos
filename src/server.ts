import express from 'express';
import { port } from '@config/server';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.listen(port, () => `server running on port ${port}`);

export default app;