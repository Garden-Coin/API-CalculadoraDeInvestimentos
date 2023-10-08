/* eslint-disable @typescript-eslint/no-var-requires */
import app from './server';

import { errorHandling } from './middlewares/error-handling';

app.use('/health-check', require('./routes/health-check'));
app.use('/simulacao', require('./routes/simulacao'));
app.use(errorHandling);