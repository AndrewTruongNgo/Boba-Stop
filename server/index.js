const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config(path.join(__dirname, '/../.env'));
const controller = require('../database');

const accountSID = process.env.accountSID;
const authToken = process.env.authToken;
const twilioClient = require('twilio')(accountSID, authToken);

const DIST_DIR = path.join(__dirname, '../client/dist/');

const app = express();
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(DIST_DIR);
});

app.get('/store-list', (req, res) => {
  controller.findAllStores((error, results) => {
    if (error) {
      console.error('ERROR findAllStores query failed', error);
    } else {
      res.send(results);
    }
  });
});

app.get('/stores/:id', (req, res) => {
  controller.findStore(req.params.id, (error, results) => {
    if (error) {
      console.error('ERROR findStore query failed');
    } else {
      res.send(results);
    }
  });
});

app.get('/stores/comments/:id', (req, res) => {
  controller.findComments(req.params.id, (error, results) => {
    if (error) {
      console.error('ERROR findComments query failed');
    } else {
      res.send(results);
    }
  });
});

app.put('/update-likes', (req, res) => {
  controller.updateLikes(req.body, (error) => {
    if (error) {
      console.error('ERROR updateLikes query failed');
    } else {
      res.send('Post successful!');
    }
  });
});

app.post('/stores/comment', (req, res) => {
  controller.insertComment(req.body, (error) => {
    if (error) {
      console.error('ERROR insertComment query failed', error);
    } else {
      res.send('Post successful!');
    }
  });
});

app.post('/new-subscriber', (req, res) => {
  controller.insertSubscriber(req.body, (error) => {
    if (error) {
      console.error('ERROR insertSubscriber query failed', error)
    } else {
      twilioClient.messages.create({
        to: req.body.phoneNumber,
        from: '+16263178466',
        body: `Welcome to Boba Stop! You're on the list!`,
      })
      .then((message) => console.log(message.sid));
      res.send('Post successful!');
    }
  })
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}...`));
