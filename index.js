const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.log(err);
  });

app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.put('/api/products/:id?desc=', ctrl.update);
app.post('/api/products', ctrl.create);
app.delete('/api/products', ctrl.delete);

// const PORT = 3000;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`knock knock on ${port}`);
});
// const express = require('express');
// const bodyParser = require('body-parser');
// const massive = require('massive');
// require('dotenv').config();
// const products_controller = require('./products_controller');

// const app = express();
// app.use(bodyParser.json());
// massive(process.env.CONNECTION_STRING)
//   .then(dbInstance => {
//     app.set('db', dbInstance);
//   })
//   .catch(err => console.log(err));

// app.post('/api/products', products_controller.create);
// app.get('/api/products', products_controller.getAll);
// app.get('/api/products/:id', products_controller.getOne);
// app.put('/api/products/:id', products_controller.update);
// app.delete('/api/products/:id', products_controller.delete);

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}.`);
// });
