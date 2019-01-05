const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// adds route to get mesages from the db
const messages = require('./db/messages');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

// adds route to get mesages from the db
app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

// adds route for creating new messagesapp.post('/messages', (req, res) => {
app.post('/messages', (req, res) => {
  console.log(req.body);
  messages.create(req.body).then((message) => {
      res.json(message);
  }).catch((error) => {
      res.status(500);
      res.json(error);
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
