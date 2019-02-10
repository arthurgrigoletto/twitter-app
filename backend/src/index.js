const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose
  .connect(
    'mongodb://arthurgrigoletto:Lima9608@ds121475.mlab.com:21475/goweek-agnl',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDb Connected'));

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
