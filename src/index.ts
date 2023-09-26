import app from './server';

app.use('/health-check', require('./routes/health-check'));
app.use('/simulacao', require('./routes/simulacao'));
app.use(require('./middlewares/error-handling'));