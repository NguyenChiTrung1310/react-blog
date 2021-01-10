const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://TrungNguyen:123%23blog@react-blog.8hz7n.mongodb.net/reactblog?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('DB connected !'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('HELLOOO !');
});

app.listen(5000);
