import app from './server';

app.use('/health-check', require('./routes/health-check'));