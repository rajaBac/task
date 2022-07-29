import express from 'express';
import routes from '../routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
import http from 'http';
const server = http.createServer(app);

// mount assets folder on / path
// app.use('/node', express.static(path.resolve(__dirname, '../../node/')));

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '500kb' }));

app.use(cookieParser());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/node/api/task', routes);

// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  res.status(err.statusCode).json({
    message: err.message
  });
});

export default server;
