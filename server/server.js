import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';

// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const connect = require('./database/connection.js');
const app = express();

// Middleware

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 5000;

// HTTP get request
app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});

// API routes
app.use('/api', router);

// Start Server only when we have valid connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Run server on Port No : ${port}`);
      });
    } catch (error) {
      console.log('Cannot connect to the server');
    }
  })
  .catch(err => {
    console.log('Invalid Database Connection');
  });
